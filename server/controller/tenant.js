import express from 'express';
import fx from '../shared/fx.js';
import { add_tenant_validation , tenant_table_validation ,update_tenant , login_validation } from '../shared/form_validation.js';
import form_error_message from '../shared/form_error_message.js';
import { getAuthHeader, decodeToken , encodeToken } from '../auth/jwtTokenAuth.js';
import imageUpload from '../middleware/imageUpload.js';
import tenant_model from '../model/tenant_data.js';
import {tenantAdd} from '../middleware/canAddtenant.js'
import bcrypt from 'bcrypt';


class Tenant{

    add_tenant(){
        const router = express.Router();
        router.post('/', add_tenant_validation, form_error_message, tenantAdd, imageUpload, async (req, res) => {
            try{

                const token = getAuthHeader(req);
                const client_data = decodeToken(token);

                delete req.body['id'];
                delete req.body['action'];

                tenant_model.add_tenant_data(req.body, client_data.id, res);

            }catch(err){
                fx.sendResponse(res, { status: false, statusCode: 400, message: err.message })
            }

        })

        return router

    }

    tenant_table(){

        const router = express.Router()

        router.post('/', tenant_table_validation, form_error_message, async (req, res) => {
            try {

                delete req.body['action']
                // Extract filters, pagination, and sorting from query params
                const { page = 1, limit = 10, sort_by = 'id', order = 'DESC', ...filters } = req.body;
                const offset = (page - 1) * limit;

                // Operator map (optional: can also be dynamic based on input)
                const operator = {};

                const token = getAuthHeader(req);
                const client_data = decodeToken(token);

                filters['tt.owner_id']= client_data.id
                
                for (const key in filters) {
                    const value = filters[key];
                    if(key == 'tt.owner_id'){
                        operator['tt.owner_id'] = '='
                    }else if (key == 'name') {
                        operator['tt.name'] = 'LIKE';
                        filters['tt.name'] = value;
                        delete filters[key]; 
                    }
                    else if (key == 'address') {
                        operator['tt.address'] = 'LIKE';
                        filters['tt.address'] = value;
                        delete filters[key]; 
                    }
                    else if (key == 'occupation') {
                        operator['tt.occupation'] = 'LIKE';
                        filters['tt.occupation'] = value;
                        delete filters[key]; 
                    }
                    else if(key == 'pg_id'){
                        operator[`pg.id`] = '=';
                        filters[`pg.id`] = filters[key]; // Move the value under new key
                        delete filters[key]; // Remove old unprefixed key
                    } 
                    else if(key == 'room_number'){
                        operator[`r.room_number`] = '=';
                        filters[`r.room_number`] = filters[key]; // Move the value under new key
                        delete filters[key]; // Remove old unprefixed key
                    } 
                    else {
                        operator[`tt.${key}`] = '=';
                        filters[`tt.${key}`] = filters[key]; // Move the value under new key
                        delete filters[key]; // Remove old unprefixed key
                    }
                }

                const whereObj = {
                    ...filters,
                    operator,
                };


                return tenant_model.tenant_table_data(whereObj, `tt.${sort_by}`, order, limit, offset, page, res );

            } catch (err) {
                fx.sendResponse(res, { status: false, statusCode: 400, message: err.message })
            }
        });

        return router

    }


    tenant_update() {
        const router = express.Router();
        router.post('/', update_tenant, form_error_message, imageUpload, async (req, res) => {
            try {
                const { id } = req.body;
                delete req.body['id'];
                delete req.body['action'];
                tenant_model.update_tenant_data(req.body, id, res);
            } catch (err) {
                fx.sendResponse(res, { status: false, statusCode: 400, message: err.message });
            }
        });
        return router;
    }

    tenant_login() {

        const router = express.Router();

        router.post('/', login_validation, form_error_message, async (req, res) => {

            try {
                const { email, password } = req.body;
                const response = await tenant_model.tenant_login(email);

                if (!response || !response.status || response.data == null) {
                    return fx.sendResponse(res, { status: false, message: 'Email is incorrect' });
                }

                if (response.data.status == 0) {
                    return fx.sendResponse(res, { status: false, message: "Your account is inactive" });
                }

                let match = false;
                if (response.data.password && response.data.password.startsWith('$2b$')) {
                    match = await bcrypt.compare(password, response.data.password);
                } else {
                    match = (password === response.data.password);
                }

                if (!match) {
                    return fx.sendResponse(res, { status: false, message: 'Incorrect password' });
                }

                const tenantUser = { ...response.data, role: 'tenant' };
                delete tenantUser.password;
                return fx.sendResponse(res, { 
                    message: 'Login successfully', 
                    token: encodeToken(tenantUser),
                    role: 'tenant',
                    user: tenantUser
                });

            } catch (err) {
                return fx.sendResponse(res, { status: false, message: err.message || 'Login failed', statusCode: 400 });
            }

        });

        return router;

    }

}

export default new Tenant