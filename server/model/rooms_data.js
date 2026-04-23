import db from '../services/db.conn.js';
import fx from '../shared/fx.js';

class Rooms_db {

    async add_room_data(data, res) {

        const result = await db.insert('rooms', data)

        if (result.status) {
            fx.sendResponse(res, { message: "Room added successfully" })
        } else {
            if (result.err.errno == 1452) {
                fx.sendResponse(res, { status: false, message: "Property don't exists" })
            }
            else if (result.err.errno == 1062) {
                fx.sendResponse(res, { status: false, message: "Room number already exists , Same property doesn't have same room number" })
            }
            else {
                fx.sendResponse(res, { status: false, message: result.err.sqlMessage })
            }
        }


    }


    async updated_room_data(data, id, res) {

        const result = await db.update('rooms', data, { id: id })

        if (result.status) {

            if (result.data.affectedRows == 1) {
                fx.sendResponse(res, { message: "Room updated successfully" })
            } else {
                fx.sendResponse(res, { message: "Room not found", status: false })
            }

        } else {

            if (result.err.errno == 1452) {
                fx.sendResponse(res, { status: false, message: "Property does not exist" })
            } else if (result.err.errno == 1062) {
                fx.sendResponse(res, { status: false, message: "Room number already exists for this property" })
            }
            fx.sendResponse(res, { status: false, message: result.err.sqlMessage })

        }

    }

    async get_rooms(pg_id, res) {
        // return res.send(pg_id)
        try {

            const pgResult = await db.getSingleRow('pg_properties', { id: pg_id });
            if (pgResult.data.length == 0 || pgResult.data == null || pgResult.data.status != 1) {
                fx.sendResponse(res, {
                    status: false,
                    message: "PG status is inactive or not found"
                });
            }
            // Get all rooms for a given property_id that are active (status = 1)
            const allRooms = await db.query(`SELECT id , room_number , type FROM rooms WHERE property_id = ${pg_id} AND status = 1`);

            const availableRooms = [];

            for (const room of allRooms.data) {
                const tenantCountRows = await db.query(
                    `SELECT COUNT(id) AS count FROM tenants WHERE room_id = ${room.id} AND status = 1`
                );
                const roomCapacity = parseInt(room.type); // Assuming `type` represents capacity
                const tenantCount = parseInt(tenantCountRows.data[0].count);

                if (tenantCount < roomCapacity) {
                    availableRooms.push(room);
                }
            }

            return res.send(availableRooms);


        } catch (err) {
            fx.sendResponse(res, { status: false, message: err.message })
        }


    }

    async rooms_table_data(whereObj, sort_by, order, limit, offset, page, res) {

        const whereClause = db.getWhere(whereObj)

        if (sort_by === 'r.pg_name') {
            sort_by = 'pp.name'
        }

        const sql = `SELECT r.* , pp.name as pg_name FROM pg_owners po JOIN pg_properties pp ON pp.owner_id = po.id JOIN rooms r ON r.property_id = pp.id ${whereClause} ORDER BY r.status = 0,  ${sort_by} ${order} LIMIT ${limit} OFFSET ${offset}`;
        const countSql = `SELECT COUNT(*) as total FROM pg_owners po JOIN pg_properties pp ON pp.owner_id = po.id JOIN rooms r ON r.property_id = pp.id ${whereClause}`;

        const [clients, countResult] = await Promise.all([
            db.query(sql),
            db.querySingle(countSql)

        ]).catch(err => {
            fx.sendResponse(res, { status: true, statusCode: 400, message: err.err.sqlMessage })
        });

        // console.log(clients)

        const total_pages = Math.ceil(countResult.data.total / Number(limit));



        return res.status(200).json({
            status: true,
            data: clients.data,
            total_records: countResult.data.total,
            page: Number(page),
            limit: Number(limit),
            total_pages: Number(total_pages),
            // result : clients
        });
    }



}

export default new Rooms_db