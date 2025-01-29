// Modules, ES Modules (ESM)
import express from "express"
import Home from "./controller/home.js" // controller
import Dashboard from "./controller/dashboard.js" // controller
import GenerateShortUrl from "./controller/generateShortUrl.js" // controller
import Redirect from "./controller/directShortUrl.js" // controller


const app = express()
const PORT = 3000

// Handle static public files
app.use(express.static("public"))

// Handle body data
// Parse the incoming request body into a JavaScript objec
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", Home)
app.post("/shorten", GenerateShortUrl)
app.get("/dashboard", Dashboard)
app.get("/:shortUrl", Redirect) // route with a parameterized segment


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})