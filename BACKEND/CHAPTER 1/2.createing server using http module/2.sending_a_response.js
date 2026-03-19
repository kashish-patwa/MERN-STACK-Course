//create a server and send a request from the client side and give response to client 

//import http modul
let http=require("http")
       
// creating a server

 let server=http.createServer((req,res)=>{
      console.log(req.url)
      console.log(req.method)
   //giving response
      res.setHeader("content-type","text/html")
      res.write("this site kashish")
      //ending response
      res.end()

 })
 //listing a server
const port=4000
 server.listen(port,()=>{
     console.log(`server is listing at port${port}`)
 })

 ////problem here
//whatever the url of request we always sending a same response so it is not good design 
//so we have to make a diffrent diffrent end point for reuqestd url