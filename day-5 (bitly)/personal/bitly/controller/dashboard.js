// Modules, ES Modules (ESM)
import fs from "fs"
import path from "path"

// Controller
const Dashboard = (req, res) => {
    // ESM dont use __dirname, it use process.cwd()
    const filePath = path.join(process.cwd(), "pages", "dashboard.html") 
    const page = fs.readFileSync(filePath, "utf8")
    res.send(page)
}

// Export the function in ESM as  local module
export default Dashboard