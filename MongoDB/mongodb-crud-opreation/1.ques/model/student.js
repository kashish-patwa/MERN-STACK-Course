 //creating a schema 
    let mongoose= require("mongoose")

   let studentSchema=mongoose.Schema({
     name:String,
     age:Number,
     

    })


    //creating a model 
    //model return class, class  have under all function we use crud opration 

  let student= mongoose.model("student",studentSchema)


  module.exports={
    student
  }
    