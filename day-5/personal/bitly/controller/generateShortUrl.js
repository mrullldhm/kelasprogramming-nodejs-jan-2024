// WRITE PSUEDO CODE
// get the long url from the request body
// generate a short url - google.com -> localhost:3000/randomString
// randomString - 6 characters generated randomly using crypto module
// save the long url and short url in file form JSON or database
// send the shrt url in the response
import crypto from "crypto"

const generateShortUrl = (req, res) => {
    const url = req.body.url
    cont randomString = crypto.randomBytes(3).toString("hex")
}

export default  generateShortUrl