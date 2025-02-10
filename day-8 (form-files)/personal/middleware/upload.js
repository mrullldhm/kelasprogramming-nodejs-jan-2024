import multer from "multer";
import path from "path";
import crypto from "crypto";

// Set up Multer storage configuration
const storage = multer.diskStorage({
  // Set the destination folder for uploaded files
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  // Set the filename and extension for uploaded files
  filename: function (req, file, cb) {
    const uuid = crypto.randomUUID();
    cb(null, uuid + path.extname(file.originalname));
  },
});

// Create the Multer instance
const upload = multer({ storage: storage });

export default upload;
