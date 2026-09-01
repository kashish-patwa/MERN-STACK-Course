
//import function
const userRoutes=require("./routes/userRoutes")
//import express package 
const express=require("express")
//import dotenv package
const dotenv=require("dotenv")
//call the function 
dotenv.config()

//asing in variable
const app=express()


//use function as a middlewear
app.use(userRoutes)



app.use((req,res)=>{
    res.send("404 requested page not found")
})


const port= process.env.port || 1000
app.listen(port,()=>{
    console.log(`server listen at this port : ${port}`)
})