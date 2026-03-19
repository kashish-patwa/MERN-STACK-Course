//create a server undustand a request object 
//importing http modul
let http =require("http")
//creating a server 
let server=http.createServer((req,res)=>{
          console.log(req.url)
          console.log(req.method)
 })
 //listening a server
server.listen(3000)