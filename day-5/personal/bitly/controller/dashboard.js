import fs from "fs"
import path from "path"

const Dashboard = (req, res) => {
    const filePath = path.join(process.cwd(), "pages", "dashboard.html") 
    const page = fs.readFileSync(filePath, "utf8")
    res.send(page)
}

// export the function in ESM
export default Dashboard