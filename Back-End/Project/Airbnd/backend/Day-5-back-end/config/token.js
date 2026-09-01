//token genration 
const jsonwebtoken=require("jsonwebtoken")
 async function genToken(userId){
    //yaha code likhna hai token gen karne ke liye uske liye libbry import krni hogi ek jsonwebtoken

    try {
        const token=await jsonwebtoken.sign({userId},process.env.secret_key) //yaha par token genrate ho raha hai
        return token
        
    } catch (error) {
        throw new Error(error)

    }

}


module.exports= genToken