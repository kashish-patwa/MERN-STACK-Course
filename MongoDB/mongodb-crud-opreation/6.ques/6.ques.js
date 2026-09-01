//Q6. How do we find students by name?
    //import the class
    const studentClass=require("./model/student")
//import mongssose package
const mongoose=require("mongoose")
//import dotenv package
const dotenv=require("dotenv")
  dotenv.config()
//send request to mongodb

      async function mongodb(){
         
        try {

            const promise= await mongoose.connect(process.env.monngodb_cloud)
            console.log("conecting with mongodb to succesfully")

           const  promise1 = await studentClass.find({
                   name:"mehak"
             })
             console.log(promise1)
            
        } catch (error) {
              
            console.log("not conected with mongodb cloud",error)
            
        }




      }

      mongodb()