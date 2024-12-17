//CORE MODULES
// This a Crypto Modules
// const crypto = require ("crypto");
//or
const crypto = require ("node:crypto")
const randomInt = crypto.randomInt(0,1000)
const randomString = crypto.randomBytes(10)

console.log(randomInt)
console.log(randomString.toString("hex"))

const name = "Amirul"
const nameWithId = name + "-" + randomInt
console.log(nameWithId)

//Universally Unique Identifier
const uuid = crypto.randomUUID()
console.log(uuid)

// kindly explore encyption and decryption using crypto module
// const secretText = 'The enemy will attack tonight';
// const secretCode = 'gquagsd8et76ye12heb1uysg238ygbhwd23g';
// encrypt and decrypt the secretText using secretCode
