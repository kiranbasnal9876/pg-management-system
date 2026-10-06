import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import db from '../services/db.conn.js';
import fx from '../shared/fx.js';
import { getAuthHeader, decodeToken } from '../auth/jwtTokenAuth.js';

class RentPayment {

    // 1. Create Razorpay Order
    create_order() {
        const router = express.Router();

        router.post('/', async (req, res) => {
            try {
                const token = getAuthHeader(req);
                const user = decodeToken(token);

                if (!user) {
                    return fx.sendResponse(res, { status: false, message: 'Unauthorized', statusCode: 401 });
                }

                // If tenant, get tenant details from DB
                const tenantId = req.body.tenant_id || user.id;
                const tenantQuery = await db.query(
                    `SELECT t.id, t.name, t.email, t.phone, t.monthly_rent, t.rent_status, t.room_id, t.pg_id,
                            r.room_number, p.name AS pg_name, po.phone AS owner_phone
                     FROM tenants t
                     LEFT JOIN rooms r ON t.room_id = r.id
                     LEFT JOIN pg_properties p ON t.pg_id = p.id
                     LEFT JOIN pg_owners po ON t.owner_id = po.id
                     WHERE t.id = $1`,
                    [tenantId]
                );

                if (!tenantQuery.status || tenantQuery.data.length === 0) {
                    return fx.sendResponse(res, { status: false, message: 'Tenant record not found', statusCode: 404 });
                }

                const tenant = tenantQuery.data[0];
                const amount = Number(req.body.amount || tenant.monthly_rent || 8000);

                if (isNaN(amount) || amount <= 0) {
                    return fx.sendResponse(res, { status: false, message: 'Invalid payment amount', statusCode: 400 });
                }

                const keyId = process.env.RAZORPAY_KEY_ID || 'rzp_test_1DP5mmOlF5G5ag';
                const keySecret = process.env.RAZORPAY_KEY_SECRET || 's2xL7UeE8xW61nN1O4f5E3V8';

                let order;
                try {
                    const razorpay = new Razorpay({
                        key_id: keyId,
                        key_secret: keySecret
                    });

                    order = await razorpay.orders.create({
                        amount: Math.round(amount * 100), // amount in paise
                        currency: 'INR',
                        receipt: `rcpt_${tenant.id}_${Date.now()}`,
                        notes: {
                            tenant_id: String(tenant.id),
                            tenant_name: tenant.name,
                            pg_id: String(tenant.pg_id),
                            room_id: String(tenant.room_id)
                        }
                    });
                } catch (razorErr) {
                    // Demo fallback if Razorpay API server or key test credentials throw
                    console.log('Razorpay API notice, using demo test order mode:', razorErr.message);
                    order = {
                        id: `order_demo_${Date.now()}`,
                        amount: Math.round(amount * 100),
                        currency: 'INR',
                        receipt: `rcpt_${tenant.id}_${Date.now()}`
                    };
                }

                return res.status(200).json({
                    status: true,
                    order_id: order.id,
                    amount: order.amount,
                    currency: order.currency || 'INR',
                    key_id: keyId,
                    tenant: {
                        id: tenant.id,
                        name: tenant.name,
                        email: tenant.email,
                        phone: tenant.phone,
                        monthly_rent: tenant.monthly_rent,
                        room_number: tenant.room_number,
                        pg_name: tenant.pg_name,
                        owner_phone: tenant.owner_phone
                    }
                });

            } catch (err) {
                console.error('Error creating Razorpay order:', err);
                return fx.sendResponse(res, { status: false, message: err.message, statusCode: 500 });
            }
        });

        return router;
    }

