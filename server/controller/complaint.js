import express from 'express';
import { add_complaint_validation, complaint_tenant_table_validation, update_complaint_validation } from '../shared/form_validation.js'
import form_error_message from '../shared/form_error_message.js'
import fx from '../shared/fx.js';
import { getAuthHeader, decodeToken } from '../auth/jwtTokenAuth.js'
import uploadImage from '../middleware/imageUpload.js';
import complain_db from '../model/complain_data.js'

class Complaint {

    add_complaint() {

        const router = express.Router()

        router.post('/', add_complaint_validation, form_error_message, uploadImage, async (req, res) => {

            try {

                const token = getAuthHeader(req);
                const tenant_data = decodeToken(token);

                req.body.tenant_id = tenant_data.id
                req.body.room_id = tenant_data.room_id
                req.body.pg_id = tenant_data.pg_id


                complain_db.add_complaint_data(req.body, res)

            } catch (err) {
                fx.sendResponse(res, { status: false, statusCode: 400, message: err.message })
            }

        })

        return router

    }

    tenant_complaint_table() {

        const router = express.Router();

        router.post('/', complaint_tenant_table_validation, form_error_message, async (req, res) => {
            try {

                delete req.body['action']
                // Extract filters, pagination, and sorting from query params
                const { page = 1, limit = 10, sort_by = 'id', order = 'DESC', ...filters } = req.body;
                const offset = (page - 1) * limit;

                // Operator map (optional: can also be dynamic based on input)
                const operator = {};

                const token = getAuthHeader(req);
                const tenant_data = decodeToken(token);

                filters['tenant_id'] = tenant_data.id

                for (const key in filters) {
                    if (key == 'category') {
                        operator[key] = '='
                    } else if (key == 'status') {
                        operator[key] = '='
                    } else if (key == 'tenant_id') {
                        operator[key] = '='
                    } else {
                        operator[key] = 'LIKE';
                    }
                }

                const whereObj = {
                    ...filters,
                    operator,
                };


                return complain_db.tenant_complaint_table(whereObj, sort_by, order, limit, offset, page, res);

            } catch (err) {
                fx.sendResponse(res, { status: false, statusCode: 400, message: err.message })
            }
        });

        return router;

    }

    update_complaint() {

        const router = express.Router()

        router.post('/', update_complaint_validation, form_error_message, uploadImage, async (req, res) => {

            const { id } = req.body
            delete req.body['id']

            complain_db.update_complaint_data(req.body, id, res)

        })

        return router

    }

}

export default new Complaint