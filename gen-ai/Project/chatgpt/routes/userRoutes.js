//import express package 
const express=require("express")
// call function conver a variablle 
const userRoutes=express()

//hendling routs 
userRoutes.get("/",(req,res)=>{
    
     res.send("welcome to home page")

})


userRoutes.get("/about",(req,res)=>{
         res.send("welcome to  about here is information about work")
})


userRoutes.get("/login",(req,res)=>{
    res.send("login your profile ")

})

userRoutes.get("/sing-up",(req,res)=>{
   res.send("sing-up your account")
})


userRoutes.get("/contact-us",(req,res)=>{
      res.send("need any help contact us thank your for visting my website")
})

module.exports=userRoutes