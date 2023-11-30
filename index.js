const express=require("express");
const app=express();
const mongoose=require("mongoose")

app.use(express.json());
const db=require("./connection/db")
db.connectToDb();
const router=require("./routes/movieroutes")
app.use("",router)
app.listen(7000,()=>{
    console.log("server hosted on port 7000")
})