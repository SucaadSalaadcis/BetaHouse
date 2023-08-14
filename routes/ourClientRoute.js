const express = require('express')
const {OurClientModel,ourClientvalidation} = require('../schema/ourClientSchema')
const ourClientRoute = express.Router()
let joi = require('joi');

ourClientRoute.get("/", async (req, res) => {
    try {
        const ourClient = await OurClientModel.find()
        res.status(200).send(ourClient);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
})

ourClientRoute.post("/", async (req, res) => {
    try {
        let { error } = ourClientvalidation(req.body)
        if (error) return res.send(error.message)

        let ourClientObj = new OurClientModel({
            clientName: req.body.clientName,
            clientLogo: req.body.clientLogo,
        })
        await ourClientObj.save()
        res.status(200).send({
            status: "sucess",
            message: "successfully inserted",
            info: ourClientObj
        })
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
    }

})



ourClientRoute.put("/:id" , async (req,res)=>{
    const {id} = req.params
    const updateourClient = await OurClientModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({status:"Updated",info:updateourClient})
})

ourClientRoute.delete("/:id" , async (req,res)=>{
    const id = req.params.id
    const deleteourClient = await OurClientModel.findByIdAndDelete(req.params.id)
    res.status(200).send({status:"deleted",info:deleteourClient})
}) 





module.exports = ourClientRoute;