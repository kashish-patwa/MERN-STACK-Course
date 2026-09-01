//Q1. How do we insert one document?
       let {student}= require("./model/student.js")
       let mongoose= require("mongoose")
          let dotenv = require("dotenv")
          dotenv.config()
      async function mongodb(){
         try {
             await mongoose .connect(process.env.monngodb_cloud)
             console.log("mongodb conected sucssfully")

             //here we have to perform crud opration 
          let object =new student({
            name:"dimple",
            age: 27,
           })
          await object.save()
            
          console.log("doucment succesfully insert")
         } catch (error) {
            console.log("error while contecting with mongodb cloud",error)
         }
       }

 mongodb()

