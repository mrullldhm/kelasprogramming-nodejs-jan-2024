// HTTP Core Modules
// http.createServer([options][, requestListener])
const http = require("http");
const { console } = require("inspector");

const server = http.createServer(function (req, res) {
    // Request
    const url = req.url;
    console.log(url);
    
    
    // Respond
    // Example 1: Using the response object to send an HTML response
    res.writeHead(200, { "Content-Type": "text/html" }); // Header
    res.write('<div style="background-color:red"><h1>Hello World</h1></div>'); // Body
    res.end(); // End the response. If not, the browser will keep loading.

    // Example 2: Using the response object to send JSON data
    // res.writeHead(200, { "Content-Type": "application/json" }); // Header
    // res.write(JSON.stringify({ name: "John", age: 30 })); // Body
    // res.end(); // End the response.

    // Example 3: Using the response object to make a redirection
    // res.writeHead(301, { Location: "https://www.google.com" }); // Header
    // res.write("Redirecting..."); // Optional response body
    // res.end(); // End the response.
});

server.listen(8887);

// Why need port number?
// We need to connect to the server using an IP address.
// Our own computer has a host or IP address, 127.0.0.1 (localhost).
// Common port numbers: 
//   80 (HTTP), 443 (HTTPS), 22 (SSH), 21 (FTP), 25 (SMTP), 110 (POP3).
// This node server listens on port 8888.
// Use http://localhost:8888 or http://127.0.0.1:8888 to connect to the server.

// HTTP Status Codes
// 1xx - Informational
// 2xx - Success
// 3xx - Redirection
// 4xx - Client Error
// 5xx - Server Error
