import express from 'express';
import fx from '../shared/fx.js';
import { add_room_validation, update_room_validation, room_table_validation } from '../shared/form_validation.js';
import form_error_message from '../shared/form_error_message.js';
import room_db from '../model/rooms_data.js'
import { getAuthHeader, decodeToken } from '../auth/jwtTokenAuth.js';

class Rooms {
    add_rooms() {
        const router = express.Router()
        router.post('/', add_room_validation, form_error_message, async (req, res) => {
            try {
                room_db.add_room_data(req.body, res)

            } catch (err) {
                fx.sendResponse(res, { status: false, statusCode: 400, message: err })
            }
        })
        return router
    }

    available_rooms() {
        const router = express.Router()
        router.post('/', async (req, res) => {
            try {
                const { pg_id } = req.body;

                if(!pg_id){
                    return fx.sendResponse(res, {status:false , message:"Property name is required"})
                }

                room_db.get_rooms(pg_id, res);

            } catch (ere) {
                return fx.sendResponse(res, {status:false , message:err.messahe})
            }
        })
        return router
    }


    update_rooms() {

        const router = express.Router()

        router.post('/', update_room_validation, form_error_message, async (req, res) => {

            try {

                const { id } = req.body

                delete req.body['id'];

                room_db.updated_room_data(req.body, id, res)

            } catch (err) {
                fx.sendResponse(res, { status: false, statusCode: 400, message: err })
            }

        })

        return router

    }

    room_table() {

        const router = express.Router();

        router.post('/', room_table_validation, form_error_message, async (req, res) => {
            try {

                delete req.body['action']
                // Extract filters, pagination, and sorting from query params
                let { page = 1, limit = 10, sort_by = 'r.id', order = 'DESC', ...filters } = req.body;
                const offset = (page - 1) * limit;

                // Operator map (optional: can also be dynamic based on input)
                const operator = {};

                const token = getAuthHeader(req);
                const client_data = decodeToken(token);

                filters['po.id'] = client_data.id




                for (const key in filters) {
                    let filterKey = key;

                    if (key === 'po.id') {
                        operator['po.id'] = '=';
                    } else if (key == 'pg_name') {
                        operator[`pp.name`] = '=';
                        filters[`pp.name`] = filters[key]; // Move the value under new key
                        delete filters[key]; // Remove old unprefixed key
                    }
                    else {
                        operator[`r.${key}`] = 'LIKE';
                        filters[`r.${key}`] = filters[key]; // Move the value under new key
                        delete filters[key]; // Remove old unprefixed key
                    }
                }


                const whereObj = {
                    ...filters,
                    operator,
                };


                return room_db.rooms_table_data(whereObj, `r.${sort_by}`, order, limit, offset, page, res);

            } catch (err) {
                fx.sendResponse(res, { status: false, statusCode: 400, message: err.message })
            }
        });

        return router;

    }

}

export default new Rooms