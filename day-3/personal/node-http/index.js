// HTTP Core MOdules
// http.createServer([options][, requestListener])
const http = require("http")

const server = http.createServer(function(req, res){
// Respond To The Request

// Example 1, Using response object to send a HTML response
res.writeHead(200, { "Content-Type": "text/html"})          // Header
res.write('<div style="background-color:red"><h1>Hello World</h1></div>')// Body
res.end()                                                   // End the response. If not the browser will keep loading

//Example 2, Using response object to send a JSON data response
res.writeHead(200, { "Content-Type": "application/json"})   // Header
res.write(JSON.stringify({name: "John", age: 30}))          // Body
res.end()                                                   // End the response. If not the browser will keep loading

//Example 3, Using response object to make redirection
res.writeHead(301, {Location: "https://www.google.com"})    // Header
res.end()                                                   // End the response. If not the browser will keep loading

})
server.listen(8888)

// Why need port number?
// First we need to connect to the server using IP address 
// Our own computer has a host or IP address, 127.0.0.1 (localhost)
// Common port numbers: 80 (http), 443 (https), 22 (ssh), 21 (ftp), 25 (smtp), 110 (pop3)
// node server listens on port 8888
// http://localhost:port or http://127.0.0.1:port- this is the url to our own connect to the server


// http status codes
// 1xx - Informational
// 2xx - Success
// 3xx - Redirection
// 4xx - Client Error
// 5xx - Server Error