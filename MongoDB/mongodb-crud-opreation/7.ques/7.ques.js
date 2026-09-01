//Q7. How do we find students by age?

//import class function
const studentClass=require("./model/student")
//importing  mongoose package
const mongoose=require("mongoose")
//import dotenv package
const  dotenv=require("dotenv")
 
dotenv.config()
   
async function mongodb(){
     
    try {
        
   const promise = await mongoose.connect(process.env.monngodb_cloud)
          console.log("conecting with  mongodb succesfully")

      const promise1=  await studentClass.find({
                age:23
               })
       console.log(promise1)
          
    } catch (error) {

        console.log("can't canected to mongodb")
        
    }
    
    

}

mongodb()