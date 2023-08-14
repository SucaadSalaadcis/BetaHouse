const express = require('express')
const cors = require('cors')
const db = require('mongoose')

// const {MongoMemoryServer} = require('mongodb-memory-server-core')

const app = express();

//app.use(cors());

app.use(cors({origin:'*'}));

db.set('strictQuery', false);

app.use(express.json());

require('dotenv').config();

const DBConnect = require('./dbCon')
DBConnect();

//routes
const userRoute = require('./routes/userRoute')
const houseRoute = require('./routes/houseRoute')
const loginroute = require('./routes/loginRoute')
const aboutRoute = require('./routes/aboutRoute')
const contactRoute = require('./routes/contactFormRoute')
const companyInforoute = require('./routes/companyInfoRoute')
const homeSettingroute = require('./routes/homeSettingsRoute')
const ourClientRoute = require('./routes/ourClientRoute')
const galleryRoute = require('./routes/galleryRoute')
const serviceRoute = require('./routes/serviceRoute')
//const {AuthenticateRoute }= require('./routes/AuthMiddleware')


app.get('/',(req,res)=>{
  res.json("Hello world!")
})

app.listen(8000,() =>{
  console.log('Your sever started ...')
});


//paths
// app.use("/users",AuthenticateRoute(["Admin"]) ,userRoute)
app.use("/house",houseRoute)
app.use("/login",loginroute)
app.use("/about",aboutRoute)
app.use("/contactForm",contactRoute)
app.use("/companyInfo",companyInforoute)
app.use("/homeSetting",homeSettingroute)
app.use("/ourClient",ourClientRoute)
app.use("/gallery",galleryRoute)
// app.use("/service",AuthenticateRoute(["Admin"]) ,serviceRoute)

module.exports = app;