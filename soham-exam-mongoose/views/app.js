const express =require('express')
const app=express()
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const friend=require('./modal/Friends')

mongoose.connect('mongodb://localhost:27017/mongoose-exam')
.then((res)=>{
    console.log("sucsess");
})
.catch((err)=>{
console.log(err);
})
app.set('view engine','ejs')
app.use(bodyparser.urlencoded({extended:true}))

app.listen(200)