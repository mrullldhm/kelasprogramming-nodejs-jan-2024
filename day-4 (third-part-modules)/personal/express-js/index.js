// Import Modules
const express = require("express")
const app =  express()
const fs = require("fs")
const path = require("path")
const PORT = 8989

// Initialise static folder
app.use(express.static("public"))   

// Initialise body parser (for line 47)
// Body-parser is a tool (middleware) that helps your server understand the data sent by a user in an HTTP request.
// parse means to analyze and process a piece of data, such as text or input, to convert it into a structured and usable format.
app.use(express.urlencoded({extended: true})) // Handles data from forms.
app.use(express.json()) //

// GET request 
app.get("/", function (req, res) {
    const homePagePath = path.join(__dirname, "pages", "index.html")
    const homePage = fs.readFileSync(homePagePath, "utf-8")
    res.setHeader("Content-Type", "text/html")
    res.send(homePage)
}) 

app.get("/bmi-form", function (req, res) {
    const bmiFormPath = path.join(__dirname, "pages", "bmi-form.html")
    const bmiForm = fs.readFileSync(bmiFormPath, "utf-8")
    res.setHeader("Content-Type", "text/html")
    res.send(bmiForm)
})

// POST request
app.post("/bmi-result", function (req, res) {
    // Request to view the data from the form
    const data = req.body
    console.log(data)
    // From the requested data, calculate the data and view it
    const weight = data.weight // data.nameOfInputField
    const height = data.height // data.nameOfInputField
    const bmi = (weight / (height * height)).toFixed(2)
    console.log(bmi);

    const bmiResultPath = path.join(__dirname, "pages", "bmi-result.html")
    let bmiResult = fs.readFileSync(bmiResultPath, "utf-8")

    // Replace the [[BMI-RESULT]] placeholder with the calculated BMI value
    if (bmi) {
        bmiResult = bmiResult.replace("[[BMI-RESULT]]", bmi)
    } else {
        bmiResult = bmiResult.replace("[[BMI-RESULT]]", "N/A")
    }

    res.setHeader("Content-Type", "text/html")
    res.send(bmiResult)
})

// Not found page, 404
app.use(function (req, res) {
    const notFoundPath = path.join(__dirname, "pages", "404.html")
    const notFound = fs.readFileSync(notFoundPath, "utf-8")
    res.setHeader("Content-Type", "text/html")
    res.send(notFound)
})

// PORT function
app.listen(PORT, function() {
    console.log(`Server is running on PORT ${PORT}`)
})