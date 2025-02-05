import { pool } from "../database/connection.js";

// CREATE users table
// id, text, status, user_id, created_at

const query = `
    CREATE TABLE IF NOT EXISTS to_dos (
        id SERIAL PRIMARY KEY,
        text VARCHAR(255) NOT NULL,
        status VARCHAR(255) NOT NULL,
        user_id INT REFERENCES users(id),
        created_at TIMESTAMP DEFAULT NOW()
    );
    `;

    const createToDosTable = async () => {
        try {
            // promise is pending
            await pool.query(query);
            // promise is fulfilled
            console.log('To-dos table is created');
        } catch (error) {
            // promise is rejected
            console.error(error);
        }
    }

    export default createToDosTable;