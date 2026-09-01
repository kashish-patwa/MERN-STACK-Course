const mongoose=require("mongoose")
 //schema //we are define schema/data type

  const studentSchema=mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    course:String,
 })
//schema ko modling krna hai 
const studentClass=mongoose.model("student",studentSchema)


module.exports=studentClass