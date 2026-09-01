//creating a server for airbnd project 
//import express package
const express=require("express")
//import mongoose package
const mongoose=require("mongoose")
//import dotenv package 
const dotenv=require("dotenv")
//call the function 
dotenv.config()

//import

const userRoutes=require("./routes/userRoutes")
//assign the variable
const  app =express()

//meddle wear regitration
app.use(express.json())//client side se job bhi data ata hain use parse kar ke req.body main daal deta hain
app.use(userRoutes)

 //use async wrap the function
async function conection_db(){
      
        try {
            //mongodb conection
            const promise= await mongoose.connect(process.env.airbnd_project)
            console.log("conected with mongodb suesscfully")
            //server start
            const port=process.env.port || 3000
            app.listen(port ,()=>{
               
                console.log(`server start at this port ${port}`)
            })
        } catch (error) {
             console.log("can't be conected with mongodb",error)
        }

}
conection_db()
