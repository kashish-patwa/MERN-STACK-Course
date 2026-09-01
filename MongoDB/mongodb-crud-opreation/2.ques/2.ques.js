//Q2. How do we insert multiple documents?

const mongoose=require("mongoose")
const dotenv=require("dotenv")
const studentClass=require("./model/student.js")
dotenv.config()

 async function  mongodb_conection(){

       try {   
           const promise   = await mongoose.connect(process.env.monngodb_cloud)
            console.log("cotected succesfully with mongodb cloud")

            //inserting a multipal doucment 
             
      const promise2  =  await studentClass.insertMany([
                {
                    name:"kashish",
                    age:21,
                    email:"kashish@273",
                    course :"mern stack"
                    

                },
                {
                    name:"muskan",
                    age:22,
                    email:"muskan@273",
                    course: "web-dev",

                },
                {
                    name:"mehak",
                    age:23,
                    email:"mehak@273",
                    course:"app_dev",
    
                }
            ])

           console.log("your document succesfully inserted to the mongodb cloud") 
          

     } catch (error) {
        console.log("mongodb contections fail:",error)
     }
 }

mongodb_conection()