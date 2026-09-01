const mongoose=require("mongoose")

 const studentSchema= mongoose.Schema({
    name:String,
    age: Number,
    email: String,
})

const studentClass=mongoose.model("students",studentSchema)

module.exports=studentClass