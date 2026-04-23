import mysql from 'mysql2/promise';
import { config } from 'dotenv';
config();

class DB {
  constructor() {
    this.pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
      charset: 'utf8mb4',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    console.log('MySQL2 Pool Initialized');
  }

  async query(sql, params = []) {
    try {
      const [rows] = await this.pool.execute(sql, params);
      return { status: true, data: rows  };
    } catch (err) {
      return { status: false, err };
    }
  }

  async querySingle(sql, params = []) {
    const result = await this.query(sql, params);
    if (!result.status) return result;
    return { status: true, data: result.data[0] || null };
  }

  async insert(table, data) {
    const columns = Object.keys(data);
    const placeholders = columns.map(() => '?').join(',');
    const values = Object.values(data);

    const sql = `INSERT INTO ${table} (${columns.join(',')}) VALUES (${placeholders})`;
    return await this.query(sql, values);
  }

  async insertBatch(table, data) {
    if (!data.length) return { status: false, err: 'Empty data array' };

    const columns = Object.keys(data[0]);
    const placeholders = data.map(row => `(${columns.map(() => '?').join(',')})`).join(',');
    const values = data.flatMap(row => columns.map(col => row[col]));

    const sql = `INSERT INTO ${table} (${columns.join(',')}) VALUES ${placeholders}`;
    return await this.query(sql, values);
  }

  async update(table, data, where) {
    const setStr = Object.keys(data).map(col => `${col} = ?`).join(', ');
    const whereStr = this.getWhereClause(where);
    const values = [...Object.values(data), ...Object.values(where)];

    const sql = `UPDATE ${table} SET ${setStr} ${whereStr}`;
    return await this.query(sql, values);
  }

  async select(table, where = {}) {
    const whereStr = this.getWhereClause(where);
    const values = Object.values(where);

    const sql = `SELECT * FROM ${table} ${whereStr}`;
    return await this.query(sql, values);
  }

  async delete(table, where) {
    const whereStr = this.getWhereClause(where);
    const values = Object.values(where);

    const sql = `DELETE FROM ${table} ${whereStr}`;
    return await this.query(sql, values);
  }

  async getSingleRow(table, where) {
    const result = await this.select(table, where);
    if (!result.status) return result;
    return { status: true, data: result.data[0] || null };
  }

  getWhereClause(where) {
    if (!where || Object.keys(where).length === 0) return '';
    const conditions = Object.keys(where).map(key => `${key} = ?`);
    return `WHERE ${conditions.join(' AND ')}`;
  }

  getWhere(obj) {
    let where = " WHERE 1=1";
    const oprtr = obj['operator'] || {};

    Object.entries(obj).forEach(([key, value]) => {
        if (key !== "pageno" && value !== '' && key !== "operator") {
            let clause = "";
            if (oprtr[key] === 'LIKE') {
                clause = ` AND ${key} LIKE '%${value}%'`;
            } else if (oprtr[key] === 'IN') {
                clause = ` AND ${key} IN (${value})`;
            } else if (oprtr[key] === 'IS') {
                clause = ` AND ${key} IS ${value}`;
            } else if (oprtr[key] === 'NOT_FIND_IN_SET') {
                clause = ` AND FIND_IN_SET(${value}, ${key}) = 0`;
            } else if (oprtr[key]) {
                clause = ` AND ${key} ${oprtr[key]} '${value}'`;
            } else {
                clause = ` AND ${key} = '${value}'`;
            }
            where += clause;
        }
    });

    return where;
}
}

export default new DB();
