const mongoose = require('mongoose')
let joi = require('joi');
const contactFSche = new mongoose.Schema({
    name: {
        type: String,
    },
   phone: {
        type: String,
        
    },
    message: {
        type: String,
    }
})

const  contactFModel = mongoose.model('contactForm', contactFSche)

function contactFvalidation(contactFObj) {
    let contactFVal = joi.object({
        name: joi.string().required().min(3).max(20),
        phone: joi.string().required().min(3).max(30),
        message: joi.string().required().min(3).max(100),
      
    })
    return contactFVal.validate(contactFObj);
}


module.exports = {
    contactFModel ,
    contactFvalidation
};
