const {signUpform ,loginform}=require("../controller.js/userControllers")
const express=require("express")

  const userRoutes=express.Router()
 

userRoutes.post("/signUp",signUpform)

userRoutes.post("/login",loginform)

module.exports=userRoutes
