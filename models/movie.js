const mongoose=require("mongoose")

const reviewSchema=new mongoose.Schema({
    content:{type:String,required:true,maxlength:500},
    rating:{type:Number,required:true,min:1,max:5},
    author:{type:String,required:true},
    createdat:{type:Date,default:Date.now()}

})
const movieSchema=new mongoose.Schema({
    title:{type:String,required:true,maxlength:500},
    description:{type:String,required:true,maxlength:1000},
    genre:{type:String,required:true},
    releaseyear:{type:Number,required:true,min:1800,max:2023},
    reviews:{type:[reviewSchema]}



})
module.exports=mongoose.model("movie",movieSchema)