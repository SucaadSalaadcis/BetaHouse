const express = require('express')
const {homeSettingModel,homeSettingvalidation} = require('../schema/homeSettingsSchema')
const homeSettingroute = express.Router()
let joi = require('joi');

homeSettingroute.get("/", async function (req, res) {
    try {
        const home = await homeSettingModel.find({}).sort({'_id': -1}).limit(1);
        res.status(200).send(home);
        //   res.json({home:home})
        
    } catch (error) {
        res.status(400).send(error.message);
    }
})

homeSettingroute.post("/", async (req, res) => {
    try {
        let { error } = homeSettingvalidation(req.body)
        if (error) return res.send(error.message)
        const home = await homeSettingModel.find({}).sort({'_id': -1}).limit(1);
        if(home.length>0){
        

            let homeObj = await homeSettingModel.findByIdAndUpdate(
                home[0]._id , req.body,{new: true})
                await homeObj.save()
                return res.status(200).send({
                status: "sucess",
                message: "successfully inserted",
                info: homeObj
            })
        }


        let homeObj = new homeSettingModel({
            title:req.body.title,
            logo:req.body.logo,
            name:req.body.name,
            address:req.body.address,
            email:req.body.email,
            phone:req.body.phone,
            whatsApp:req.body.whatsApp,
            facebook:req.body.facebook,
            instagram:req.body.instagram,
            tiktok:req.body.tiktok,
            heroTitle:req.body.heroTitle,
            heroDescription:req.body.heroDescription,
            heroImage:req.body.heroImage,
            footerText:req.body.footerText,
        })
        await homeObj.save()
        res.status(200).send({
            status: "sucess",
            message: "successfully inserted",
            info: homeObj
        })
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
    }

})

homeSettingroute.put("/:id" , async (req,res)=>{
    const {id} = req.params
    const updateHome = await homeSettingModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({status:"Updated",info:updateHome})
    //  res.json({Status:"Updated",updateHome})
})

homeSettingroute.delete("/:id" , async (req,res)=>{
    const id = req.params.id
    const deleteHome = await homeSettingModel.findByIdAndDelete(req.params.id)
    res.status(200).send({status:"deleted",info:deleteHome})
}) 



module.exports = homeSettingroute;