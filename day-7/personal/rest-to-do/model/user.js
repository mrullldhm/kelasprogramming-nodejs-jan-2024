import { pool } from "../database/connection.js";

// CREATE users table
// id, username, password, email, is_admin

const query = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        is_admin BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT NOW()
    );
    `;

    const createUsersTable = async () => {
        try {
            // promise is pending
            await pool.query(query);
            // promise is fulfilled
            console.log('Users table is created');
        } catch (error) {
            // promise is rejected
            console.error(error);
        }
    }

    export default createUsersTable;