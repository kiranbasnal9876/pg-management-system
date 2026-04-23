import db from '../services/db.conn.js';
import fx from '../shared/fx.js'

class Complaint_db {

    async add_complaint_data(data, res) {

        const result = await db.insert('complaints', data)

        if (result.status) {
            fx.sendResponse(res, 
                
                { message: "Complaint added successfully" })
        } else {
            fx.sendResponse(res, { status: false, message: result.err.sqlMessage })
        }

    }

    async tenant_complaint_table(whereObj, sort_by, order, limit, offset, page, res) {

        const whereClause = db.getWhere(whereObj)

        const sql = `SELECT * FROM complaints ${whereClause} ORDER BY status = 0,  ${sort_by} ${order} LIMIT ${limit} OFFSET ${offset}`;
        const countSql = `SELECT COUNT(*) as total FROM complaints ${whereClause}`;

        const [clients, countResult] = await Promise.all([
            db.query(sql),
            db.querySingle(countSql)

        ]).catch(err => {
            fx.sendResponse(res, { status: true, statusCode: 400, message: err.err.sqlMessage })
        });

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

    async update_complaint_data(data , id , res){

        try{

            const result = await db.update('complaints' , data , {id:id})
    
            if(result.status){
                fx.sendResponse(res,{message:'Complaint updated successfully'})
            }else{
                fx.sendResponse(res,{status:false , message:result.err.sqlMessage})
            }
            
        }catch(err){
            fx.sendResponse(res,{status:false , message:err.message})
        }

    }

}

export default new Complaint_db