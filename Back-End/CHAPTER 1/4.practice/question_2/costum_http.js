function mycreateServer(callback){
   console.log("i have created your server ")
   // creatting request object
   let  req={
        url:"/profile",
        method:"get",
        body:"clientdata"
     }
   //creating a response object
   let  res={
      setheader:(content_type,content)=>{
            console.log(`i have set content-type:${content_type} and content is :$-{content}`)
         },
         write:(data)=>{
            console.log(`i have sent your data:${data}`)
         },

         end:()=>{
            console.log("ended the cliend and respoince cycle")
         }
     }
     callback(req,res)
  }



  module.exports={
    mycreateServer:mycreateServer,
  }
