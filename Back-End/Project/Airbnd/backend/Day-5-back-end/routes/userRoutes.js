const express=require("express")
const {submitSignUp ,submitLogin,getCurrentUser}=require("../controllers/userControllers")



const userRoutes=express.Router()


userRoutes.post("/signup",submitSignUp)

userRoutes.post("/login",submitLogin)

userRoutes.get("/currentUser",getCurrentUser)


module.exports=userRoutes