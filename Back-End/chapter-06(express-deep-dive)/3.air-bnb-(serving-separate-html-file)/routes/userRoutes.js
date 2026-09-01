const express=require("express");
const path = require("path");
const userRoutes=express.Router();
userRoutes.get("/",(req,res)=>{
     res.sendFile(path.join(__dirname,"../","views","home.html"),(err)=>{
            if(err){
                console.error("Error occurred while sending file:", err);
                res.send("Internal Server Error");
            }
            else{
                    console.log("File sent successfully");
            }

     })
})
module.exports=userRoutes
//__dirname gives the absolute path of the directory where the current file is located.
