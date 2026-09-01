    let http= require("http")

   let server= http.createServer(()=>{


   })
   let port=2727
   server.listen(port,()=>{
    console.log(`server listing at port${port}`)
   })