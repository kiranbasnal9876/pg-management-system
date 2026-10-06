import pg from 'pg';
import { config } from 'dotenv';

config();

const { Pool } = pg;

class DB {
  constructor() {
    this.pool = new Pool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT) || 5432,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    });

    console.log('PostgreSQL Pool Initialized');
  }

  // =========================
  // QUERY
  // =========================
  async query(sql, params = []) {
    try {
      const result = await this.pool.query(sql, params);

      return {
        status: true,
        data: result.rows,
        rowCount: result.rowCount,
      };
    } catch (err) {
      console.error('PostgreSQL Query Error:', err);

      return {
        status: false,
        err,
      };
    }
  }

  // =========================
  // QUERY SINGLE
  // =========================
  async querySingle(sql, params = []) {
    const result = await this.query(sql, params);

    if (!result.status) return result;

    return {
      status: true,
      data: result.data[0] || null,
    };
  }

  // =========================
  // INSERT
  // =========================
  async insert(table, data) {
    const columns = Object.keys(data);

    const placeholders = columns
      .map((_, index) => `$${index + 1}`)
      .join(', ');

    const values = Object.values(data);

    const sql = `
      INSERT INTO ${table}
      (${columns.join(', ')})
      VALUES (${placeholders})
      RETURNING *
    `;

    return await this.query(sql, values);
  }

  // =========================
  // INSERT BATCH
  // =========================
  async insertBatch(table, data) {
    if (!data || !data.length) {
      return {
        status: false,
        err: 'Empty data array',
      };
    }

    const columns = Object.keys(data[0]);

    let parameterIndex = 1;

    const placeholders = data.map(row => {
      const rowPlaceholders = columns.map(() => {
        return `$${parameterIndex++}`;
      });

      return `(${rowPlaceholders.join(', ')})`;
    }).join(', ');

    const values = data.flatMap(row =>
      columns.map(col => row[col])
    );

    const sql = `
      INSERT INTO ${table}
      (${columns.join(', ')})
      VALUES ${placeholders}
      RETURNING *
    `;

    return await this.query(sql, values);
  }

  // =========================
  // UPDATE
  // =========================
  async update(table, data, where) {
    const dataColumns = Object.keys(data);
    const whereColumns = Object.keys(where || {});

    let parameterIndex = 1;

    const setStr = dataColumns
      .map(col => `${col} = $${parameterIndex++}`)
      .join(', ');

    const whereStr = whereColumns.length
      ? `WHERE ${whereColumns.map(col => `${col} = $${parameterIndex++}`).join(' AND ')}`
      : '';

    const values = [
      ...Object.values(data),
      ...Object.values(where || {}),
    ];

    const sql = `
      UPDATE ${table}
      SET ${setStr}
      ${whereStr}
      RETURNING *
    `;

    return await this.query(sql, values);
  }

  // =========================
  // SELECT
  // =========================
  async select(table, where = {}) {
    const whereColumns = Object.keys(where);

    let parameterIndex = 1;

    const whereStr = whereColumns.length
      ? `WHERE ${whereColumns
          .map(col => `${col} = $${parameterIndex++}`)
          .join(' AND ')}`
      : '';

    const values = Object.values(where);

    const sql = `
      SELECT *
      FROM ${table}
      ${whereStr}
    `;

    return await this.query(sql, values);
  }

  // =========================
  // DELETE
  // =========================
  async delete(table, where) {
    const whereColumns = Object.keys(where || {});

    if (!whereColumns.length) {
      return {
        status: false,
        err: 'WHERE condition required for delete',
      };
    }

    let parameterIndex = 1;

    const whereStr = whereColumns
      .map(col => `${col} = $${parameterIndex++}`)
      .join(' AND ');

    const values = Object.values(where);

    const sql = `
      DELETE FROM ${table}
      WHERE ${whereStr}
      RETURNING *
    `;

    return await this.query(sql, values);
  }

  // =========================
  // GET SINGLE ROW
  // =========================
  async getSingleRow(table, where) {
    const result = await this.select(table, where);

    if (!result.status) return result;

    return {
      status: true,
      data: result.data[0] || null,
    };
  }

  // =========================
  // WHERE CLAUSE
  // =========================
  getWhereClause(where = {}, startIndex = 1) {
    if (!where || Object.keys(where).length === 0) {
      return {
        clause: '',
        values: [],
      };
    }

    let parameterIndex = startIndex;

    const conditions = Object.keys(where).map(key => {
      return `${key} = $${parameterIndex++}`;
    });

    return {
      clause: `WHERE ${conditions.join(' AND ')}`,
      values: Object.values(where),
    };
  }

  // =========================
  // GET WHERE
  // =========================
  getWhere(obj = {}) {
    let where = ' WHERE 1=1';

    const oprtr = obj.operator || {};

    Object.entries(obj).forEach(([key, value]) => {
      if (
        key !== 'pageno' &&
        key !== 'operator' &&
        value !== ''
      ) {
        let clause = '';

        if (oprtr[key] === 'LIKE') {
          clause = ` AND ${key} ILIKE '%${value}%'`;

        } else if (oprtr[key] === 'IN') {
          clause = ` AND ${key} IN (${value})`;

        } else if (oprtr[key] === 'IS') {
          clause = ` AND ${key} IS ${value}`;

        } else if (oprtr[key] === 'NOT_FIND_IN_SET') {
          // FIND_IN_SET does not exist in PostgreSQL.
          clause = ` AND NOT (${value} = ANY(string_to_array(${key}, ',')::text[]))`;

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