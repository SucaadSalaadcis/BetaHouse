const express = require('express')
const {contactFModel,contactFvalidation} = require('../schema/contactFormSchema')
const contactRoute = express.Router()
let joi = require('joi');

contactRoute.get("/", async (req, res) => {
    try {
        const contact = await contactFModel.find()
        res.status(200).send(contact);
        // res.json({contact:contact})
        
    } catch (error) {
        res.status(400).send(error.message);
    }
})

contactRoute.post("/", async (req, res) => {
    try {
        let { error } = contactFvalidation(req.body)
        if (error) return res.send(error.message)

        let contactObj = new contactFModel({
            name: req.body.name,
            phone: req.body.phone,
            message: req.body.message,
        })
        await contactObj.save()
        res.status(200).send({
            status: "sucess",
            message: "successfully inserted",
            info: contactObj
        })
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
    }

})



contactRoute.put("/:id" , async (req,res)=>{
    const {id} = req.params
    const updateContact = await contactFModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({status:"Updated",info:updateContact})
    //  res.json({Status:"Updated",updateContact})
})

contactRoute.delete("/:id" , async (req,res)=>{
    const id = req.params.id
    const deleteContact = await contactFModel.findByIdAndDelete(req.params.id)
    res.status(200).send({status:"deleted",info:deleteContact})
}) 





module.exports = contactRoute;