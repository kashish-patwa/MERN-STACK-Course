let costum_http=require("./costum_http")

costum_http.mycreateServer((req,res)=>{
     console.log(req.url)
     console.log(req.method)
     res.setheader("contentent-type","html/text")
     res.write("hi i am kasish")
     res.end()
})