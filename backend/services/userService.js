import pool from "../database/db.js";

export async function findOrCreateUser({ auth0Id, email }) {
  // Try insert
  const insert = await pool.query(
    `
    INSERT INTO users (auth0_id, email)
    VALUES ($1, $2)
    ON CONFLICT (auth0_id) DO NOTHING
    RETURNING *
    `,
    [auth0Id, email],
  );

  if (insert.rows.length) {
    return insert.rows[0];
  }

  // Otherwise fetch existing
  const existing = await pool.query(`SELECT * FROM users WHERE auth0_id = $1`, [auth0Id]);

  console.log("DB created row:", existing.rows[0]);
  return existing.rows[0];
}

export async function updateUserByAuth0Id(auth0Id, fields) {
  const keys = Object.keys(fields);
  if (!keys.length) return null;

  const setClause = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");

  const values = Object.values(fields);

  const result = await pool.query(
    `
    UPDATE users
    SET ${setClause}
    WHERE auth0_id = $${values.length + 1}
    RETURNING *
    `,
    [...values, auth0Id],
  );
  console.log("DB updated row:", result.rows[0]);

  return result.rows[0];
}

export async function getUserByAuth0Id(auth0Id) {
  const result = await pool.query(`SELECT * FROM users WHERE auth0_id = $1`, [auth0Id]);

  if (result.rows.length === 0) {
    return null; // User not found
  }

  return result.rows[0];
}
