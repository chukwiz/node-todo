let mongoose = require('mongoose')

let User = mongoose.model('Userr', {
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
})

module.exports = {User}