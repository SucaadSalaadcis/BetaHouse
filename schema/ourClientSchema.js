const mongoose = require('mongoose')
let joi = require('joi');
const ourClientSche = new mongoose.Schema({
    clientName: {
        type: String,
    },
    clientLogo: {
        type: String,
        
    },
})

const  OurClientModel = mongoose.model('ourClient', ourClientSche)

function ourClientvalidation(ourClientObj) {
    let ourClientVal = joi.object({
        clientName: joi.string().required().min(3).max(20),
        clientLogo: joi.string(),      
    })
    return ourClientVal.validate(ourClientObj);
}


module.exports = {
    OurClientModel ,
    ourClientvalidation
};
