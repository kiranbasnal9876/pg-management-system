import express from 'express';
import bcrypt from 'bcrypt';
import fx from '../shared/fx.js';
import { login_validation } from '../shared/form_validation.js';
import form_error_message from '../shared/form_error_message.js';
import db from '../services/db.conn.js';
import { encodeToken, getAuthHeader, decodeToken } from '../auth/jwtTokenAuth.js';
import redis from '../services/redis.service.js';


class Admin {

    // Super Admin login endpoint
    super_admin_login() {
        const router = express.Router();

        router.post('/', login_validation, form_error_message, async (req, res) => {
            try {
                const { email, password } = req.body;
                const result = await db.querySingle('SELECT * FROM super_admin WHERE email = $1', [email]);

                if (!result.status || !result.data) {
                    return fx.sendResponse(res, { status: false, message: 'Super Admin email not found' });
                }

                const admin = result.data;
                let isMatch = false;

                if (admin.password && admin.password.startsWith('$2b$')) {
                    isMatch = await bcrypt.compare(password, admin.password);
                } else {
                    isMatch = admin.password === password;
                }

                if (!isMatch) {
                    return fx.sendResponse(res, { status: false, message: 'Incorrect password' });
                }

                const adminUser = {
                    id: admin.id,
                    name: admin.name || 'Super Administrator',
                    email: admin.email,
                    phone: admin.phone,
                    role: 'super_admin'
                };

                return fx.sendResponse(res, {
                    status: true,
                    message: 'Super Admin login successful',
                    token: encodeToken(adminUser),
                    role: 'super_admin',
                    user: adminUser
                });
            } catch (err) {
                console.error('Super Admin login error:', err);
                return fx.sendResponse(res, { status: false, message: err.message, statusCode: 500 });
            }
        });

        return router;
    }

    // Super Admin platform metrics overview
    super_admin_stats() {
        const router = express.Router();

        router.all('/', async (req, res) => {
            try {
                const [clientsRes, activeClientsRes, propertiesRes, roomsRes, tenantsRes, plansRes, recentClientsRes] = await Promise.all([
                    db.querySingle('SELECT COUNT(*) AS total_clients FROM pg_owners'),
                    db.querySingle('SELECT COUNT(*) AS active_clients FROM pg_owners WHERE status = 1'),
                    db.querySingle('SELECT COUNT(*) AS total_properties FROM pg_properties'),
                    db.querySingle('SELECT COUNT(*) AS total_rooms FROM rooms'),
                    db.querySingle('SELECT COUNT(*) AS total_tenants FROM tenants'),
                    db.query(`SELECT p.*, 
                                     COALESCE((SELECT COUNT(*) FROM pg_owners po WHERE po.plan_id = p.id), 0) AS subscriber_count 
                              FROM plan p ORDER BY p.id ASC`),
                    db.query(`SELECT po.id, po.name, po.email, po.phone, po.status, po.created_at, po.plan_id, p.plan_name 
                              FROM pg_owners po 
                              LEFT JOIN plan p ON po.plan_id = p.id 
                              ORDER BY po.id DESC LIMIT 5`)
                ]);

                const total_clients = Number(clientsRes?.data?.total_clients || 0);
                const active_clients = Number(activeClientsRes?.data?.active_clients || 0);
                const total_properties = Number(propertiesRes?.data?.total_properties || 0);
                const total_rooms = Number(roomsRes?.data?.total_rooms || 0);
                const total_tenants = Number(tenantsRes?.data?.total_tenants || 0);
                const plans = plansRes?.data || [];
                const recent_clients = recentClientsRes?.data || [];

                let estimated_mrr = 0;
                plans.forEach(p => {
                    estimated_mrr += (Number(p.price) || 0) * (Number(p.subscriber_count) || 0);
                });

                return res.json({
                    status: true,
                    stats: {
                        total_clients,
                        active_clients,
                        inactive_clients: total_clients - active_clients,
                        total_properties,
                        total_rooms,
                        total_tenants,
                        total_plans: plans.length,
                        estimated_mrr,
                        plans,
                        recent_clients
                    }
                });
            } catch (err) {
                console.error('Super Admin stats error:', err);
                return res.status(500).json({ status: false, message: err.message });
            }
        });

        return router;
    }

