const express=require("express")
 const app= express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const userRoutes=require("./routes/userRoutes")
   
//Middlewear ragitration
app.use(express.json())
//next call
app.use(userRoutes)
    async function conection_db(){

         try {
            const mongo_db = await mongoose.connect(process.env.mongo_db)
                    console.log("conected with mongodb sucessfully")

                    const port= process.env.port ||5000
                    app.listen(port,()=>{
                      console.log(`server start at this port ${port}`)
                    })
            
         } catch (error) {
            console.log("mongodb conection failed",error)
         }




    }

conection_db()


