let mongoose = require('mongoose')

let Todo = mongoose.model('Todo', {
    text:{
        type:String,
        required:true,
        minlength:1,
        true:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

module.exports = {
    Todo
}