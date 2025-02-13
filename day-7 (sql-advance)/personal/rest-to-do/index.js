// Import modules
import express from 'express';
import healthController from './controller/health.js';
import notFound from './controller/not-found.js';
import { databaseInit }  from './database/connection.js';
import createUser from './controller/user.controller/create.js';
import { readAllUsers, readUserById }  from './controller/user.controller/read.js';
import updateUser from './controller/user.controller/update.js';
import deleteUser from './controller/user.controller/delete.js';
import createToDo from './controller/to-do.controller/create.js';
import listAllToDos from './controller/to-do.controller/read.js';
import createToken from './controller/auth.js';
import isAuth from './middleware/isAuth.js';

const app = express();
const PORT = 8787;

// Middleware
app.use(express.json()); // Allows the server to understand JSON data sent in requests.
app.use(express.urlencoded({ extended: true }));  //Allows the server to understand form data (like data from an HTML form)

// Database connection 
// DDL
databaseInit();

// Health controller
app.get('/', healthController.get);
app.post('/', healthController.post);

// user controller
app.post('/register', createUser)       // Create
app.post('/login', createToken)
app.get('/users', readAllUsers)         // Read
app.get('/users/:id', readUserById)     // Read
app.put('/users/:id', updateUser)       // Update
app.delete('/users/:id', deleteUser)    // Delete

// to-do controller
app.post('/todos', isAuth, createToDo)  // Create
app.get('/todos', isAuth, listAllToDos) // Read

// NOT FOUND controller
app.use(notFound)

// Establish Port
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
});
