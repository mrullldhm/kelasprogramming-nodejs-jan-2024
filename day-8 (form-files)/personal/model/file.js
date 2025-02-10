import { pool } from "../database/index.js";

// SQL query to create the "files" table
const query = `CREATE TABLE IF NOT EXISTS files (
    id SERIAL PRIMARY KEY,
    fieldname VARCHAR(255),
    originalname VARCHAR(255),
    encoding VARCHAR(255),
    mimetype VARCHAR(255),
    destination VARCHAR(255),
    filename VARCHAR(255),
    path TEXT,
    size INT
    )`;

// create files table
const createFilesTable = async () => {
  try {
    await pool.query(query);
    console.log("Files table is created");
  } catch (error) {
    console.error(error);
  }
}

export default createFilesTable;
