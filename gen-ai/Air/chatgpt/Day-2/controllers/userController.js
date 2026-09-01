 
const { error } = require("console")
const path=require("path")//core module

 function getHomePage(req,res){
 const filepath=path.join(__dirname,"../public/prhome.html")

      res.sendFile(filepath,(error)=>{
           if(error){

            console.log('error while reading a home page:',error)
           }
      })
 }


 module.exports=getHomePage