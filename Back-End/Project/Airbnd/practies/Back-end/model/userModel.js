const mongoose=require("mongoose")

  const signUpSchema =mongoose.Schema({
    userName:{
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

const signUpSchemaModelClass= mongoose.model("signUp",signUpSchema)

module.exports=signUpSchemaModelClass