//core module
const express=require("express")
//local module
const userRoutes=require('./routes/userRoutes')
const hostRoutes=require("./routes/hostRoutes")
const app=express()
//middle ware registration
//middleware1:getting url and method
app.use((req,res,next)=>{
    console.log(req.url,req.method)
    next()
})
//middleware function2:parsing body
app.use(express.urlencoded({ extended: true }));
//middleware function3:~
app.use(userRoutes)
//middleware function4:
app.use(hostRoutes)
const port=4000
app.listen(port,(req,res)=>{
      console.log(`server is listning at ${port}`)
})