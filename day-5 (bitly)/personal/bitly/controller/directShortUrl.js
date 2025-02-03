import fs, { link } from "fs"
import path from "path"

const Redirect = (req, res) => {
    // Get short url from request parameter
    const shortUrl = req.params.shortUrl
    // Read data from file
    const dataFilePath= path.join(process.cwd(), "model", "links.json")
    const fileStringData = fs.readFileSync(dataFilePath, {encoding: "utf-8"})
    const fileData = JSON.parse(fileStringData)

    // Find the long url fot the short url using Array.find
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const link = fileData.find((link) => link.shortUrl === shortUrl)
    const longUrl = link.url
    // Redirect to the long url with status code
    res.status(301).redirect(longUrl)
}

// Export the function in ESM as  local module
export default Redirect