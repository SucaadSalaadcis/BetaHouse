//CONRTOLLER
const crypto = require('crypto')
const sectkey = crypto.randomBytes(32).toString('hex')
console.log("secret key", sectkey)
// wuxu kusiina secret key qaado kadhigo secret key variablekaga ku pastgareyso
// in env file ka 

// in terminal write node constrollers/generatekey.js the folder with the generatefile
