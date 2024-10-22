const mongoose = require('mongoose')

const schema= new mongoose.Schema({
    titel:{
        type:String,
        required:true
    },
    catid:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Blog',schema)