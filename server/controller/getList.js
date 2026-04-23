import db from "../services/db.conn.js";
import express from 'express';
import { get_list_validation } from '../shared/form_validation.js'
import form_error_message from '../shared/form_error_message.js'
import fx from "../shared/fx.js";

const router = express.Router();

router.post('/', get_list_validation, form_error_message, async (req, res) => {

    const { id, action } = req.body;

    let table_name;

    if (action == 'pg_owner') {
        table_name = 'pg_owners';
    } else if (action == 'property') {
        table_name = 'pg_properties';
    } else if(action == 'room'){
        table_name = 'rooms'
    } else if(action == 'tenants'){
        table_name = 'tenants'
    }else if(action == 'tenant_complaint'){
        table_name = 'complaints'
    }else {
        fx.sendResponse(res, { status: false, message: 'Action is invalid' })
    }

    const result = await db.getSingleRow(table_name, { id: id })
    // return res.send(result)

    if (result.status) {

        if (result.data != null) {
            fx.sendResponse(res, { message: 'Get list successfully' , data:result.data });
        } else {
            fx.sendResponse(res, { message: 'No data found'  , status:false});
        }

    } else {
        fx.sendResponse(res, { message: result.err.sqlMessage, status: false });
    }

})

export default router;