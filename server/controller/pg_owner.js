import express from 'express';
import { add_pg_owner_validation, update_pg_owner_validation, login_validation, client_table_validation } from '../shared/form_validation.js'
import form_error_message from '../shared/form_error_message.js'
import bcrypt from 'bcrypt';
import pg_owner_db from '../model/pg_owner_data.js';
import fx from '../shared/fx.js';
import { encodeToken, getAuthHeader, decodeToken } from '../auth/jwtTokenAuth.js'
import uploadImage from '../middleware/imageUpload.js';

class Pg_owner {

    pg_owner_login() {

        const router = express.Router();

        router.post('/', login_validation, form_error_message, async (req, res) => {

            try {

                const { email, password } = req.body;

                pg_owner_db.pg_owner_login(email)
                    .then(async (response) => {
                        if (response.data == null) {
                            fx.sendResponse(res, { status: false, message: 'Email is incorrect' })
                        } else {

                            if (response.data.status == 0) {
                                fx.sendResponse(res, { status: false, message: "Your account is inactive" })
                            }
                            const match = await bcrypt.compare(password, response.data.password);

                            if (!match) {
                                fx.sendResponse(res, { status: false, message: 'Incorrect password' })
                            } else {
                                fx.sendResponse(res, { message: 'Login successfully', token: encodeToken(response.data) })
                            }

                        }

                    })
                    .catch(err => {
                        fx.sendResponse(res, { status: false, message: err.message, statusCode: 400 })
                    })


            } catch (err) {
                fx.sendResponse(res, { status: false, message: err.message, statusCode: 400 })
            }

        })

        return router;

    }

    add_pg_owner() {

        const router = express.Router();

        router.post('/', add_pg_owner_validation, form_error_message, uploadImage, async (req, res) => {

            try {
                let { password } = req.body;

                req.body.password = await bcrypt.hash(password, 10);

                pg_owner_db.add_pg_owner(req.body, res);
            } catch (err) {
                fx.sendResponse(res, { status: false, message: err, statusCode: 400 });
            }

        })

        return router;

    }

    update_pg_owner() {

        const router = express.Router();

        router.post('/', update_pg_owner_validation, form_error_message, uploadImage, async (req, res) => {

            try {
                let { password, id, profile } = req.body;

                if (!password || password.trim() === '') {
                    delete req.body['password'];
                } else {
                    req.body.password = await bcrypt.hash(password, 10);
                }

                if (!profile || profile.trim() === '') {
                    delete req.body['profile'];
                }

                const pg_owner_id = id;
                delete req.body['id'];

                pg_owner_db.update_pg_owner(req.body, pg_owner_id, res);

            } catch (err) {
                fx.sendResponse(res, { status: false, message: err, statusCode: 400 });
            }

        })

        return router;


    }

    client_table() {

        const router = express.Router();

        router.post('/', client_table_validation, form_error_message, async (req, res) => {
            try {

                delete req.body['action']
                // Extract filters, pagination, and sorting from query params
                const { page = 1, limit = 10, sort_by = 'id', order = 'DESC', ...filters } = req.body;
                const offset = (page - 1) * limit;

                // Operator map (optional: can also be dynamic based on input)
                const operator = {};

                for (const key in filters) {
                    if (key == 'email') {
                        operator[key] = '='
                    } else if (key == 'phone') {
                        operator[key] = '='
                    } else if (key == 'status') {
                        operator[key] = '='
                    } else {
                        operator[key] = 'LIKE';
                    }
                }

                // const token = getAuthHeader(req);
                // const pg_ownet_data = decodeToken(token);

                const whereObj = {
                    ...filters,
                    operator,
                };


                return pg_owner_db.client_table(whereObj, sort_by, order, limit, offset, page, res);

            } catch (err) {
                fx.sendResponse(res, { status: false, statusCode: 400, message: err.message })
            }
        });

        return router;

    }

    state() {

        const router = express.Router()
        router.post('/', async (req, res) => {

            pg_owner_db.state_data(res)

        })

        return router

    }

    client_dashboard() {
        const router = express.Router()

        router.post('/', async (req, res) => {
            try {

                const { properties } = req.body

                const token = getAuthHeader(req)
                const clientData = decodeToken(token)

                pg_owner_db.client_dashboard_data(properties, res)

            } catch (err) {
                return fx.sendResponse(res, { status: false, message: err?.message })
            }

        })

        return router
    }

}

export default new Pg_owner;