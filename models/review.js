const mongoose=require("mongoose")

const reviewSchema=new mongoose.Schema({
    content:{type:String,required:true,maxlength:500},
    rating:{tyep:Number,required:true,min:1,max:5},
    author:{type:String,required:true},
    createdat:{type:Date,default:Date.now()}

})
module.exports=mongoose.model("review",reviewSchema)