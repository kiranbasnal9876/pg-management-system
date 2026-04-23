import db from '../services/db.conn.js';
import fx from '../shared/fx.js';


class Tenant_model {

    async add_tenant_data(data, owner_id, res) {

        data['owner_id'] = owner_id

        const result = await db.insert('tenants', data)

        // return res.send(result)

        if (result.status) {
            if (result.data.affectedRows == 1) {
                fx.sendResponse(res, { message: "Tenant added succefully" })
            } else {
                fx.sendResponse(res, { message: result })
            }
        }
        else {
            if (result.err.errno == 1452) {
                fx.sendResponse(res, { status: false, message: "room or pg does not exist" })
            } else {
                fx.sendResponse(res, { status: false, message: result.err.sqlMessage })
            }
        }


    }

    async tenant_table_data(whereObj, sort_by, order, limit, offset, page, res) {

        const whereClause = db.getWhere(whereObj);

        const sql = `
        SELECT pg.name AS pg_name,tt.id , tt.name AS tenant_name, tt.phone, tt.email, tt.gender,
        tt.address, tt.state, tt.district, r.room_number, tt.occupation, tt.dob, tt.status,
        tt.parent_contact, tt.emergency_contact, tt.aadhar , tt.profile_photo , tt.pan , tt.rent_status
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