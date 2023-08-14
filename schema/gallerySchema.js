const mongoose = require('mongoose')
let joi = require('joi');
const gallerySche = new mongoose.Schema({
    imageTitle: {
        type: String,
    },
    image: {
        type: String,
        
    },
})

const  galleryModel = mongoose.model('gallery', gallerySche)

function galleryvalidation(galleryObj) {
    let galleryVal = joi.object({
        imageTitle: joi.string().required().min(3).max(20),
        image: joi.string(),      
    })
    return galleryVal.validate(galleryObj);
}


module.exports = {
    galleryModel ,
    galleryvalidation
};