    // List all subscription plans (Cached with Redis, 1h TTL)
    plan_list() {
        const router = express.Router();

        router.all('/', async (req, res) => {
            try {
                const cacheKey = 'cache:plans:all';
                const cachedPlans = await redis.get(cacheKey);
                if (cachedPlans) {
                    return res.json({
                        status: true,
                        from_cache: true,
                        data: cachedPlans
                    });
                }

                const result = await db.query(`SELECT p.*, 
                                                      COALESCE((SELECT COUNT(*) FROM pg_owners po WHERE po.plan_id = p.id), 0) AS subscriber_count 
                                               FROM plan p ORDER BY p.id ASC`);

                const plans = result.data || [];
                await redis.set(cacheKey, plans, 3600); // 1 hour TTL

                return res.json({
                    status: true,
                    from_cache: false,
                    data: plans
                });
            } catch (err) {
                return res.status(500).json({ status: false, message: err.message });
            }
        });

        return router;
    }

    // Plans data table for admin management
    plan_table() {
        const router = express.Router();

        router.post('/', async (req, res) => {
            try {
                const result = await db.query(`SELECT p.*, 
                                                      COALESCE((SELECT COUNT(*) FROM pg_owners po WHERE po.plan_id = p.id), 0) AS subscriber_count 
                                               FROM plan p ORDER BY p.id ASC`);
                return res.json({
                    status: true,
                    data: result.data || [],
                    total_records: result.data?.length || 0
                });
            } catch (err) {
                return res.status(500).json({ status: false, message: err.message });
            }
        });

        return router;
    }

    // Add new subscription plan
    add_plan() {
        const router = express.Router();

        router.post('/', async (req, res) => {
            try {
                const { plan_name, total_property, total_rooms, total_tenant, price, billing_cycle, features } = req.body;

                if (!plan_name) {
                    return res.status(400).json({ status: false, message: 'Plan name is required' });
                }

                const result = await db.insert('plan', {
                    plan_name,
                    total_property: Number(total_property) || 1,
                    total_rooms: Number(total_rooms) || 50,
                    total_tenant: Number(total_tenant) || 100,
                    price: Number(price) || 0,
                    billing_cycle: billing_cycle || 'monthly',
                    features: features || '',
                    status: 1
                });

                if (result.status) {
                    await redis.del('cache:plans:all');
                    return res.json({ status: true, message: 'Subscription plan created successfully' });
                } else {
                    return res.status(400).json({ status: false, message: result.err?.detail || result.err?.message || 'Failed to create plan' });
                }
            } catch (err) {
                return res.status(500).json({ status: false, message: err.message });
            }
        });

        return router;
    }

    // Update existing subscription plan
    update_plan() {
        const router = express.Router();

        router.post('/', async (req, res) => {
            try {
                const { id, plan_name, total_property, total_rooms, total_tenant, price, billing_cycle, features, status } = req.body;

                if (!id) {
                    return res.status(400).json({ status: false, message: 'Plan ID is required' });
                }

                const updateData = {};
                if (plan_name !== undefined) updateData.plan_name = plan_name;
                if (total_property !== undefined) updateData.total_property = Number(total_property);
                if (total_rooms !== undefined) updateData.total_rooms = Number(total_rooms);
                if (total_tenant !== undefined) updateData.total_tenant = Number(total_tenant);
                if (price !== undefined) updateData.price = Number(price);
                if (billing_cycle !== undefined) updateData.billing_cycle = billing_cycle;
                if (features !== undefined) updateData.features = features;
                if (status !== undefined) updateData.status = Number(status);
                updateData.updated_at = new Date();

                const result = await db.update('plan', updateData, { id: Number(id) });

                if (result.status) {
                    await redis.del('cache:plans:all');
                    return res.json({ status: true, message: 'Subscription plan updated successfully' });
                } else {
                    return res.status(400).json({ status: false, message: result.err?.detail || result.err?.message || 'Failed to update plan' });
                }
            } catch (err) {
                return res.status(500).json({ status: false, message: err.message });
            }
        });

        return router;
    }

