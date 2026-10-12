import db from '../services/db.conn.js';
import fx from '../shared/fx.js';
import bcrypt from 'bcrypt';


class Tenant_model {

    async add_tenant_data(data, owner_id, res) {
        try {
            data['owner_id'] = owner_id;
            delete data['id'];
            delete data['action'];

            if (data.district === '' || data.district === undefined) delete data.district;
            else data.district = parseInt(data.district);

            if (data.state === '' || data.state === undefined) delete data.state;
            else data.state = parseInt(data.state);

            if (data.pincode === '' || data.pincode === undefined) delete data.pincode;
            else data.pincode = parseInt(data.pincode);

            if (data.status !== undefined && data.status !== '') data.status = parseInt(data.status);
            if (data.room_id !== undefined && data.room_id !== '') data.room_id = parseInt(data.room_id);
            if (data.pg_id !== undefined && data.pg_id !== '') data.pg_id = parseInt(data.pg_id);

            if (data.password && data.password.trim() !== '') {
                data.password = await bcrypt.hash(data.password, 10);
            }

            const result = await db.insert('tenants', data);

            if (result.status) {
                fx.sendResponse(res, { status: true, message: "Tenant added successfully", data: result.data?.[0] });
            } else {
                if (result.err?.code === '23503') {
                    fx.sendResponse(res, { status: false, message: "Room or PG does not exist" });
                } else if (result.err?.code === '23505') {
                    fx.sendResponse(res, { status: false, message: "Email or phone already exists" });
                } else {
                    fx.sendResponse(res, { status: false, message: result.err?.message || "Error adding tenant" });
                }
            }
        } catch (err) {
            fx.sendResponse(res, { status: false, message: err.message || "Failed to add tenant" });
        }
    }

    async update_tenant_data(data, id, res) {
        try {
            delete data['id'];
            delete data['action'];

            if (data.district === '' || data.district === undefined) delete data.district;
            else data.district = parseInt(data.district);

            if (data.state === '' || data.state === undefined) delete data.state;
            else data.state = parseInt(data.state);

            if (data.pincode === '' || data.pincode === undefined) delete data.pincode;
            else data.pincode = parseInt(data.pincode);

            if (data.status !== undefined && data.status !== '') data.status = parseInt(data.status);
            if (data.room_id !== undefined && data.room_id !== '') data.room_id = parseInt(data.room_id);
            if (data.pg_id !== undefined && data.pg_id !== '') data.pg_id = parseInt(data.pg_id);

            if (data.password && data.password.trim() !== '') {
                data.password = await bcrypt.hash(data.password, 10);
            } else {
                delete data.password;
            }

            if (!data.profile_photo || typeof data.profile_photo !== 'string' || !data.profile_photo.trim()) {
                delete data.profile_photo;
            }
            if (!data.aadhar || typeof data.aadhar !== 'string' || !data.aadhar.trim()) {
                delete data.aadhar;
            }
            if (!data.pan || typeof data.pan !== 'string' || !data.pan.trim()) {
                delete data.pan;
            }

            const result = await db.update('tenants', data, { id: id });

            if (result.status) {
                fx.sendResponse(res, { status: true, message: "Tenant updated successfully" });
            } else {
                if (result.err && (result.err.code === '23505' || result.err.errno == 1062)) {
                    fx.sendResponse(res, { status: false, message: 'Email or phone already exists' });
                } else {
                    fx.sendResponse(res, { status: false, message: result.err?.message || result.err?.sqlMessage || 'Error updating tenant' });
                }
            }
        } catch (err) {
            fx.sendResponse(res, { status: false, message: err.message || "Failed to update tenant" });
        }
    }

    async tenant_table_data(whereObj, sort_by, order, limit, offset, page, res) {

        const whereClause = db.getWhere(whereObj);

        const sql = `
        SELECT pg.name AS pg_name,tt.id , tt.name AS tenant_name, tt.phone, tt.email, tt.gender,
        tt.address, tt.state, tt.district, r.room_number, tt.occupation, tt.dob, tt.status,
        tt.parent_contact, tt.emergency_contact, tt.aadhar , tt.profile_photo , tt.pan , tt.rent_status, tt.monthly_rent
        FROM tenants tt
        JOIN rooms r ON r.id = tt.room_id
        JOIN pg_properties pg ON tt.pg_id = pg.id
        ${whereClause}
        ORDER BY tt.status = 0, ${sort_by} ${order}
        LIMIT ${limit} OFFSET ${offset}
    `;

        const countSql = `
        SELECT COUNT(tt.id) as total
        FROM tenants tt
        JOIN rooms r ON r.id = tt.room_id
        JOIN pg_properties pg ON tt.pg_id = pg.id
        ${whereClause}
    `;

        try {
            const [clients, countResult] = await Promise.all([
                db.query(sql),
                db.querySingle(countSql)
            ]);

            const total_pages = Math.ceil(countResult.data.total / Number(limit));

            return res.status(200).json({
                status: true,
                data: clients.data,
                total_records: countResult.data.total,
                page: Number(page),
                limit: Number(limit),
                total_pages: Number(total_pages),
            });

        } catch (err) {
            return fx.sendResponse(res, { status: false, statusCode: 400, message: "Database error" });
        }


        // const result = await db.query('Select t.name , t.phone , t.email , t.gender , t.address , t.state , t.district, r.room_number , pg.name , t.occupation , t.dob ,  t.parent_contact ,  t.emergency_contact from tenants t join room r on r.id = t.room_id join properties pg on t.pg_id = pg.id ')

    }

    async tenant_login(email){

        const result = await db.getSingleRow('tenants', { email: email });

        return result;

    }

}

export default new Tenant_model