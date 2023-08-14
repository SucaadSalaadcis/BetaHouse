const mongoose = require('mongoose')

const usersche = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default:"user",
        enum:["Admin","CustomerCare"]
       
    },
    userStatus:{
        type:String,
        default:"active",
        enum:["active","pending","blocked"]
    }
})
const userModel = mongoose.model('users', usersche)

module.exports = {
    userModel 
};
