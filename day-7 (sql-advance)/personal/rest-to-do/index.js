// Import modules
import express from 'express';
import healthController from './controller/health.js';
import notFound from './controller/not-found.js';
import { databaseInit }  from './database/connection.js';
import createUser from './controller/user.controller/create.js';
import { readAllUsers, readUserById }  from './controller/user.controller/read.js';
import updateUser from './controller/user.controller/update.js';
import deleteUser from './controller/user.controller/delete.js';

const app = express();
const PORT = 8787;

// Middleware
app.use(express.json()); // Allows the server to understand JSON data sent in requests.
app.use(express.urlencoded({ extended: true }));  //Allows the server to understand form data (like data from an HTML form)

// Database connection 
// DDL
databaseInit();

// GET and POST health controller
// DML will be done in controller
app.get('/', healthController.get);
app.post('/', healthController.post);
app.get('/users', readAllUsers)
app.get('/users/:id', readUserById)
app.put('/users/:id', updateUser)
app.delete('/users/:id', deleteUser)

app.post('/register', createUser)


// NOT FOUND controller
app.use(notFound)

// Establish Port
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
});
