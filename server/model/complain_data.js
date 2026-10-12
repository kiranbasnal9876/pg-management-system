import db from '../services/db.conn.js';
import fx from '../shared/fx.js';

class Complaint_db {

    async add_complaint_data(data, res) {
        try {
            const result = await db.insert('complaints', data);

            if (result.status) {
                fx.sendResponse(res, { message: "Complaint added successfully" });
            } else {
                fx.sendResponse(res, { status: false, message: result.err?.message || result.err?.sqlMessage || 'Failed to add complaint' });
            }
        } catch (err) {
            fx.sendResponse(res, { status: false, message: err.message });
        }
    }

    async tenant_complaint_table(whereObj, userRole, userId, sort_by, order, limit, offset, page, res) {
        try {
            const whereClause = db.getWhere(whereObj);

            // Scope by role:
            // - tenant: only complaints submitted by this tenant
            // - owner: complaints in properties owned by this owner OR tenants under this owner
            const roleClause = userRole === 'owner'
                ? ` AND (t.owner_id = ${Number(userId)} OR pp.owner_id = ${Number(userId)})`
                : ` AND c.tenant_id = ${Number(userId)}`;

            const cleanSortBy = ['id', 'category', 'status', 'created_at', 'updated_at'].includes(sort_by)
                ? `c.${sort_by}`
                : 'c.id';
            const cleanOrder = String(order).toUpperCase() === 'ASC' ? 'ASC' : 'DESC';

            const sql = `
                SELECT 
                    c.*,
                    t.name AS tenant_name,
                    t.phone AS tenant_phone,
                    t.profile_photo AS tenant_profile_photo,
                    r.room_number,
                    pp.name AS pg_name
                FROM complaints c
                LEFT JOIN tenants t ON t.id = c.tenant_id
                LEFT JOIN rooms r ON r.id = c.room_id
                LEFT JOIN pg_properties pp ON pp.id = c.pg_id
                ${whereClause}${roleClause}
                ORDER BY (CASE WHEN c.status = 'pending' THEN 1 WHEN c.status = 'in-progress' THEN 2 ELSE 3 END) ASC, ${cleanSortBy} ${cleanOrder}
                LIMIT ${Number(limit)} OFFSET ${Number(offset)}
            `;

            const countSql = `
                SELECT COUNT(c.id) AS total
                FROM complaints c
                LEFT JOIN tenants t ON t.id = c.tenant_id
                LEFT JOIN rooms r ON r.id = c.room_id
                LEFT JOIN pg_properties pp ON pp.id = c.pg_id
                ${whereClause}${roleClause}
            `;

            const [clients, countResult] = await Promise.all([
                db.query(sql),
                db.querySingle(countSql)
            ]);

            if (!clients.status) {
                return fx.sendResponse(res, { status: false, message: clients.err?.message || 'Error fetching complaints' });
            }

            const total = countResult?.data ? Number(countResult.data.total) : (clients.data?.length || 0);
            const total_pages = Math.ceil(total / Number(limit)) || 1;

            return res.status(200).json({
                status: true,
                data: clients.data || [],
                total_records: total,
                page: Number(page),
                limit: Number(limit),
                total_pages: Number(total_pages),
                query: clients.query
            });
        } catch (err) {
            return fx.sendResponse(res, { status: false, statusCode: 400, message: err.message });
        }
    }

    async update_complaint_data(data, id, res) {
        try {
            data.updated_at = new Date();
            if (!data.image) {
                delete data.image;
            }
            const result = await db.update('complaints', data, { id: id });

            if (result.status) {
                fx.sendResponse(res, { message: 'Complaint updated successfully' });
            } else {
                fx.sendResponse(res, { status: false, message: result.err?.message || result.err?.sqlMessage || 'Failed to update complaint' });
            }
        } catch (err) {
            fx.sendResponse(res, { status: false, message: err.message });
        }
    }

}

export default new Complaint_db;