// Modules, ES Modules (ESM)
import crypto from "crypto"
import fs from "fs"
import path from "path"

// Controller
const GenerateShortUrl = (req, res) => {
    // Get the long url from the request body(form data) from 
    const url = req.body.url
    // Generate a short url
    const randomString = crypto.randomBytes(3).toString("hex")
    const shortUrl = `${randomString}`
    console.log(url,shortUrl)
    
    // Read the data from model/links.json as an JS object
    const linksFilePath = path.join(process.cwd(), "model", "links.json")
    const fileStringData = fs.readFileSync(linksFilePath, {encoding: "utf-8"})
    const fileData = JSON.parse(fileStringData)
    // Combine the existing data with the new data
    const newData = {
        url: url,
        shortUrl: shortUrl
        }
    fileData.push(newData)
    // Write data in model/links.json as JSON STRING
    const stringData = JSON.stringify(fileData, null, 2)
    fs.writeFileSync(linksFilePath, stringData)

    res.send(shortUrl)
}

// Export the function in ESM as  local module
export default  GenerateShortUrl