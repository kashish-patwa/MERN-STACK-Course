const userRoutes=require("./routes/userRoutes")

const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()

//middle wear registration
app.use(express.json())//client ke data ko parch kar ke req.body mein aal deta hai
//next call
app.use(userRoutes)     




     async function mongodb(){

      try {
          const promise = await mongoose.connect(process.env.airbnd_project)
                 console.log("server contected with mongodb suessfully")
        
                 const port=process.env.port ||3000
                 
                 app.listen(port,()=>{
                     console.log(`server start at this port ${port}`)
                 })
      } catch (error) {
            console.log("mongodb conection failed",error)
      }
         
     }

mongodb()




