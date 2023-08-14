const express = require('express')
const error = require('http-errors')
const {aboutModel,aboutvalidation} = require('../schema/aboutSchema')
const aboutRoute = express.Router()
let joi = require('joi');

aboutRoute.get("/", async (req, res) => {
    try {
        const about = await aboutModel.find({}).sort({'_id': -1}).limit(1);
       // res.json(about);
         res.status(200).send(about);
    
    } catch (error) {
        res.status(400).send(error.message);
    }
})

aboutRoute.post("/", async (req, res) => {
    try {
        let { error } = aboutvalidation(req.body)
        if (error) return res.send(error.message)
        const about = await aboutModel.find({}).sort({'_id': -1}).limit(1);
    // xogtayda hday kawaynthy 0 means xog la haya update grey 
    // else hdi wx xog ah lahynin post greyna
       if(about.length>0){
        // console.log(about[0]._id)
    //    return res.send("about hava data")

        let aboutObj = await aboutModel.findByIdAndUpdate(
            about[0]._id , req.body,{new: true})
        await aboutObj.save()
        return res.status(200).send({
            status: "sucess",
            message: "successfully updated",
            info: aboutObj
        })
    
       }
        // console.log(about)

        let aboutObj = new aboutModel({
            fahFahinYar: req.body.fahFahinYar,
            fahFahin: req.body.fahFahin,
        })
        await aboutObj.save()
        res.status(200).send({
            status: "sucess",
            message: "successfully inserted",
            info: aboutObj
        })
    
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
    }

})


aboutRoute.put("/:id" , async (req,res)=>{
    const {id} = req.params
    const updateAbout = await aboutModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({status:"Updated",info:updateAbout})
})

aboutRoute.delete("/:id" , async (req,res)=>{
    const id = req.params.id
    const deleteAbout = await aboutModel.findByIdAndDelete(req.params.id)
    res.status(200).send({status:"deleted",info:deleteAbout})
})


module.exports = aboutRoute;