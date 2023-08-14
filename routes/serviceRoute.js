const express = require('express')
const {serviceModel,servicevalidation} = require('../schema/serviceSchema')
const serviceRoute = express.Router()
let joi = require('joi');

serviceRoute.get("/", async (req, res) => {
    try {
        const service = await serviceModel.find()
        res.status(200).send(service);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
})

serviceRoute.post("/", async (req, res) => {
    try {
        let { error } = servicevalidation(req.body)
        if (error) return res.send(error.message)

        let serviceObj = new serviceModel({
            title: req.body.title,
            Icon: req.body.Icon,
            description: req.body.description,
        })
        await serviceObj.save()
        res.status(200).send({
            status: "sucess",
            message: "successfully inserted",
            info: serviceObj
        })
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
    }

})



serviceRoute.put("/:id" , async (req,res)=>{
    const {id} = req.params
    const updateService = await serviceModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({status:"Updated",info:updateService})
})

serviceRoute.delete("/:id" , async (req,res)=>{
    const id = req.params.id
    const deleteService = await serviceModel.findByIdAndDelete(req.params.id)
    res.status(200).send({status:"deleted",info:deleteService})
}) 



module.exports = serviceRoute;