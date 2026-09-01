 const sinUPform=require("../controller/userController")
const express=require("express")

const userRoutes=express.Router()

userRoutes.post("/signUp",sinUPform)



module.exports=userRoutes