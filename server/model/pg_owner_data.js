import db from '../services/db.conn.js';
import fx from '../shared/fx.js';
import redis from '../services/redis.service.js';


class Pg_owner_db {

    async add_pg_owner(data, res) {
        try {
            const result = await db.insert('pg_owners', data);

            console.log(result);

            if (result.status) {
                return fx.sendResponse(res, { status: true, message: 'Pg owner added successfully', data: result.data?.[0] });
            } else {
                let message = 'Failed to add PG owner';
                if (result.err?.code === '23505') {
                    if (result.err?.constraint === 'pg_owners_email_unique' || result.err?.detail?.includes('email')) {
                        message = 'Email already exists. Please use a different email.';
                    } else if (result.err?.constraint === 'pg_owners_phone_unique' || result.err?.detail?.includes('phone')) {
                        message = 'Phone number already exists. Please use a different phone number.';
                    } else {
                        message = result.err?.detail || 'A client with these details already exists.';
                    }
                } else if (result.err?.code === '23503') {
                    message = 'Selected plan does not exist.';
                } else {
                    message = result.err?.detail || result.err?.message || 'Error creating client';
                }
                return fx.sendResponse(res, { status: false, message, statusCode: 400 });
            }
        } catch (err) {
            return fx.sendResponse(res, { status: false, message: err.message || 'Error creating client', statusCode: 500 });
        }
    }

    async update_pg_owner(data, id, res) {
        try {
            const result = await db.update('pg_owners', data, { id: id });

            if (result.status) {
                return fx.sendResponse(res, { status: true, message: 'Pg owner updated successfully' });
            } else {
                let message = 'Failed to update PG owner';
                if (result.err?.code === '23505') {
                    if (result.err?.constraint === 'pg_owners_email_unique' || result.err?.detail?.includes('email')) {
                        message = 'Email already exists. Please use a different email.';
                    } else if (result.err?.constraint === 'pg_owners_phone_unique' || result.err?.detail?.includes('phone')) {
                        message = 'Phone number already exists. Please use a different phone number.';
                    } else {
                        message = result.err?.detail || 'A client with these details already exists.';
                    }
                } else {
                    message = result.err?.detail || result.err?.message || 'Error updating client';
                }
                return fx.sendResponse(res, { status: false, message, statusCode: 400 });
            }
        } catch (err) {
            return fx.sendResponse(res, { status: false, message: err.message || 'Error updating client', statusCode: 500 });
        }
    }


    async pg_owner_login(email) {

        const result = await db.getSingleRow('pg_owners', { email: email });

        return result;

    }

    async client_table(whereObj, sort_by, order, limit, offset, page, res) {

        const whereClause = db.getWhere(whereObj)

        const sql = `SELECT *, (SELECT plan_name FROM plan WHERE id = pg_owners.plan_id) AS plan_name FROM pg_owners ${whereClause} ORDER BY status = 0, ${sort_by} ${order} LIMIT ${limit} OFFSET ${offset}`;
        const countSql = `SELECT COUNT(*) as total FROM pg_owners ${whereClause}`;

        const [clients, countResult] = await Promise.all([
            db.query(sql),
            db.querySingle(countSql)

        ]).catch(err => {
            return fx.sendResponse(res, { status: false, statusCode: 400, message: err?.message || 'Failed to fetch clients' });
        });

        // res.send(clients)
        // return

        const total_pages = Math.ceil(countResult.data.total / Number(limit));

        return res.status(200).json({
            status: true,
            data: clients.data,
            total_records: countResult.data.total,
            page: Number(page),
            limit: Number(limit),
            total_pages: Number(total_pages),
            query: clients.query
        });

    }

    async state_data(res) {

        const result = await db.query('Select * from district_master')

        if (result.status) {
            return fx.sendResponse(res, { message: 'State data get successfully', data: result.data })
        } else {
            return fx.sendResponse(res, { status: false, message: result.err?.message || 'Failed to fetch state data' })
        }

    }

