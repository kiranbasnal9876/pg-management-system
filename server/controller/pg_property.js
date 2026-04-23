import express from 'express';
import fx from '../shared/fx.js';
import { add_property_validation, update_property_validation , property_table_validation } from '../shared/form_validation.js';
import { getAuthHeader, decodeToken } from '../auth/jwtTokenAuth.js';
import form_error_message from '../shared/form_error_message.js';
import property_db from '../model/property_data.js'


class Property {

    add_property() {

        const router = express.Router();

        router.post('/', add_property_validation, form_error_message, async (req, res) => {

            try {

                const token = getAuthHeader(req);
                const pg_owner_data = decodeToken(token);

                req.body.owner_id = pg_owner_data.id

                property_db.add_property_data(req.body, res)

            } catch (err) {
                fx.sendResponse(res, { status: false, statusCode: 400, message: err })
            }

        })

        return router;

    }

    update_property() {

        const router = express.Router();

        router.post('/', update_property_validation, form_error_message, async (req, res) => {
            try {

                const { id } = req.body;

                const property_id = id;

                delete req.body['id'];

                property_db.update_property_data(req.body, property_id, res);


            } catch (err) {
                fx.sendResponse(res, { status: false, statusCode: 400, message: err.message })
            }

        })

        return router;

    }


    property_table() {

        const router = express.Router();

        router.post('/', property_table_validation, form_error_message, async (req, res) => {
            try {

                delete req.body['action']
                // Extract filters, pagination, and sorting from query params
                const { page = 1, limit = 10, sort_by = 'id', order = 'DESC', ...filters } = req.body;
                const offset = (page - 1) * limit;

                // Operator map (optional: can also be dynamic based on input)
                const operator = {};

                const token = getAuthHeader(req);
                const client_data = decodeToken(token);

                filters['owner_id']= client_data.id
                
                for (const key in filters) {
                    if(key == 'owner_id'){
                        operator['owner_id'] = '='
                    }else{
                        operator[key] = 'LIKE';
                    }
                }

                const whereObj = {
                    ...filters,
                    operator,
                };


                return property_db.property_table_data(whereObj, sort_by, order, limit, offset, page, res );

            } catch (err) {
                fx.sendResponse(res, { status: false, statusCode: 400, message: err.message })
            }
        });

        return router;

    }

    property_data(){

        const router = express.Router();

        router.post('/',  async (req, res) => {
            try {
                const token = getAuthHeader(req);
                const pg_owner_data = decodeToken(token);

                property_db.property_list(pg_owner_data.id, res)


            } catch (err) {
                fx.sendResponse(res, { status: false, statusCode: 400, message: err })
            }

        })

        return router;

    }

}


export default new Property;