# Day 5
A brief description of connection between PostgreSQL and Node.js.

### Connection Pool
    A Connection Pool is a technique used to manage and reuse database connections efficiently in applications that interact with databases. Instead of creating a new connection every time the application needs to communicate with the database, a connection pool maintains a cache of active connections that can be reused. This improves performance, reduces overhead, and ensures better resource management.        

    Establishing a connection to PostgreSQL with host, port, username, password, and database name.

### 2-Tier Architecture
    A 2-Tier Architecture is a software architecture pattern where the application logic and the database are separated into two distinct tiers. In this architecture, the application logic is typically implemented on the client-side, while the database is managed on the server-side.

    Client -> Server(Node.js)

## 3-Tier Architecture
    A 3-Tier Architecture is a software architecture pattern where the application logic is divided into three distinct tiers: the presentation tier, the application tier, and the data tier. Each tier has a specific role and interacts with the others through well-defined interfaces.

    Client -> Server (Node.js) -> Database (PostgreSQL)

### Server (Node.js) -> Database (PostgreSQL)
    To make a connection pool between Node.js and PostgreSQL, you can use the node-postgres library. This library provides a simple and efficient way to connect to a PostgreSQL database from Node.js.

    Website
        https://node-postgres.com/

    Installation 
        npm i pg

    Configuration (pg.Pool)
        import pg from 'pg'
        const { Pool } = pg
 
        const pool = new Pool({
            host: 'localhost',
            user: 'database-user',
            max: 20,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 2000,
        })
        
    Separation of concerns
        create connection.js inside database directory
    