    // Delete subscription plan
    delete_plan() {
        const router = express.Router();

        router.post('/', async (req, res) => {
            try {
                const { id } = req.body;

                if (!id) {
                    return res.status(400).json({ status: false, message: 'Plan ID is required' });
                }

                // Check if any PG owners are currently using this plan
                const checkOwners = await db.querySingle('SELECT COUNT(*) as count FROM pg_owners WHERE plan_id = $1', [Number(id)]);
                if (Number(checkOwners?.data?.count || 0) > 0) {
                    return res.status(400).json({ 
                        status: false, 
                        message: `Cannot delete plan: ${checkOwners.data.count} client(s) are currently subscribed to it.` 
                    });
                }

                const result = await db.query('DELETE FROM plan WHERE id = $1', [Number(id)]);

                if (result.status) {
                    await redis.del('cache:plans:all');
                    return res.json({ status: true, message: 'Plan deleted successfully' });
                } else {
                    return res.status(400).json({ status: false, message: result.err?.message || 'Failed to delete plan' });
                }
            } catch (err) {
                return res.status(500).json({ status: false, message: err.message });
            }
        });

        return router;
    }

    // Fetch Super Admin profile
    get_admin_profile() {
        const router = express.Router();

        router.post('/', async (req, res) => {
            try {
                const token = getAuthHeader(req);
                const user = decodeToken(token);

                if (!user || user.role !== 'super_admin') {
                    return fx.sendResponse(res, { status: false, message: 'Unauthorized. Super Admin access required', statusCode: 403 });
                }

                const result = await db.querySingle(
                    'SELECT id, name, email, phone, role, created_at, updated_at FROM super_admin WHERE id = $1',
                    [user.id]
                );

                if (!result.status || !result.data) {
                    return fx.sendResponse(res, { status: false, message: 'Super Admin record not found', statusCode: 404 });
                }

                return res.json({
                    status: true,
                    admin: result.data
                });
            } catch (err) {
                return fx.sendResponse(res, { status: false, message: err.message, statusCode: 500 });
            }
        });

        return router;
    }

    // Update Super Admin profile (name, email, phone)
    update_admin_profile() {
        const router = express.Router();

        router.post('/', async (req, res) => {
            try {
                const token = getAuthHeader(req);
                const user = decodeToken(token);

                if (!user || user.role !== 'super_admin') {
                    return fx.sendResponse(res, { status: false, message: 'Unauthorized. Super Admin access required', statusCode: 403 });
                }

                const { name, email, phone } = req.body;

                if (!name || !email) {
                    return fx.sendResponse(res, { status: false, message: 'Name and email are required', statusCode: 400 });
                }

                // Check for duplicate email
                const emailCheck = await db.querySingle(
                    'SELECT id FROM super_admin WHERE email = $1 AND id != $2',
                    [email.trim(), user.id]
                );

                if (emailCheck?.status && emailCheck?.data) {
                    return fx.sendResponse(res, { status: false, message: 'This email is already in use by another administrator', statusCode: 400 });
                }

                const updateResult = await db.query(
                    `UPDATE super_admin 
                     SET name = $1, email = $2, phone = $3, updated_at = CURRENT_TIMESTAMP 
                     WHERE id = $4 
                     RETURNING id, name, email, phone, role, updated_at`,
                    [name.trim(), email.trim(), phone ? phone.trim() : null, user.id]
                );

                if (!updateResult.status) {
                    return fx.sendResponse(res, { status: false, message: updateResult.err?.message || 'Failed to update profile', statusCode: 500 });
                }

                return res.json({
                    status: true,
                    message: 'Super Admin profile updated successfully!',
                    admin: updateResult.data?.[0]
                });
            } catch (err) {
                return fx.sendResponse(res, { status: false, message: err.message, statusCode: 500 });
            }
        });

        return router;
    }

