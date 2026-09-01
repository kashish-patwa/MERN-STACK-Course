//Q9. How do we find students by email?

//import  function 
 const studentClass=require("./model/student")
//import  mongoose library
const mongoose=require("mongoose")
//import dotenv library
const dotenv=require("dotenv")
//call the function 
dotenv.config()

async function mongodb(){

           try {
               const promise= await mongoose.connect(process.env.monngodb_cloud)
                                 console.log("conecting with mongodb suecssfully")

                    const  promise1    = await  studentClass.find({
                                    email:"mehak@273"
                                 })
                            
                                 console.log(promise1)
           } catch (error) {
               console.log("can't be contected with mongodb",error)
           }


                    
}

mongodb()