    async client_dashboard_data(properties, res) {
        try {
            // Validate properties
            if (!Array.isArray(properties) || properties.length === 0) {
                return res.json({
                    status: true,
                    total_tenant: 0,
                    total_complaints: 0,
                    total_pending_rent: 0,
                    total_paid_rent: 0,
                    pending_amount: 0,
                    paid_amount: 0,
                    total_pending_complaints: 0,
                    total_rooms: 0,
                    total_rooms_available: 0,
                    room_pi_data: []
                });
            }

            const cleanIds = properties.map(Number).filter(n => !isNaN(n));
            if (cleanIds.length === 0) {
                return res.json({
                    status: true,
                    total_tenant: 0,
                    total_complaints: 0,
                    total_pending_rent: 0,
                    total_paid_rent: 0,
                    pending_amount: 0,
                    paid_amount: 0,
                    total_pending_complaints: 0,
                    total_rooms: 0,
                    total_rooms_available: 0,
                    room_pi_data: []
                });
            }

            const sortedIds = [...cleanIds].sort((a, b) => a - b);
            const idList = sortedIds.join(',');
            const cacheKey = `cache:owner:dashboard:${idList}`;

            // 1. Try to read from Redis cache
            const cachedDashboard = await redis.get(cacheKey);
            if (cachedDashboard) {
                return res.json({
                    status: true,
                    from_cache: true,
                    ...cachedDashboard
                });
            }

            // 2. Cache Miss: Run PostgreSQL aggregate queries
            const sql1 = `SELECT COUNT(id) AS total_tenant FROM tenants WHERE pg_id IN (${idList}) AND status = 1`;
            const sql2 = `SELECT COUNT(id) AS total_complaints FROM complaints WHERE pg_id IN (${idList})`;
            const sql3 = `SELECT COUNT(id) AS total_pending_rent, COALESCE(SUM(monthly_rent), 0) AS pending_amount FROM tenants WHERE pg_id IN (${idList}) AND rent_status = 'pending' AND status = 1`;
            const sql4 = `SELECT COUNT(id) AS total_paid_rent, COALESCE(SUM(monthly_rent), 0) AS paid_amount FROM tenants WHERE pg_id IN (${idList}) AND rent_status = 'paid' AND status = 1`;
            const sql5 = `SELECT COUNT(id) AS total_pending_complaints FROM complaints WHERE pg_id IN (${idList}) AND status = 'pending'`;
            const sql6 = `SELECT COUNT(id) AS total_rooms FROM rooms WHERE property_id IN (${idList}) AND status = 1`;
            const sql7 = `SELECT COUNT(rm.id) AS total_rooms_available FROM rooms rm LEFT JOIN tenants tt ON rm.id = tt.room_id AND tt.status = 1 WHERE rm.property_id IN (${idList}) AND rm.status = 1 AND tt.id IS NULL`;
            
            const sql8 = `SELECT 
                p.id,
                p.name AS pg_name,
                COUNT(DISTINCT r.id) AS total_rooms,
                COUNT(DISTINCT CASE WHEN t.status = 1 THEN r.id END) AS filled_rooms
            FROM rooms r
            INNER JOIN pg_properties p ON r.property_id = p.id
            LEFT JOIN tenants t ON t.room_id = r.id AND t.status = 1
            WHERE r.property_id IN (${idList}) AND r.status = 1
            GROUP BY p.id, p.name;`;

            const [totalTenantRes, totalComplaintsRes, pendingRentRes, paidRentRes, pendingComplaintRes, totalRooms, totalRoomsAvailable, roomPiData] = await Promise.all([
                db.query(sql1),
                db.query(sql2),
                db.query(sql3),
                db.query(sql4),
                db.query(sql5),
                db.query(sql6),
                db.query(sql7),
                db.query(sql8),
            ]);

            const dashboardPayload = {
                total_tenant: Number(totalTenantRes?.data?.[0]?.total_tenant || 0),
                total_complaints: Number(totalComplaintsRes?.data?.[0]?.total_complaints || 0),
                total_pending_rent: Number(pendingRentRes?.data?.[0]?.total_pending_rent || 0),
                pending_amount: Number(pendingRentRes?.data?.[0]?.pending_amount || 0),
                total_paid_rent: Number(paidRentRes?.data?.[0]?.total_paid_rent || 0),
                paid_amount: Number(paidRentRes?.data?.[0]?.paid_amount || 0),
                total_pending_complaints: Number(pendingComplaintRes?.data?.[0]?.total_pending_complaints || 0),
                total_rooms: Number(totalRooms?.data?.[0]?.total_rooms || 0),
                total_rooms_available: Number(totalRoomsAvailable?.data?.[0]?.total_rooms_available || 0),
                room_pi_data: roomPiData?.data || []
            };

            // 3. Store in Redis with 5 minutes (300 seconds) TTL
            await redis.set(cacheKey, dashboardPayload, 300);

            return res.json({
                status: true,
                from_cache: false,
                ...dashboardPayload
            });

        } catch (error) {
            console.error('Dashboard error:', error);
            return res.status(500).json({
                status: false,
                message: 'Server error while fetching dashboard data',
                error: error.message
            });
        }
    }


}

export default new Pg_owner_db;