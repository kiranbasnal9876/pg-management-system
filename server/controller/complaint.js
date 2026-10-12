import express from 'express';
import { add_complaint_validation, complaint_tenant_table_validation, update_complaint_validation } from '../shared/form_validation.js';
import form_error_message from '../shared/form_error_message.js';
import fx from '../shared/fx.js';
import { getAuthHeader, decodeToken } from '../auth/jwtTokenAuth.js';
import uploadImage from '../middleware/imageUpload.js';
import complain_db from '../model/complain_data.js';
import db from '../services/db.conn.js';

class Complaint {

    add_complaint() {
        const router = express.Router();

        router.post('/', add_complaint_validation, form_error_message, uploadImage, async (req, res) => {
            try {
                const token = getAuthHeader(req);
                const user_data = decodeToken(token);

                let tenant_id = req.body.tenant_id;
                let room_id = req.body.room_id;
                let pg_id = req.body.pg_id;

                if (user_data.role === 'tenant') {
                    tenant_id = user_data.id;
                    room_id = user_data.room_id;
                    pg_id = user_data.pg_id;

                    // Fetch pg_id or room_id from DB if not in token payload
                    if (!room_id || !pg_id) {
                        const tenantRow = await db.querySingle(`SELECT pg_id, room_id FROM tenants WHERE id = $1`, [tenant_id]);
                        if (tenantRow?.status && tenantRow?.data) {
                            room_id = room_id || tenantRow.data.room_id;
                            pg_id = pg_id || tenantRow.data.pg_id;
                        }
                    }
                }

                req.body.tenant_id = tenant_id;
                req.body.room_id = room_id;
                req.body.pg_id = pg_id;
                req.body.status = req.body.status || 'pending';

                delete req.body['action'];
                if (req.body.id) delete req.body['id'];

                complain_db.add_complaint_data(req.body, res);

            } catch (err) {
                fx.sendResponse(res, { status: false, statusCode: 400, message: err.message });
            }
        });

        return router;
    }

    tenant_complaint_table() {
        const router = express.Router();

        router.post('/', complaint_tenant_table_validation, form_error_message, async (req, res) => {
            try {
                delete req.body['action'];
                const { page = 1, limit = 10, sort_by = 'id', order = 'DESC', ...filters } = req.body;
                const offset = (page - 1) * limit;

                const token = getAuthHeader(req);
                const user_data = decodeToken(token);

                const whereFilters = {};
                const operator = {};

                if (filters.status && filters.status.trim() !== '') {
                    whereFilters['c.status'] = filters.status.trim();
                    operator['c.status'] = '=';
                }

                if (filters.category && filters.category.trim() !== '') {
                    whereFilters['c.category'] = filters.category.trim();
                    operator['c.category'] = '=';
                }

                if (filters.description && filters.description.trim() !== '') {
                    whereFilters['c.description'] = filters.description.trim();
                    operator['c.description'] = 'LIKE';
                }

                const whereObj = {
                    ...whereFilters,
                    operator,
                };

                return complain_db.tenant_complaint_table(
                    whereObj,
                    user_data.role,
                    user_data.id,
                    sort_by,
                    order,
                    limit,
                    offset,
                    page,
                    res
                );

            } catch (err) {
                fx.sendResponse(res, { status: false, statusCode: 400, message: err.message });
            }
        });

        return router;
    }

    update_complaint() {
        const router = express.Router();

        router.post('/', update_complaint_validation, form_error_message, uploadImage, async (req, res) => {
            try {
                const { id } = req.body;
                delete req.body['id'];
                delete req.body['action'];

                complain_db.update_complaint_data(req.body, id, res);
            } catch (err) {
                fx.sendResponse(res, { status: false, statusCode: 400, message: err.message });
            }
        });

        return router;
    }

}

export default new Complaint;