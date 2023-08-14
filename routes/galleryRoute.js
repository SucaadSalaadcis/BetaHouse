const express = require('express')
const {galleryModel,galleryvalidation} = require('../schema/gallerySchema')
const galleryRoute = express.Router()
let joi = require('joi');

galleryRoute.get("/", async (req, res) => {
    try {
        const gallery = await galleryModel.find()
        res.status(200).send(gallery);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
})

galleryRoute.post("/", async (req, res) => {
    try {
        let { error } = galleryvalidation(req.body)
        if (error) return res.send(error.message)

        let galleryObj = new galleryModel({
            imageTitle: req.body.imageTitle,
            image: req.body.image,
        })
        await galleryObj.save()
        res.status(200).send({
            status: "sucess",
            message: "successfully inserted",
            info: galleryObj
        })
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
    }

})



galleryRoute.put("/:id" , async (req,res)=>{
    const {id} = req.params
    const updateGallery = await galleryModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({status:"Updated",info:updateGallery})
})

galleryRoute.delete("/:id" , async (req,res)=>{
    const id = req.params.id
    const deleteGallery = await galleryModel.findByIdAndDelete(req.params.id)
    res.status(200).send({status:"deleted",info:deleteGallery})
}) 





module.exports = galleryRoute;