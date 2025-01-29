// Modules, ES Modules (ESM)
import fs from "fs"
import path from "path"

// Controller
const Home = (req, res) => {
    // ESM dont use __dirname, it use process.cwd()
    const filePath = path.join(process.cwd(), "pages", "index.html") 
    const page = fs.readFileSync(filePath, "utf8")
    res.send(page)
}

// Export the function in ESM as  local module
export default Home