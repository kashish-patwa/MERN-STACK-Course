    //we import expresss
    let express= require("express")// it will export function 
    let app=express()//it will return function

//handing a routs/url 
app.get("/",(req,res)=>{
    res.send("i am homepage")
})

app.get("/contact",(req,res)=>{
    res.send("i am contactpage")
})
app.get("/about",(req,res)=>{
      res.send("i am about")
})
    
// creating and listeing server
 let port=5050
    app.listen(port,()=>{
   console.log(`server lesting at localhost:${port}`)
    })
           