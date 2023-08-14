const mongoose = require('mongoose')
let joi = require('joi');
const aboutSche = new mongoose.Schema({
    fahFahinYar:{
        type: String,
        required: true,
    },
    fahFahin:{
    type: String,
    required: true,
    },
},{timestamps:true});

const  aboutModel = mongoose.model('about', aboutSche)

function aboutvalidation(aboutObj) {
    let aboutVal = joi.object({
        fahFahinYar: joi.string(),
        fahFahin: joi.string(),
    })
    return aboutVal.validate(aboutObj);
}


module.exports = {
    aboutModel ,
    aboutvalidation
};
