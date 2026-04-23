import db from '../services/db.conn.js';
import fx from '../shared/fx.js';

export async function tenantAdd(req, res, next) {
    try {
        const { room_id, pg_id } = req.body;

        const checkRoomForthatProperty = await db.select('rooms',{id:room_id , property_id:pg_id})

        if(checkRoomForthatProperty.data.length == 0 || checkRoomForthatProperty.data == null){
            fx.sendResponse(res, {status:false , message:"This room is not present in this pg"})
            return
        }


        const pgResult = await db.getSingleRow('pg_properties',{id:pg_id});

        if (pgResult.data.status != 1) {
            return fx.sendResponse(res, {
                status: false,
                message: "PG status is inactive or not found"
            });
        }

        // Fetch room type
        const roomRows = await db.getSingleRow('rooms',{id:room_id})
        // Count current active tenants in the room
        const tenantCountRows = await db.query(
            `SELECT COUNT(id) AS count FROM tenants WHERE room_id = ${room_id} AND status = 1`,
            [room_id]
        );


        const roomCapacity = parseInt(roomRows.data.type);
        const tenantCount = parseInt( tenantCountRows.data[0].count);
        if (tenantCount < roomCapacity) {
            return next(); // Allow tenant addition
        } else {
            return fx.sendResponse(res, {
                status: false,
                message: "This room is full, you can't add a tenant in this room"
            });
        }

    } catch (error) {
        return fx.sendResponse(res, {
            status: false,
            message: "Server error while checking room availability"
        });
    }
}
