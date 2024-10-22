const mongoose = require('mongoose')

const schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('blog_api',schema)