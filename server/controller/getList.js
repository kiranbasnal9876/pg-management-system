import db from "../services/db.conn.js";
import express from 'express';
import { get_list_validation } from '../shared/form_validation.js';
import form_error_message from '../shared/form_error_message.js';
import fx from "../shared/fx.js";

const router = express.Router();

router.post('/', get_list_validation, form_error_message, async (req, res) => {
    try {
        const { id, action } = req.body;

        let table_name;

        if (action === 'pg_owner' || action === 'owner') {
            table_name = 'pg_owners';
        } else if (action === 'property' || action === 'pg_properties') {
            table_name = 'pg_properties';
        } else if (action === 'room' || action === 'rooms') {
            table_name = 'rooms';
        } else if (action === 'tenants' || action === 'tenant') {
            table_name = 'tenants';
        } else if (action === 'tenant_complaint' || action === 'complaints' || action === 'complaint') {
            table_name = 'complaints';
        } else if (action === 'plan') {
            table_name = 'plan';
        } else {
            return fx.sendResponse(res, { status: false, message: 'Action is invalid', statusCode: 400 });
        }

        const result = await db.getSingleRow(table_name, { id: id });

        if (result.status) {
            if (result.data != null) {
                return fx.sendResponse(res, { status: true, message: 'Get list successfully', data: result.data });
            } else {
                return fx.sendResponse(res, { status: false, message: 'No data found' });
            }
        } else {
            return fx.sendResponse(res, { status: false, message: result.err?.message || 'Database query failed' });
        }
    } catch (err) {
        return fx.sendResponse(res, { status: false, message: err.message || 'Error fetching record', statusCode: 500 });
    }
});

export default router;
