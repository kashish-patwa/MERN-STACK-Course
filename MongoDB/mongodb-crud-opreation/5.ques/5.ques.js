//Q5. How do we find a document by ID?

const studentClass=require("./model/student")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
  dotenv.config()

  async function mongodb(){
    
    try {
      const promise=  await mongoose.connect(process.env.monngodb_cloud)
        console.log("conect succesfully with mongodb")


        //save one document 
     const  studentObject   = new studentClass({
          name:"mehak",
          age:23,
          email:"mehak@273"
        })
           
           await studentObject.save()
           console.log("succesfully save a document")

      const  student = await studentClass.findById(
                    "6a3b8e2f921a7a7bd841f842"
                  )
            console.log(student)

      
    } catch (error) {
         console.log("not conecting to with mongodb")
    }



  }

  mongodb()