// HTTP Core MOdules
// http.createServer([options][, requestListener])
const http = require("http")

const server = http.createServer(function(req, res){
// respond to the request
//     // Example 1    
//     // Using response object to send a HTML response
//     // Header
//     res.writeHead(200, { "Content-Type": "text/html"})
//     // Body
//     res.write('<div style="background-color:red"><h1>Hello World</h1></div>')
//     // End the response. If not the browser will keep loading
//     res.end()
// })

    //Example 2
    // Using response object to send a JSON data response
    // Header
    res.writeHead(200, { "Content-Type": "application/json"})
    // Body
    res.write(JSON.stringify({name: "John", age: 30}))
    // End the response. If not the browser will keep loading
    res.end()
})

//     //Example 3
//     // Using response object to make redirection
//     // Header
//     res.writeHead(301, {Location: "https://www.google.com"})
//     // End the response. If not the browser will keep loading
//     res.end()
// })

// Why need port number?
// First we need to connect to the server using IP address 
// Our own computer has a host or IP address, 127.0.0.1 (localhost)
// Common port numbers: 80 (http), 443 (https), 22 (ssh), 21 (ftp), 25 (smtp), 110 (pop3)
// node server listens on port 8888
// http://localhost:port or http://127.0.0.1:port- this is the url to our own connect to the server

server.listen(8888)

// http status codes
// 1xx - Informational
// 2xx - Success
// 3xx - Redirection
// 4xx - Client Error
// 5xx - Server Error