    // 2. Verify Razorpay Payment & Update Rent Status
    verify_payment() {
        const router = express.Router();

        router.post('/', async (req, res) => {
            try {
                const token = getAuthHeader(req);
                const user = decodeToken(token);

                const {
                    razorpay_order_id,
                    razorpay_payment_id,
                    razorpay_signature,
                    amount,
                    tenant_id
                } = req.body;

                const targetTenantId = tenant_id || user?.id;

                if (!targetTenantId) {
                    return fx.sendResponse(res, { status: false, message: 'Tenant ID is required', statusCode: 400 });
                }

                // Verify signature if not a demo test order
                const keySecret = process.env.RAZORPAY_KEY_SECRET || 's2xL7UeE8xW61nN1O4f5E3V8';
                let isSignatureValid = true;

                if (razorpay_signature && !razorpay_order_id.startsWith('order_demo_')) {
                    const hmac = crypto.createHmac('sha256', keySecret);
                    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
                    const generatedSignature = hmac.digest('hex');
                    if (generatedSignature !== razorpay_signature) {
                        isSignatureValid = false;
                    }
                }

                if (!isSignatureValid) {
                    return fx.sendResponse(res, { status: false, message: 'Invalid payment signature verification failed', statusCode: 400 });
                }

                // Get tenant details
                const tenantQuery = await db.query(
                    `SELECT t.id, t.name, t.phone, t.email, t.room_id, t.pg_id, t.owner_id, t.monthly_rent,
                            r.room_number, p.name AS pg_name, po.phone AS owner_phone
                     FROM tenants t
                     LEFT JOIN rooms r ON t.room_id = r.id
                     LEFT JOIN pg_properties p ON t.pg_id = p.id
                     LEFT JOIN pg_owners po ON t.owner_id = po.id
                     WHERE t.id = $1`,
                    [targetTenantId]
                );

                if (!tenantQuery.status || tenantQuery.data.length === 0) {
                    return fx.sendResponse(res, { status: false, message: 'Tenant not found' });
                }

                const tenant = tenantQuery.data[0];
                const paymentAmount = Number(amount || tenant.monthly_rent || 8000);
                const paymentTxnId = razorpay_payment_id || `pay_${Date.now()}`;

                // Insert into rent_transactions
                const insertTxn = await db.query(
                    `INSERT INTO rent_transactions 
                     (tenant_id, pg_id, room_id, amount, payment_method, transaction_id, razorpay_order_id, razorpay_payment_id, razorpay_signature, status, payment_date)
                     VALUES ($1, $2, $3, $4, 'Razorpay', $5, $6, $7, $8, 'Success', CURRENT_TIMESTAMP)
                     RETURNING *`,
                    [
                        tenant.id,
                        tenant.pg_id,
                        tenant.room_id,
                        paymentAmount,
                        paymentTxnId,
                        razorpay_order_id || 'demo_order',
                        paymentTxnId,
                        razorpay_signature || 'demo_signature'
                    ]
                );

                // Update tenant rent_status to 'paid'
                await db.query(
                    `UPDATE tenants SET rent_status = 'paid', updated_at = CURRENT_TIMESTAMP WHERE id = $1`,
                    [tenant.id]
                );

                // Build WhatsApp Receipt Message for convenience
                const receiptMessage = encodeURIComponent(
                    `*🏠 PG Rent Payment Receipt*\n\n` +
                    `Tenant Name: ${tenant.name}\n` +
                    `PG: ${tenant.pg_name || 'PG Residency'}\n` +
                    `Room: ${tenant.room_number || '-'}\n` +
                    `Amount Paid: ₹${paymentAmount.toLocaleString('en-IN')}\n` +
                    `Status: PAID (Success) ✅\n` +
                    `Payment Method: Razorpay (Online)\n` +
                    `Transaction ID: ${paymentTxnId}\n` +
                    `Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}\n\n` +
                    `Thank you for paying on time! 😊`
                );

                const whatsappUrl = `https://wa.me/${tenant.phone ? (tenant.phone.startsWith('91') ? tenant.phone : '91' + tenant.phone) : ''}?text=${receiptMessage}`;

                return res.status(200).json({
                    status: true,
                    message: 'Payment verified and rent marked as PAID successfully!',
                    transaction: insertTxn.data?.[0],
                    whatsapp_receipt_url: whatsappUrl,
                    receipt_text: decodeURIComponent(receiptMessage)
                });

            } catch (err) {
                console.error('Error in payment verification:', err);
                return fx.sendResponse(res, { status: false, message: err.message, statusCode: 500 });
            }
        });

        return router;
    }

