const express = require('express')
const {userModel} = require('../schema/userSchema')
const userRoute = express.Router()
let joi = require('joi');
let bcrypt = require('bcrypt')

userRoute.get("/", async (req, res) => {
    try {
        const userList = await userModel.find();
        res.status(200).send(userList);
        // res.json(userList)
        
    } catch (error) {
        res.status(400).send(error.message);
    }
})


userRoute.post("/", async (req, res) => {
    try {
        let { error } = uservalidation(req.body)
        if (error) return res.send(error.message)

    //    return res.send(req.body)
        let userObj = new userModel({
           userStatus: req.body.userStatus,
           password: req.body.password, // plaintext,encriptedtext
           username: req.body.username,
           role: req.body.role,
        })

        const salt = await bcrypt.genSalt(10);
        // console.log("salt",salt)
        userObj.password = await bcrypt.hash(userObj.password,salt)
        // console.log("user.password",userObj.password)
        // return res.send(req.body)

        await userObj.save()
        res.status(200).send({
            status: "sucess",
            message: "successfully inserted",
            info: userObj
        })
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
    }

})


userRoute.put("/:id" , async (req,res)=>{
    const {id} = req.params
    const updateuser = await userModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({status:"Updated",info:updateuser})
    //  res.json({Status:"Updated",updateuser})
})

userRoute.delete("/:id" , async (req,res)=>{
    const id = req.params.id
    const deleteuser = await userModel.findByIdAndDelete(req.params.id)
     res.status(200).send({status:"deleted",info:deleteuser})
}) 


function uservalidation(userObj) {
    let userVal = joi.object({
        username: joi.string().email({tlds:{ allow:false}}),
        password: joi.string().required(),
        role: joi.string().required(),
        userStatus: joi.string()
        
    })
    return userVal.validate(userObj);
}


module.exports = userRoute;