//import express package 
const express=require("express")
// call function conver a variablle 
const userRoutes=express()

//hendling routs 
userRoutes.get("/",(req,res)=>{
    
     res.send("welcome to home page")

})


userRoutes.get("/login",(req,res)=>{
    res.send("login your profile ")

})

userRoutes.get("/sing-up",(req,res)=>{
   res.send("sing-up your account")
})




module.exports=userRoutes