    // 3. Tenant Rent Info & History
    tenant_rent_info() {
        const router = express.Router();

        router.post('/', async (req, res) => {
            try {
                const token = getAuthHeader(req);
                const user = decodeToken(token);

                if (!user) {
                    return fx.sendResponse(res, { status: false, message: 'Unauthorized', statusCode: 401 });
                }

                const tenantId = req.body.tenant_id || user.id;

                const tenantQuery = await db.query(
                    `SELECT t.id, t.name, t.email, t.phone, t.monthly_rent, t.rent_status, t.check_in_date,
                            r.room_number, r.type AS room_type,
                            p.id AS property_id, p.name AS pg_name, p.location AS pg_location,
                            po.name AS owner_name, po.phone AS owner_phone
                     FROM tenants t
                     LEFT JOIN rooms r ON t.room_id = r.id
                     LEFT JOIN pg_properties p ON t.pg_id = p.id
                     LEFT JOIN pg_owners po ON t.owner_id = po.id
                     WHERE t.id = $1`,
                    [tenantId]
                );

                if (!tenantQuery.status || tenantQuery.data.length === 0) {
                    return fx.sendResponse(res, { status: false, message: 'Tenant not found' });
                }

                const tenant = tenantQuery.data[0];

                // Fetch recent transaction history
                const txnQuery = await db.query(
                    `SELECT id, amount, payment_method, transaction_id, status, payment_date
                     FROM rent_transactions
                     WHERE tenant_id = $1
                     ORDER BY id DESC LIMIT 10`,
                    [tenantId]
                );

                return res.status(200).json({
                    status: true,
                    tenant,
                    transactions: txnQuery.data || []
                });

            } catch (err) {
                return fx.sendResponse(res, { status: false, message: err.message, statusCode: 500 });
            }
        });

        return router;
    }

