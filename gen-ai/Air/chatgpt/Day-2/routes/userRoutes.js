//import express package 
const express=require("express")
const getHomePage = require("../controllers/userController")
// asing function in variable
const userRoutes=express()

//routes handellar

userRoutes.get("/",getHomePage)


userRoutes.get("/login",(req,res)=>{
    res.send("login your account")
})

userRoutes.get("/sing-up",(req,res)=>{
     res.send("sing-up your account")
})


module.exports=userRoutes