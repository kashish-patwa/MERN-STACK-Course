const express=require("express")
const submitSignUp=require("../controllers/userControllers")


const userRoutes=express.Router()


userRoutes.post("/signup",submitSignUp)


module.exports=userRoutes