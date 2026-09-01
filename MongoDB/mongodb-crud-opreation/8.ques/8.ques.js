//Q8. How do we find students by course?

//import class function
const studentClass=require("./model/student")
//import mongoose package
const mongoose=require("mongoose")
//import dotenv package
const dotenv=require("dotenv")
dotenv.config()

async function mongodb(){
    try {

        const promise=  await mongoose.connect(process.env.monngodb_cloud)
                           console.log("you conected with mongodb suesccfully")

             const promise1  =   await studentClass.find({
                            course:"web-dev"
                           })
                console.log(promise1)
        
    } catch (error) {

        console.log("not conected to mongodb")
    }



}
mongodb()