// Import modules
import express from "express";
import { getHealth, postHealth } from "./controller/health.js";
import { databaseInit } from "./database/index.js";
import uploadFile from "./controller/uploadFile.js";
import upload from "./middleware/upload.js";
import listAllFiles from "./controller/listAllFiles.js";

// Initialize the Express application and define the port number for the server
const app = express();
const PORT = 8585;

// Middleware setup
app.use(express.json());  // parses incoming JSON data
app.use(express.urlencoded({ extended: true }));  // parses incoming URL-encoded data
app.use("/uploads", express.static("uploads"));   // serves static files from the "uploads" directory

// Database initialization, setting up the database connection
databaseInit();

// Define routes for health check
app.get("/", getHealth);
app.post("/", postHealth);
// Define routes for file upload
app.get("/upload", listAllFiles);
app.post("/upload", upload.single("image"), uploadFile);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
