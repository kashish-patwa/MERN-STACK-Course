const mongoose=require("mongoose")

  const singleSchema=mongoose.Schema({
    name:String,
    age:Number,
})

 const singleclass=mongoose.model("single",singleSchema)

module.exports=singleclass


