const express = require('express')
const {companyInfoModel,companyInfovalidation} = require('../schema/companyInfoSchema')
const companyInforoute = express.Router()
let joi = require('joi');

companyInforoute.get("/", async function (req, res) {
    try {
        const companyInfo = await companyInfoModel.find()
/*  res.status({companyInfo:companyInfo}) api.map is not function
 make sure that send is not obj ({companyInfo:companyInfo}) is (companyInfo) */
          res.status(200).send(companyInfo);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
})

companyInforoute.post("/", async (req, res) => {
    try {
        let { error } = companyInfovalidation(req.body)
        if (error) return res.send(error.message)

        let companyObj = new companyInfoModel({
            name:req.body.name,
            location:req.body.location,
            logo:req.body.logo,
            email:req.body.email,
            complainEmail:req.body.complainEmail,
            complainPhone:req.body.complainPhone,
            facebook:req.body.facebook,
            tiktok:req.body.tiktok,
            twitter:req.body.twitter,
            instigram:req.body.instigram,
            
        })
        await companyObj.save();
        res.status(200).send({
            status: "sucess",
            message: "successfully inserted",
            info: companyObj
        })
    } catch (error) {
        res.status(400).send(error.message);
    }

})

companyInforoute.put("/:id" , async (req,res)=>{
    const {id} = req.params
    const updatecompany = await companyInfoModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({status:"Updated",info:updatecompany});
    //  res.json({Status:"Updated",updatecompany})
})

companyInforoute.delete("/:id" , async (req,res)=>{
    const id = req.params.id
    const deleteCompany = await companyInfoModel.findByIdAndDelete(req.params.id)
    res.status(200).send({status:"deleted",info:deleteCompany})
}) 



module.exports = companyInforoute;