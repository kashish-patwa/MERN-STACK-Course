//import mongoose package..?
const mongoose=require("mongoose")

  const studentSchema =mongoose.Schema({
    name:String,
    age:Number,
    email:String
})

const studentClass=mongoose.model("studentcollection",studentSchema)


module.exports=studentClass
