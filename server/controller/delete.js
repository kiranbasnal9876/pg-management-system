import db from "../services/db.conn.js";
import express from 'express';
import { delete_validation } from '../shared/form_validation.js'
import form_error_message from '../shared/form_error_message.js'
import fx from "../shared/fx.js";

const router = express.Router();

router.post('/', delete_validation, form_error_message, async (req, res) => {

    const { id, action } = req.body;

    let table_name;

    if (action == 'pg_owner') {
        table_name = 'pg_owners';
    } else if (action == 'property') {
        table_name = 'pg_properties';
    } else {
        fx.sendResponse(res, { status: false, message: 'Action is invalid' })
    }

    const result = await db.delete(table_name, { id: id })

    if (result.status) {

        if (result.data.affectedRows == 1) {
            fx.sendResponse(res, { message: 'Record deleted successfully' });
        } else {
            fx.sendResponse(res, {status:false, message: 'Record not found' });
        }

    } else {
        fx.sendResponse(res, { message: result.err.sqlMessage, status: false });
    }

})

export default router;