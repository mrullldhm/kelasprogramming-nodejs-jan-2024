import fs from "fs"
import path from "path"

const Home = (req, res) => {
    // replace __dirname with process.cwd().
    // __dirname didnt work in ESModule
    const filePath = path.join(process.cwd(), "pages", "index.html") 
    const page = fs.readFileSync(filePath, "utf8")
    res.send(page)
}

// export the function in ESM
export default Home