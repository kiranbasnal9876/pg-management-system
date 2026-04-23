import db from '../services/db.conn.js';
import fx from '../shared/fx.js';

class Propert_db {

    async add_property_data(data, res) {

        const result = await db.insert('pg_properties', data)

        if (result.status) {
            fx.sendResponse(res, { message: "Property added successfully" })
        } else {
            if (result.err.errno == 1062) {
                fx.sendResponse(res, { status: false, message: 'Property name should be unique' })
            } else {
                fx.sendResponse(res, { status: false, message: result.err.sqlMessage })
            }
        }

    }

    async update_property_data(data, id, res) {

        const result = await db.update('pg_properties', data, { id: id });

        if (result.status) {
            fx.sendResponse(res, { message: "Property updated successfully" })
        } else {
            if (result.err.errno == 1062) {
                fx.sendResponse(res, { status: false, message: 'Property name should be unique' })
            } else {
                fx.sendResponse(res, { status: false, message: result.err.sqlMessage })
            }
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
                fx.sendResponse(res,{status:true,statusCode:400,message:err.err.sqlMessage})
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
            fx.sendResponse(res,{data:result.data , message:'Property data get successfully'})
        }else{
            fx.sendResponse(res, {status:false , message:result.err.sqlMessage})
        }

    }

}

export default new Propert_db;