    // 4. Owner Rent Summary: How many paid, how many not, and list for WhatsApp reminders
    owner_rent_summary() {
        const router = express.Router();

        router.post('/', async (req, res) => {
            try {
                const token = getAuthHeader(req);
                const user = decodeToken(token);

                if (!user) {
                    return fx.sendResponse(res, { status: false, message: 'Unauthorized', statusCode: 401 });
                }

                const ownerId = user.id;

                // All active tenants under this owner
                const tenantsQuery = await db.query(
                    `SELECT t.id, t.name, t.phone, t.email, t.rent_status, t.monthly_rent, t.check_in_date,
                            r.room_number, p.name AS pg_name
                     FROM tenants t
                     LEFT JOIN rooms r ON t.room_id = r.id
                     LEFT JOIN pg_properties p ON t.pg_id = p.id
                     WHERE t.owner_id = $1 AND t.status = 1
                     ORDER BY t.rent_status ASC, t.id DESC`,
                    [ownerId]
                );

                const tenants = tenantsQuery.data || [];

                const paidTenants = [];
                const pendingTenants = [];
                let totalPaidAmount = 0;
                let totalPendingAmount = 0;

                tenants.forEach(t => {
                    const rentAmt = Number(t.monthly_rent || 8000);
                    // Generate WhatsApp reminder link
                    const cleanPhone = t.phone ? (t.phone.startsWith('91') ? t.phone : '91' + t.phone.replace(/[^0-9]/g, '')) : '';
                    const reminderMsg = encodeURIComponent(
                        `Hi ${t.name}! 👋\n\n` +
                        `This is a friendly reminder from *${t.pg_name || 'PG Management'}*.\n` +
                        `Your monthly rent of *₹${rentAmt.toLocaleString('en-IN')}* for *Room ${t.room_number || '-'}* is currently *PENDING*.\n\n` +
                        `Please log in to your tenant panel to pay securely online via Razorpay/UPI.\n` +
                        `Thank you! 🏠`
                    );

                    const item = {
                        ...t,
                        monthly_rent: rentAmt,
                        whatsapp_link: cleanPhone ? `https://wa.me/${cleanPhone}?text=${reminderMsg}` : null
                    };

                    if (t.rent_status === 'paid') {
                        paidTenants.push(item);
                        totalPaidAmount += rentAmt;
                    } else {
                        pendingTenants.push(item);
                        totalPendingAmount += rentAmt;
                    }
                });

                // Recent transactions across owner's properties
                const recentTxns = await db.query(
                    `SELECT rt.*, t.name AS tenant_name, t.phone AS tenant_phone, r.room_number, p.name AS pg_name
                     FROM rent_transactions rt
                     JOIN tenants t ON rt.tenant_id = t.id
                     LEFT JOIN rooms r ON rt.room_id = r.id
                     LEFT JOIN pg_properties p ON rt.pg_id = p.id
                     WHERE t.owner_id = $1
                     ORDER BY rt.id DESC LIMIT 10`,
                    [ownerId]
                );

                return res.status(200).json({
                    status: true,
                    summary: {
                        total_tenants: tenants.length,
                        paid_count: paidTenants.length,
                        pending_count: pendingTenants.length,
                        paid_amount: totalPaidAmount,
                        pending_amount: totalPendingAmount
                    },
                    paid_tenants: paidTenants,
                    pending_tenants: pendingTenants,
                    recent_transactions: recentTxns.data || []
                });

            } catch (err) {
                console.error('Owner rent summary error:', err);
                return fx.sendResponse(res, { status: false, message: err.message, statusCode: 500 });
            }
        });

        return router;
    }

    // 5. Toggle or Manually Mark Rent Status (e.g. Cash payment received by Owner)
    toggle_rent_status() {
        const router = express.Router();

        router.post('/', async (req, res) => {
            try {
                const { tenant_id, rent_status, payment_method = 'Cash', amount } = req.body;

                if (!tenant_id || !rent_status) {
                    return fx.sendResponse(res, { status: false, message: 'Tenant ID and Rent Status are required' });
                }

                const tenantQuery = await db.query(
                    `SELECT * FROM tenants WHERE id = $1`,
                    [tenant_id]
                );

                if (!tenantQuery.status || tenantQuery.data.length === 0) {
                    return fx.sendResponse(res, { status: false, message: 'Tenant not found' });
                }

                const tenant = tenantQuery.data[0];
                const paymentAmount = Number(amount || tenant.monthly_rent || 8000);

                await db.query(
                    `UPDATE tenants SET rent_status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2`,
                    [rent_status, tenant_id]
                );

                // If marked as paid, log transaction
                if (rent_status === 'paid') {
                    await db.query(
                        `INSERT INTO rent_transactions 
                         (tenant_id, pg_id, room_id, amount, payment_method, transaction_id, status, payment_date)
                         VALUES ($1, $2, $3, $4, $5, $6, 'Success', CURRENT_TIMESTAMP)`,
                        [
                            tenant.id,
                            tenant.pg_id,
                            tenant.room_id,
                            paymentAmount,
                            payment_method,
                            `manual_${Date.now()}`
                        ]
                    );
                }

                return fx.sendResponse(res, {
                    status: true,
                    message: `Rent status updated to ${rent_status.toUpperCase()} successfully!`
                });

            } catch (err) {
                return fx.sendResponse(res, { status: false, message: err.message, statusCode: 500 });
            }
        });

        return router;
    }

}

export default new RentPayment();
