const mongoose = require('mongoose')
let joi = require('joi');
const serviceSche = new mongoose.Schema({
    title: {
        type: String,
    },
    Icon: {
        type: String,
        
    },
    description: {
        type: String,
        
    },
})

const  serviceModel = mongoose.model('service', serviceSche)

function servicevalidation(serviceObj) {
    let serviceVal = joi.object({
        title: joi.string().required().min(3).max(30),
        Icon: joi.string(),      
        description: joi.string().required().min(3).max(100),
    })
    return serviceVal.validate(serviceObj);
}


module.exports = {
    serviceModel ,
    servicevalidation
};
