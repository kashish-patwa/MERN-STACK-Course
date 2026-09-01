//import mongoose package
const mongoose=require("mongoose")

const sinUpModelSchema=mongoose.Schema({
     name:{
        type:String,
         required:true
        },

       email:{

        type:String,
        required:true,
        unique:true
       },

       password:{
        type:String,
        required:true
       },

        confirmpassword:{
            type:String,
            required:true
        }


})

const sinUpModelClass=mongoose.model("sinUpregistation",sinUpModelSchema)


module.exports=sinUpModelClass