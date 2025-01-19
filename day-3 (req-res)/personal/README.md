# Day 3
    A brief description about HTTP and Request-Response using Node.js

### HTTP
    HTTP is a protocol that allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.

    HTTP Module
    const http = require("http");

### HTTP Request
    A request is a message sent by a client to a server. It contains the request method, the resource being requested, request headers, and the message body.

    Method:             Specifies the action to perform (e.g., GET, POST, PUT, DELETE).
    URL:                The resource location the client wants to interact with.
    Headers:            Metadata such as content type, authorization, etc.
    Body (optional):    Data sent with the request, often in POST or PUT methods.

### HTTP Response
    A response is a message sent by a server to a client in response to a request. It contains the status code, response headers, and the message body.

    Status Code:        Indicates success (e.g., 200), client error (e.g., 404), or server error (e.g., 500).
    Headers:            Metadata such as content type, server information, etc.
    Body (optional):    The data returned, such as an HTML page, JSON data, or an error message.

### Port
    Port is a logical endpoint used by the server to manage network traffic and distinguish between different services or applications running on the same machine. Ports allow servers to handle multiple services simultaneously, even though they all share the same IP address.
    
    LocalHost
    http://localhost:portNumber 
    http://127.0.0.1:portNumber

    Import HTTP Module
    server.listen(2323); 

### Flow of The Sever in Nodejs
    File index.js
        To handle the request and response
    Folder pages
        To handle HTML files
    Folder public
        To handle public/static file (CSS & JavaScript & Image)




