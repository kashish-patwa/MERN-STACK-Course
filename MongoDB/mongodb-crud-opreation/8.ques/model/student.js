//import mongoose package 
const mongoose =require("mongoose")


const studentSchema=mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    course:String,
    
})

const studentClass =mongoose.model("student",studentSchema)

module.exports=studentClass