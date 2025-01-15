const path = require("path");

// path.join([...paths])
const textPath = path.join(__dirname,`fs.file`, `message.txt`);
console.log(textPath);

// path.extname(path)
const extFile = path.extname(textPath);
console.log(extFile);

// Check txt file
if (extFile === ".txt") {
  console.log("This is a text file");
} else {
  console.log("This is not a text file");
}

// Check jpeg file
if (extFile === ".jpeg") {
    console.log("This is a jpeg file");
  } else {
    console.log("This is not a jpeg file");
  }

// Global Variables
console.log(__dirname);
console.log(__filename);