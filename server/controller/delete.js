import db from "../services/db.conn.js";
import express from 'express';
import { delete_validation } from '../shared/form_validation.js'
import form_error_message from '../shared/form_error_message.js'
import fx from "../shared/fx.js";

const router = express.Router();

router.post('/', delete_validation, form_error_message, async (req, res) => {

    const { id, ids, action } = req.body;

    let table_name;

    if (action == 'pg_owner') {
        table_name = 'pg_owners';
    } else if (action == 'property') {
        table_name = 'pg_properties';
    } else if (action == 'tenants' || action == 'tenant') {
        table_name = 'tenants';
    } else if (action == 'rooms' || action == 'room') {
        table_name = 'rooms';
    } else if (action == 'complaints' || action == 'complaint') {
        table_name = 'complaints';
    } else {
        return fx.sendResponse(res, { status: false, message: 'Action is invalid' });
    }

    if (Array.isArray(ids) && ids.length > 0) {
        const placeholders = ids.map((_, i) => `$${i + 1}`).join(', ');
        const result = await db.query(`DELETE FROM ${table_name} WHERE id IN (${placeholders}) RETURNING *`, ids);

        if (result.status) {
            return fx.sendResponse(res, { status: true, message: `${result.rowCount || result.data?.length || 0} records deleted successfully` });
        } else {
            return fx.sendResponse(res, { status: false, message: result.err?.message || 'Failed to delete records' });
        }
    }

    const result = await db.delete(table_name, { id: id });

    if (result.status) {
        if (result.rowCount >= 1 || (result.data && result.data.length >= 1)) {
            fx.sendResponse(res, { status: true, message: 'Record deleted successfully' });
        } else {
            fx.sendResponse(res, { status: false, message: 'Record not found' });
        }
    } else {
        fx.sendResponse(res, { status: false, message: result.err?.message || 'Failed to delete record' });
    }
});

export default router;