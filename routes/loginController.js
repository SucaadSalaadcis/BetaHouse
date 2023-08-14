import { userModel } from "../schema/userSchema";
import {loginvalidation} from './loginRoute'
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

 const Login =async (req , res)=>{

    let { error } = loginvalidation(req.body);

    if (error) return res.status(400).send({error});
      
    try {
        const user = await userModel.findOne({username:req.body.username,status:"active"})

        if(!user) return res.status(400).send({error:"Username Not found "})
        
        const passCheck = await bcrypt.compare(req.body.password, user.password)
    
        if(!passCheck) return res.status(404).send({error:"Invalid password"})

         // Generate token  
          const token = jwt.sign({
            username:user.username,
            id:user._id},
            process.env.SECRET_KEY,{expirein:"1h"}
          )

          return res.status(200).send({AccessToken:token,Login:true})

        
    } catch (error) {
        res.status(401).send({error})
    }
   
}

module.exports={Login}