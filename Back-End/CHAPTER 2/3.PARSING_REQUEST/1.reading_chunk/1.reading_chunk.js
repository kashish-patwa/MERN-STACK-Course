const fs=require("fs")
const http= require("http")
let server = http.createServer((req,res)=>{
//handlling /form(routes or url or end point)
      if(req.url=="/" && req.method=="GET")
      {
        const filePath="./pages/form.html"
        fs.readFile(filePath,(error,data)=>{
           if(error){
             console.log(error)
             res.setHeader("Content-Type","text/html")
             res.write("something went wrong please try again after few minutes")
            res.end()
           }
           else{
            console.log(data)
            res.setHeader("Content-Type","text/html")
            res.write(data)
            res.end()
           }
           
        })

      }
      else if(req.url=="/submit-details"){
        let body=[]
        //data is not comming in one pack it is comming in chunk so jase hi data ka pahla chunk aa jaye is call back ko run kar dena 
        req.on("data",(data)=>{
               console.log(data)
       //jitne bhi chunk hai un sb ko array mai store karenge
               body.push(data)
        })
      }  
})
const port=3000
server.listen(port,()=>{
  console.log(`server is listening at ${port}`)
})

