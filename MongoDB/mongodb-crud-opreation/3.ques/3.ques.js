//Q3. How do we fetch all documents?
const studentClass=require("./model/students")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const studenDetails = require("./model/students")
dotenv.config()
 
async function mongodb(){

    try {
       const promise = await mongoose.connect(process.env.monngodb_cloud)
                console.log("conected sueccfully with mongodb ")
      // fetch all documents 
     const promise1=await studentClass.find();
     console.log(promise1)

        
    } catch (error) {
        console.log("not coneted to mongodb",error)
    }

}
     mongodb()

