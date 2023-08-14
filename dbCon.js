 const db = require('mongoose')
// const {MongoMemoryServer} = require('mongodb-memory-server-core')
require('dotenv').config()

db.set('strictQuery', false);

// connect database

 const DBConnect = async () => {
    try{
     await db.connect("mongodb+srv://sucaad:suu123@cluster0.dbdyn8w.mongodb.net/",{dbName:"betaHouse"})
      console.log('DB connected ...')
    } catch(error){
    console.log(error)
    }
}


module.exports = DBConnect;