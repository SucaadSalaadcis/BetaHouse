const mongoose = require('mongoose')
let joi = require('joi');

const houseSche = new mongoose.Schema({
    houseType: {
        type: String,
    },
    houseArea: {
        type: String,
    },
    houseAddress: {
        type: String,
        required: true
    },
    houseAge: {
        type: Number,
    },
    houseRent: {
        type: Number,
    },
    houseDeposit: {
        type: Number,
    },
    houseParking: {
        type: String,
    },
    images: {
        type: String,
    },
    houseStatus: {
        type:String,
        // default:"active",
        // enum:["active","pending","blocked"]
    },
    houseRooms: {
        type: Number,
    },
    houseToilet: {
        type: Number,
    },
    houseMasterRoom: {
        type: Number,
    },
    houseDescription: {
        type: String,
    },
    
});

const houseModel = mongoose.model('house', houseSche)

function housevalidation(houseObj) {
    let houseVal = joi.object({
        houseType: joi.string().required().min(3).max(20),
        houseArea: joi.string().required().min(3).max(20),
        houseAddress: joi.string().required().min(3).max(35),
        houseAge: joi.number().required(),
        houseRent: joi.number().required(),
        houseDeposit: joi.number().required(),
        houseParking: joi.string().required(),
        images: joi.string().required(),
        houseStatus: joi.string().required().min(3).max(20),
        houseRooms: joi.number().required(),
        houseToilet: joi.number().required(),
        houseMasterRoom: joi.number().required(),
        houseDescription: joi.string().required().min(3).max(100),

    })
    return houseVal.validate(houseObj);
}

module.exports = {
    houseModel, // export as obj  {housemodel} else you will see this error 
    housevalidation// (Cannot read properties of undefined (reading 'findOne )
};
