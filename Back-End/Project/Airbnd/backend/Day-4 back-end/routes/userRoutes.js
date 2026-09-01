const express=require("express")
const {submitSignUp ,submitLogin}=require("../controllers/userControllers")



const userRoutes=express.Router()


userRoutes.post("/signup",submitSignUp)

userRoutes.post("/login",submitLogin)


module.exports=userRoutes