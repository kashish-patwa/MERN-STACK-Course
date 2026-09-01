//import mongoose package
const mongoose=require("mongoose")

const signUpModelschema=mongoose.Schema({
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

    confirmPassword:{
        type:String,
        required:true
    }

})

const sinUpModelClass=mongoose.model("sinUpregistation",signUpModelschema)


module.exports=sinUpModelClass