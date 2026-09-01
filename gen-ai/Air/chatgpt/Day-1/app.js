//creating server for handling routs


// import function
const userRoutes=require("./routes/userRoutes")
//import expresss package
const express=require("express")
//import dotenv package for run 
const dotenv=require("dotenv")
//call config()
dotenv.config()
//asing express package in variable 
const app=express()

//use function as a meddlewear

app.use(userRoutes)

//call second function 
app.use((req,res)=>{
    res.send("404 requested page not found")
})

  const port = process.env.port   || 2525
  app.listen(port,()=>{
    console.log(`Server listening at port: ${port}`);
  })


