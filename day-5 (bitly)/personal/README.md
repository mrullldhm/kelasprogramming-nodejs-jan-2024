# Day 4
A brief description of Controller, View, SQL

### Controller
    Controllers contain the actual logic or functionality for processing the request, such as fetching data from a database or performing some calculations.

    (req, res) => {

    }

### Routes
    Routes define the URLs (paths) your application can respond to and the HTTP methods (GET, POST, etc.) for those URLs

    Path
    Parameter :

### Middleware
    Middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

    Chaining Route Middleware
        (req, res, next) => {
            next ()
        }
    
    express.json() Middleware
        - This middleware is used to parse JSON data sent in the request body

    express.urlencoded()  Middleware
        -  This middleware is used to parse URL-encoded form data sent in the request body

### View
    Views are responsible for rendering the final HTML that is sent to the client. They typically contain the HTML structure and any dynamic content that needs to be displayed.

    Dynamic HTML
    - HTML String
    - View Engines

### Separatio of Concern
    Separation of Concern (SoC) in coding is like "divide and conquer". It means breaking down a big problem into smaller, manageable parts. Each part focuses on doing one specific thing well. This makes the code easier to understand, maintain, and reuse.

## Folder "bitly"
    WRITE PSUEDO CODE
    - get the long url from the request body
    - generate a short url - google.com -> localhost:3000/randomString
    - randomString - 6 characters generated randomly using crypto module
    - save the long url and short url in file form JSON or database
    - send the short url in the response
    
