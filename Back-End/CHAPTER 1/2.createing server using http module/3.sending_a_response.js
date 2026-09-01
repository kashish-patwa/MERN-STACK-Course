  //sending a  unique respose based on reuqested url(routing rquests)
  
  let http= require("http")
     let server = http.createServer((req,res)=>{
         if(req.url=="/")
         {  console.log(req.url)
            res.setHeader("content-type","text/html")
            res.write("this is your home page")
            res.end()
         }

         else if(req.url=="/contact")
         {  res.setHeader("content-type","text/html")
            res.write("this is your contact page")
            res.end()
         }

         else if(req.url=="/about"){
            res.setHeader("content-type","text/html")
            res.write("this is your about page")
            res.end()
         }

         else{
            res.setHeader("content-type","text/html")
            res.write(" sorry aap ji page ko rewquest bejh rahe hai wo bejh hai wo page exist nhi karta")
            res.end()
         }

     })
   let port=5000
     server.listen(port,()=>{
        console.log(`server is listing at localhost:${port}`)
     })
    