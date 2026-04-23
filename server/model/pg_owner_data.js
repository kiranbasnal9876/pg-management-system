import db from '../services/db.conn.js';
import fx from '../shared/fx.js'


class Pg_owner_db {

    async add_pg_owner(data, res) {

        const result = await db.insert('pg_owners', data);

        if (result.status) {
            fx.sendResponse(res, { message: 'Pg owner added successfully' })
        } else {
            fx.sendResponse(res, { status: false, message: result.err.sqlMessage })
        }

    }

    async update_pg_owner(data, id, res) {

        const result = await db.update('pg_owners', data, { id: id });

        if (result.status) {
            fx.sendResponse(res, { message: 'Pg owner updated successfully' })
        } else {
            fx.sendResponse(res, { status: false, message: result.err.sqlMessage })
        }

    }


    async pg_owner_login(email) {

        const result = await db.getSingleRow('pg_owners', { email: email });

        return result;

    }

    async client_table(whereObj, sort_by, order, limit, offset, page, res) {

        const whereClause = db.getWhere(whereObj)

        const sql = `SELECT * FROM pg_owners ${whereClause} ORDER BY status = 0,  ${sort_by} ${order} LIMIT ${limit} OFFSET ${offset}`;
        const countSql = `SELECT COUNT(*) as total FROM pg_owners ${whereClause}`;

        const [clients, countResult] = await Promise.all([
            db.query(sql),
            db.querySingle(countSql)

        ]).catch(err => {
            fx.sendResponse(res, { status: true, statusCode: 400, message: err.err.sqlMessage })
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
            fx.sendResponse(res, { message: 'State data get successfully', data: result.data })
        } else {
            fx.sendResponse(res, { status: false, message: result.err.sqlMessage })
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
                    total_pending_complaints: 0,
                    total_rooms: 0,
                    room_pi_data: []
                });
            }

            const placeholders = properties.map(() => '?').join(',');

            // Queries
            const sql1 = `SELECT COUNT(id) AS total_tenant FROM tenants WHERE pg_id IN (${placeholders}) AND status = '1'`;
            const sql2 = `SELECT COUNT(id) AS total_complaints FROM complaints WHERE pg_id IN (${placeholders})`;
            const sql3 = `SELECT COUNT(id) AS total_pending_rent FROM tenants WHERE pg_id IN (${placeholders}) AND rent_status = 'pending'`;
            const sql4 = `SELECT COUNT(id) AS total_paid_rent FROM tenants WHERE pg_id IN (${placeholders}) AND rent_status = 'paid'`;
            const sql5 = `Select COUNT(id) AS total_pending_complaints from complaints where pg_id IN (${placeholders}) and status = 'pending'`
            const sql6 = `Select COUNT(id) AS total_rooms from rooms where property_id IN (${placeholders}) and status = '1'`
            const sql7 = `Select count(id) AS total_rooms_available from rooms rm join tenants as tt on rm.property_id = tt.pg_id where rm.status = 1 and tt.status = 1`
            
            const sql8 = `SELECT 
p.id ,
    p.name AS pg_name,
    COUNT(DISTINCT r.id) AS total_rooms,
    COUNT(DISTINCT CASE WHEN t.status = 1 THEN r.id END) AS filled_rooms
FROM rooms r
INNER JOIN pg_properties p ON r.property_id = p.id
LEFT JOIN tenants t ON t.room_id = r.id AND t.status = 1
WHERE r.property_id IN (${placeholders}) AND r.status = 1
GROUP BY p.id;

`

            const [totalTenantRes, totalComplaintsRes, pendingRentRes, paidRentRes, pendingComplaintRes, totalRooms , total_rooms_available , room_pi_data] = await Promise.all([
                db.query(sql1, properties),
                db.query(sql2, properties),
                db.query(sql3, properties),
                db.query(sql4, properties),
                db.query(sql5, properties),
                db.query(sql6, properties),
                db.query(sql7, properties),
                db.query(sql8, properties),
            ]);

            // Handle all query results
            if (!totalTenantRes.status || !totalComplaintsRes.status || !pendingRentRes.status || !paidRentRes.status || !pendingComplaintRes.status || !totalRooms.status || !room_pi_data) {
                return res.status(500).json({
                    status: false,
                    message: "Failed to fetch dashboard data",
                    errors: {
                        total_tenant: totalTenantRes.err,
                        total_complaints: totalComplaintsRes.err,
                        total_pending_rent: pendingRentRes.err,
                        total_paid_rent: paidRentRes.err,
                        pendingComplaints: pendingComplaintRes.err,
                        total_rooms: totalRooms.err,
                        room_pi_data: room_pi_data.err
                    }
                });
            }

            return res.json({
                status: true,
                total_tenant: totalTenantRes.data[0].total_tenant,
                total_complaints: totalComplaintsRes.data[0].total_complaints,
                total_pending_rent: pendingRentRes.data[0].total_pending_rent,
                total_paid_rent: paidRentRes.data[0].total_paid_rent,
                total_pending_complaints: pendingComplaintRes.data[0].total_pending_complaints,
                total_rooms: totalRooms.data[0].total_rooms,
                room_pi_data: room_pi_data.data
            });

        } catch (error) {
            console.error('Dashboard error:', error);
            return res.status(500).json({
                status: false,
                message: 'Server error while fetching dashboard data',
                error
            });
        }
    }


}

export default new Pg_owner_db;