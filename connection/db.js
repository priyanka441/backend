const express=require("express")
const mongoose=require("mongoose")
const config=require("config")
const url=config.get("DB_STRING")
exports.connectToDb=()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("db connected"))
    .catch(()=>console.log("error"))
}