//UPDATE OPERATIONS
//Q10. How do we update one document?

//import function 
const studentClass=require("./model/student")
//import mongoose package
const mongoose=require("mongoose")
//import dotenv package 
const dotenv=require("dotenv")
//function call 
  dotenv.config()

  async function mongodb(){
        try {
            
            const promise = await mongoose.connect(process.env.monngodb_cloud)
                                 console.log("conecting with mongodb suesccfully ")
                           
                       const promise1 = await  studentClass.updateone(
                                    {
                                      name:"mehak"
                                    },
                                    {
                                        age:23
                                    }
                                )

                                console.log(promise1)

        } catch (error) {
            console.log("can't conect with mongodb")
             

        }


  }

  mongodb()