//CORE MODULES
// This a File System Modules
const fs = require("fs");



// Create File
// fs.writeFile(file, data[, options], callback)
// Example 1, Create message.txt in day-2/personal
fs.writeFile('message.txt', 'Hello Node.js', 'utf8', function(err) {
    if (err) {
        console.log("File Not Written")
    } else {
        console.log("File Written in personal file")
    }
}); 
// Example 2, Create message.txt in day-2/personal/fs.file
fs.writeFile('./fs.file/message.txt', 'Hello Node.js', 'utf8', function(err) {
    if (err) {
        console.log("File Not Written")
    } else {
        console.log("File Written in fs.file")
    }
}); 


// Read File
// fs.readFile(path[, options], callback)
// Example 1
fs.readFile("./fs.file/message.txt", "utf8", function(err, data) {
    if (err) {
        console.log("File Not Read");
    } else {
        console.log("THIS IS THE DATA FROM THE FILE")
        console.log(data);
    }
});



// Combining with Crypto Modules

// Create File (FS Modules) + Random Integer (Crypto Modules)
const crypto = require("crypto");
const randomInt = crypto.randomInt(0, 10000)
//Example 1
fs.writeFile(`./fs.file/message-${randomInt}.txt`, `Hello Node.js with random number ${randomInt}`, 'utf8', function(err) {
    if (err) {
        console.log("File Not Written")
    } else {
        console.log("File Written in fs.file")
    }
}); 



// Read File (FS Modules) + Random Integer (Crypto Modules)
// Example 1
fs.readFile(`./fs.file/message-${randomInt}.txt`, "utf8", function(err, data) {
    if (err) {
        console.log("File Not Read");
    } else {
        console.log("THIS IS THE DATA FROM THE FILE")
        console.log(data);
    }
});



//Create Directory (FS Modules) + Random Integer (Crypto Modules)
fs.mkdir(`./fs.file/${randomInt}`, {recursive: true}, (err) => {
    if (err) {
        console.log("Directory Not Created");
    } else {
        console.log("Directory Created");
    }
});

