 //we import http modul here
 let http=require(`http`)
 //creating server 
 function servertask(){
     console.log("i am performing a task")   
 }

 let server=http.createServer(servertask)
 //listening server  
 server.listen(3000)
