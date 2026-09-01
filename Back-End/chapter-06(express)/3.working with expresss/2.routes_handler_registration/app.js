const express=require("express")
const app=express()

// route handling  registration 
app.get("/",(req,res)=>{
     res.send("home page")
})
app.get("/contact",(req,res)=>{
   res.send("i am contact page")
})
app.get("/about",(req,res)=>{
   res.send("i am about page")
})
app.get("/main",(req,res)=>{
   res.send("i am main page")
})

const port=3000
app.listen(port,()=>{
   console.log(`server is listing at ${port}`)
})

