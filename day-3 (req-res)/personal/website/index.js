const http = require('http')    // HTTP module
const fs = require('fs')        // File System module
const path = require('path')    // Path module

// Read the HTML file
const indexHtmlPath = path.join(__dirname, 'pages', 'index.html')
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8')
const projectHtmlPath = path.join(__dirname, 'pages', 'project.html')
const projectHtml = fs.readFileSync(projectHtmlPath, 'utf-8')
const notFoundHtmlPath = path.join(__dirname, 'pages', '404.html')
const notFoundHtml = fs.readFileSync(notFoundHtmlPath, 'utf-8')
// Read the CSS file
const cssPath = path.join(__dirname, 'public', 'style.css')
const css = fs.readFileSync(cssPath, 'utf-8')
// Read the JS file
const jsPath = path.join(__dirname, 'public', 'script.js')
const js = fs.readFileSync(jsPath, 'utf-8')

const server = http.createServer((req, res) => {
    const url = req.url.toLowerCase()

    // Handling public/static file like CSS, JS, img
    if (url === "/style.css") {
        res.writeHead(200, { 'Content-Type': 'text/css' })
        res.write(css)
        res.end()
        return
    }

    if (url === "/script.js") {
        res.writeHead(200, { 'Content-Type': 'application/javascript' })
        res.write(js)
        res.end()
        return
    }

    // Handling HTML file
    if (url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(indexHtml)
        res.end()
        return
    }

    if (url === "/project") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(projectHtml)
        res.end()
        return
    }

        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write(notFoundHtml)
        res.end()   
})

server.listen(8899, () => {
    console.log('Website server is running on port 8899')
})