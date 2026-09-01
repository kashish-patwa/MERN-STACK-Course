//Q4. How do we fetch a single document?
const singleclass=require("./model/single")
const mongoose=require("mongoose")
const  dotenv=require("dotenv")
dotenv.config()

     async function mongodb(){

        try {
            const  promise = await   mongoose.connect(process.env.monngodb_cloud)

                console.log("succesfully contecting with mongodb")
                
                  const promise1= await singleclass.findOne({
                    _id:"6a3a3eedee4e0699f9070965"
                  });

                  console.log(promise1)
            
        } catch (error) {
            console.log("not conecting to mongodb",error)
        }




     }

     mongodb()