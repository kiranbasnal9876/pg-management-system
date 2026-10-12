import db from '../services/db.conn.js';
import fx from '../shared/fx.js';

export async function tenantAdd(req, res, next) {
    try {
        const { room_id, pg_id } = req.body;

        if (!room_id || !pg_id) {
            return fx.sendResponse(res, { status: false, message: "Property and Room are required" });
        }

        const checkRoomForthatProperty = await db.select('rooms', { id: room_id, property_id: pg_id });

        if (!checkRoomForthatProperty.status || !checkRoomForthatProperty.data || checkRoomForthatProperty.data.length === 0) {
            return fx.sendResponse(res, { status: false, message: "This room is not present in this PG" });
        }

        const pgResult = await db.getSingleRow('pg_properties', { id: pg_id });

        if (!pgResult.status || !pgResult.data || pgResult.data.status != 1) {
            return fx.sendResponse(res, {
                status: false,
                message: "PG status is inactive or not found"
            });
        }

        // Fetch room type
        const roomRows = await db.getSingleRow('rooms', { id: room_id });
        if (!roomRows.status || !roomRows.data) {
            return fx.sendResponse(res, {
                status: false,
                message: "Room not found"
            });
        }

        // Count current active tenants in the room using proper PostgreSQL parameter
        const tenantCountRows = await db.query(
            `SELECT COUNT(id) AS count FROM tenants WHERE room_id = $1 AND status = 1`,
            [room_id]
        );

        if (!tenantCountRows.status) {
            console.error("tenantCountRows query error:", tenantCountRows.err);
            return fx.sendResponse(res, {
                status: false,
                message: "Failed to verify room occupancy"
            });
        }

        const roomCapacity = parseInt(roomRows.data.type) || 1;
        const tenantCount = parseInt(tenantCountRows.data?.[0]?.count || 0);

        if (tenantCount < roomCapacity) {
            return next(); // Allow tenant addition
        } else {
            return fx.sendResponse(res, {
                status: false,
                message: "This room is full, you cannot add another tenant to this room"
            });
        }

    } catch (error) {
        console.error("tenantAdd error:", error);
        return fx.sendResponse(res, {
            status: false,
            message: "Server error while checking room availability: " + (error.message || error)
        });
    }
}
