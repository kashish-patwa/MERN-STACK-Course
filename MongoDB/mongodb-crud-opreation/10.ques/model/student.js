//import mongoose library 
const mongoose=require("mongoose")

const studentschema=mongoose.Schema({
    name:String,
     age:Number,
     email:String,
     course:String,
})


const studentClass =mongoose.model("student",studentschema)

module.exports=studentClass