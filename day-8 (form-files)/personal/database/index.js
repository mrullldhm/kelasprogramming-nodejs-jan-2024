import pkg from "pg";
import "dotenv/config"; // import dotenv from "dotenv" to use .env file
import createFilesTable from "../model/file.js";

const { Pool } = pkg;

export const pool = new Pool({
  // Connect to the PostgreSQL database
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  // Configure connection pool settings
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const databaseInit = async () => {
  try {
    const dbName = await pool.query("SELECT current_database()");
    const dbRes = await pool.query("SELECT NOW()");
    const time = dbRes.rows[0].now;
    const name = dbName.rows[0].current_database;
    console.log(`Connected to ${name} at ${time}`);
    // create files table
    await createFilesTable();
  } catch (error) {
    console.error(error);
    console.error("Database connection failed");
  }
}
