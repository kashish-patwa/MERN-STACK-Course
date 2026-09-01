const http =require("http")
const fs=require("fs")
 let server=   http.createServer((req,res)=>{
      if(req.url==="/")
      {
            res.setHeader("content-type","text/html")
            // reading a html file content
            fs.readFile("./home.html","utf-8",(error,data)=>{
                     if(error)
                     {     
                           console.log(error)
                           res.write("oops!! some thing went wrong please try later") 
                     }

                     else{
                             res.setHeader("Content-Type","text/html")
                             res.write(data)
                             res.end()
                     }
            })


      }

      else if(req.url==="/style")
      {
              
      }
 })
 let port=2323
 server.listen( port,()=>{
    console.log(`server at listing port${port}`)
 })