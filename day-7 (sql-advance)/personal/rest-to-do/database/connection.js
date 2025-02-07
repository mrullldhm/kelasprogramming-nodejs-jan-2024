// Import the pg module
// https://node-postgres.com/
import pg from 'pg'
import createUsersTable from '../model/user.js';
import createToDosTable from '../model/to-do.js';
const { Pool } = pg
 
// Establsih pool connection
// API -- pg.Pool -- new Pool
export const pool = new Pool({
    //Database connection configuration
    host: process.env.PGHOST,           // The database server address (running on local machine)
    user: process.env.PGUSER,           // The database username (default for PostgreSQL is 'postgres')
    password: process.env.PGPASSWORD,   // The password for the database user
    database: process.env.PGDATABASE,   // The name of the database
    port: process.env.PGPORT,           // PostgreSQL default port
    // Connection pool settings
    max: 20,                        // Maximum number of connections in the pool
    idleTimeoutMillis: 30000,       // Time (in ms) a connection can stay idle before closing (30 sec)
    connectionTimeoutMillis: 2000,  // Time (in ms) to wait before timing out while connecting (2 sec)
});

// SQL query
export const databaseInit= async () => {
    // Try catch block
    try {
        // promise is pending
        const dbName = await pool.query("SELECT current_database()");   // SQL query to get the database name
        const name = dbName.rows[0].current_database;
        const dbRespond = await pool.query("SELECT NOW()");   // SQL query to get the current date and time
        const time = dbRespond.rows[0].now;
        // promise is fulfilled 
        console.log(`Database connected to ${name} at ${time}`);

        await createUsersTable();
        await createToDosTable();
    } catch (error) {
        // promise is rejected
        console.error("Database connection failed");
        console.error(error);
    }
}

// What is promise
    // Promise is a variable of future value
    // we need to wait for the promise to be resolved by using async and await
// Waiting Phase
    // state of promise -pending, fulfilled, rejected
    // fulfilled - value is available/database query is succeful
    // rejected - value is not available/database query is failed/error
// try-catch block
    // try - block of code pending and resolved
    // catch - block of code rejected

// pool.query
