# Day 7
A brief description of connection between PostgreSQL and Node.js.

### Connection Pool
    A Connection Pool is a technique used to manage and reuse database connections efficiently in applications that interact with databases. Instead of creating a new connection every time the application needs to communicate with the database, a connection pool maintains a cache of active connections that can be reused. This improves performance, reduces overhead, and ensures better resource management.        

    Establishing a connection to PostgreSQL with host, port, username, password, and database name.

### 2-Tier Architecture
    A 2-Tier Architecture is a software architecture pattern where the application logic and the database are separated into two distinct tiers. In this architecture, the application logic is typically implemented on the client-side, while the database is managed on the server-side.

    Client -> Server(Node.js)

### 3-Tier Architecture
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
    
### Environment Variable, process.env
    An environment variable is a dynamic-named value that can affect the way running processes behave on a computer. They are part of the environment in which a process runs and are used to store configuration settings, system paths, and other information that programs or scripts might need to operate correctly.

    Development
    - The development environment is where developers write, test, and debug code. It is typically configured to be as forgiving as possible to facilitate rapid iteration.

    Production
    - The production environment is where the application is deployed and run in a production-like environment. It is configured to be as secure and efficient as possible to ensure the application's stability and performance.

    Testing
    - The testing environment is used for automated testing of the application. It is configured to be as close to the production environment as possible to ensure that the tests are as accurate as possible.

    Configuration
    - Connection pool
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        port: process.env.PGPORT,
        
    - Script (package.json)
        "scripts": {
            "dev": "PGHOST='localhost' PGUSER='postgres' PGPASSWORD='1457' PGDATABASE='to-do-app' PGPORT='5432' node --watch index.js",
            "start": "PGHOST='database.aws.com' PGUSER='adminaws' PGPASSWORD='VSAyw2' PGDATABASE='to-do-app-aws' PGPORT='2132' node --watch index.js"        
        }

### Regex
    Regex is a powerful tool for pattern matching and manipulation of strings. It allows you to define patterns that can be used to search, match, and manipulate text.

    Verify email format (email validation)
    Verify password format (password validation)
    Verify phone number format (phone number validation)
    Verify name format (name validation)
    Verify username format (username validation)

### Validate email provider

### Hashing
    Hashing is the process of converting data into a fixed-length string of characters, typically using a one-way function. The resulting hash value is unique for each input and is used to verify the integrity of the data.

    Website
        https://www.npmjs.com/package/bcrypt

### Authentication (Who are you?)
    Authentication is the process of verifying who a user is. The goal is to confirm a user's identity before granting access.

    Bearer token
        Bearer tokens are a type of token that is used to authenticate a user's request to a server. They are typically used in APIs and are passed in the Authorization header of a request.

### Authorization (What are you allowed to do?)
    Authorization determines what actions or resources a user is allowed to access after authentication.

### Tokens (How do we maintain the session?)
    Tokens are digital keys that help maintain authentication and authorization between requests. They allow users to stay logged in without needing to re-enter credentials.

    NPM
        https://www.npmjs.com/package/jsonwebtoken
    Installation
        npm i jsonwebtoken