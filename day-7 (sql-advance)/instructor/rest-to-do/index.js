import express from "express";
import healthController from "./controller/health.js";
import notFound from "./controller/not-found.js";
import { databaseInit } from "./database/connection.js";
import createUser from "./controller/user.controller/create.js";
import {
  readAllUsers,
  readUserById,
} from "./controller/user.controller/read.js";
import updateUser from "./controller/user.controller/update.js";
import deleteUser from "./controller/user.controller/delete.js";
import createTodo from "./controller/todo.controller/create.js";
import listAllTodos from "./controller/todo.controller/read.js";
import createToken from "./controller/auth.js";
import isAuth from "./middleware/isAuth.js";

const app = express();
const PORT = 8787;

// middleware
// parse application/json and application/x-www-form-urlencoded to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection and execute DDL queries to create tables
databaseInit();

// GET and POST health routes
// all DML operations will be done in controller
app.get("/", healthController.get);
app.post("/", healthController.post);
app.get("/users", readAllUsers);
app.get("/users/:id", readUserById);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

app.post("/register", createUser);
app.post("/login", createToken);

// route to handle todos and authenticated routes
app.get("/todos", isAuth, listAllTodos);
app.post("/todos", isAuth, createTodo);

// not found (404) route
app.use(notFound);

app.listen(PORT, function () {
  console.log(`Server is running on: ${PORT}`);
});