    // Change Super Admin password
    change_admin_password() {
        const router = express.Router();

        router.post('/', async (req, res) => {
            try {
                const token = getAuthHeader(req);
                const user = decodeToken(token);

                if (!user || user.role !== 'super_admin') {
                    return fx.sendResponse(res, { status: false, message: 'Unauthorized. Super Admin access required', statusCode: 403 });
                }

                const { current_password, new_password } = req.body;

                if (!current_password || !new_password) {
                    return fx.sendResponse(res, { status: false, message: 'Current password and new password are required', statusCode: 400 });
                }

                if (new_password.length < 6) {
                    return fx.sendResponse(res, { status: false, message: 'New password must be at least 6 characters long', statusCode: 400 });
                }

                const adminRecord = await db.querySingle(
                    'SELECT id, password FROM super_admin WHERE id = $1',
                    [user.id]
                );

                if (!adminRecord.status || !adminRecord.data) {
                    return fx.sendResponse(res, { status: false, message: 'Administrator record not found', statusCode: 404 });
                }

                const storedPassword = adminRecord.data.password;
                let isMatch = false;

                if (storedPassword && storedPassword.startsWith('$2b$')) {
                    isMatch = await bcrypt.compare(current_password, storedPassword);
                } else {
                    isMatch = storedPassword === current_password;
                }

                if (!isMatch) {
                    return fx.sendResponse(res, { status: false, message: 'Current password is incorrect', statusCode: 400 });
                }

                const hashedPassword = await bcrypt.hash(new_password, 10);

                const updatePass = await db.query(
                    'UPDATE super_admin SET password = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2',
                    [hashedPassword, user.id]
                );

                if (!updatePass.status) {
                    return fx.sendResponse(res, { status: false, message: updatePass.err?.message || 'Failed to update password', statusCode: 500 });
                }

                return res.json({
                    status: true,
                    message: 'Password changed successfully!'
                });
            } catch (err) {
                return fx.sendResponse(res, { status: false, message: err.message, statusCode: 500 });
            }
        });

        return router;
    }

    // System Health & Diagnostics
    system_health() {
        const router = express.Router();

        router.post('/', async (req, res) => {
            try {
                const token = getAuthHeader(req);
                const user = decodeToken(token);

                if (!user || user.role !== 'super_admin') {
                    return fx.sendResponse(res, { status: false, message: 'Unauthorized', statusCode: 403 });
                }

                const [dbSizeRes, pgVerRes, clientCount, propCount, roomCount, tenantCount, compCount, txnRes, redisStatus] = await Promise.all([
                    db.querySingle("SELECT pg_size_pretty(pg_database_size(current_database())) as size"),
                    db.querySingle("SELECT version() as version"),
                    db.querySingle("SELECT COUNT(*) as count FROM pg_owners"),
                    db.querySingle("SELECT COUNT(*) as count FROM pg_properties"),
                    db.querySingle("SELECT COUNT(*) as count FROM rooms"),
                    db.querySingle("SELECT COUNT(*) as count FROM tenants"),
                    db.querySingle("SELECT COUNT(*) as count FROM complaints"),
                    db.querySingle("SELECT COUNT(*) as count, COALESCE(SUM(amount), 0) as total_volume FROM rent_transactions WHERE status = 'Success'"),
                    redis.getStatus()
                ]);

                return res.json({
                    status: true,
                    health: {
                        database_name: process.env.DB_NAME || 'pg_management_system',
                        database_size: dbSizeRes.data?.size || 'N/A',
                        database_version: pgVerRes.data?.version?.split(' on ')[0] || 'PostgreSQL 16',
                        server_uptime_seconds: Math.floor(process.uptime()),
                        node_version: process.version,
                        redis_status: redisStatus.status,
                        redis_memory: redisStatus.memory_used,
                        total_clients: Number(clientCount.data?.count || 0),
                        total_properties: Number(propCount.data?.count || 0),
                        total_rooms: Number(roomCount.data?.count || 0),
                        total_tenants: Number(tenantCount.data?.count || 0),
                        total_complaints: Number(compCount.data?.count || 0),
                        successful_transactions: Number(txnRes.data?.count || 0),
                        total_payment_volume: Number(txnRes.data?.total_volume || 0)
                    }
                });
            } catch (err) {
                return fx.sendResponse(res, { status: false, message: err.message, statusCode: 500 });
            }
        });

        return router;
    }
}

export default new Admin();
