import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "ryan-personal", // <-- replace if different
  host: "localhost",
  database: "finance_tracker",
  port: 5432,
});

export default pool;
