const jwt = require('jsonwebtoken')
const {userModel} = require('../schema/userSchema')
require('dotenv').config()

const AuthenticateRoute= (AllowedRoles)=>{
    return async (req,res,next)=> {
        const TokentHeader = req.header['authorization']
        if(!TokentHeader) return res.status(401).send('Access Token is not provided')
        const token = TokentHeader.split(' ')[1]
        
    try {
        const TokenVerify = jwt.verify(token,process.env.SECRET_KEY)
        const user = await userModel.findById(TokenVerify.id)
        if(!user) return res.status(404).send('User is not active')
        console.log(user.role)
        
        if(!AllowedRoles.includes(user.role)) 
        return res.status(401).send("you are not allowed to access this route")
        next()  


    } catch (error) {
        res.status(401).send(error.message);
    }
    }
}


module.exports={AuthenticateRoute}