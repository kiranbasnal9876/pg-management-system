import express from 'express';
import authMiddleware from './auth/jwtTokenAuth.js';
import CORS from './middleware/CORS.js'
import pg_owner from './controller/pg_owner.js'
import pg_property from './controller/pg_property.js'
import tenant from './controller/tenant.js'
import pg_room from './controller/pg_room.js'
import delete_ from './controller/delete.js'
import getList from './controller/getList.js'
import trimRequestData from './middleware/trimRequestBody.js';
import complaint from './controller/complaint.js'
const app = express();
const port = 5005;

app.use(CORS)

// Increase payload size limit (e.g., 50mb)
app.use(express.json({ limit: '50mb' }));
app.use(trimRequestData)

app.use('/static', express.static('uploads'))

// Login Apis
app.use('/pg-owner-login' , pg_owner.pg_owner_login())
app.use('/tenant-login' , tenant.tenant_login())
app.use(authMiddleware)

// Pg owner apis 
app.use('/add-pg-owner' , pg_owner.add_pg_owner())
app.use('/update-pg-owner' , pg_owner.update_pg_owner())
app.use('/pg-owner-table' , pg_owner.client_table())
app.use('/client-dashboard-data' , pg_owner.client_dashboard())

// Pg properties apis
app.use('/add-pg-property' , pg_property.add_property() )
app.use('/update-pg-property' , pg_property.update_property() )
app.use('/property-table' , pg_property.property_table())
app.use('/property-data', pg_property.property_data())

// Pg rooms apis
app.use('/add-pg-room' , pg_room.add_rooms())
app.use('/update-pg-room' , pg_room.update_rooms())
app.use('/room-table' , pg_room.room_table())
app.use('/room-list',pg_room.available_rooms())

// Tenant apis
app.use('/add-tenant' , tenant.add_tenant())
app.use('/tenant-table' , tenant.tenant_table())

// Complaint apis
app.use('/add-complaint', complaint.add_complaint())
app.use('/tenant-complaint-table', complaint.tenant_complaint_table())
app.use('/update-complaint', complaint.update_complaint())

// delete api 
app.use('/delete' , delete_)

// getList api
app.use('/get-list' , getList)

// state and district api 
app.use('/state' , pg_owner.state())


app.listen(port , (err)=>{

    if(err){
        return console.log('This is the error ', err)
    }
    console.log(`Server is listening on port ${port}`)

})