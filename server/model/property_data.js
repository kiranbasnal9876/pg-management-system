import db from '../services/db.conn.js';
import fx from '../shared/fx.js';

class Propert_db {

    async add_property_data(data, res) {
        try {
            const result = await db.insert('pg_properties', data);

            if (result.status) {
                return fx.sendResponse(res, { status: true, message: "Property added successfully" });
            } else {
                let message = result.err?.detail || result.err?.message || "Failed to add property";
                if (result.err?.code === '23505' || result.err?.errno == 1062) {
                    message = 'Property name already exists for this owner';
                } else if (result.err?.code === '23503') {
                    message = 'Owner does not exist';
                }
                return fx.sendResponse(res, { status: false, message, statusCode: 400 });
            }
        } catch (err) {
            return fx.sendResponse(res, { status: false, message: err.message || "Error adding property", statusCode: 500 });
        }
    }

    async update_property_data(data, id, res) {
        try {
            const result = await db.update('pg_properties', data, { id: id });

            if (result.status) {
                return fx.sendResponse(res, { status: true, message: "Property updated successfully" });
            } else {
                let message = result.err?.detail || result.err?.message || "Failed to update property";
                if (result.err?.code === '23505' || result.err?.errno == 1062) {
                    message = 'Property name already exists for this owner';
                }
                return fx.sendResponse(res, { status: false, message, statusCode: 400 });
            }
        } catch (err) {
            return fx.sendResponse(res, { status: false, message: err.message || "Error updating property", statusCode: 500 });
        }
    }

    async property_table_data(whereObj, sort_by, order, limit, offset, page, res ){
    
            const whereClause = db.getWhere(whereObj)
    
            const sql = `SELECT * FROM pg_properties ${whereClause} ORDER BY status = 0,  ${sort_by} ${order} LIMIT ${limit} OFFSET ${offset}`;
            const countSql = `SELECT COUNT(*) as total FROM pg_properties ${whereClause}`;
    
            const [clients, countResult] = await Promise.all([
                db.query(sql),
                db.querySingle(countSql)
    
            ]).catch(err => {
                return fx.sendResponse(res, { status: false, statusCode: 400, message: err?.message || 'Failed to fetch properties' });
            });
    
    
            const total_pages = Math.ceil(countResult.data.total / Number(limit));
    
            return res.status(200).json({
                status: true,
                data: clients.data,
                total_records: countResult.data.total,
                page: Number(page),
                limit: Number(limit),
                total_pages: Number(total_pages),
                // result : clients
            });
    
        }

    async property_list(owner_id, res){

        const result = await db.query(`select id , name from pg_properties where owner_id = ${owner_id} and status = 1 `)

        if(result.status){
            return fx.sendResponse(res,{data:result.data , message:'Property data get successfully'})
        }else{
            return fx.sendResponse(res, {status:false , message: result.err?.message || 'Failed to fetch properties'})
        }

    }

}

export default new Propert_db;