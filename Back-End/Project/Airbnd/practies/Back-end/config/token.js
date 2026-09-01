//we genrate the token 
//step 1 import jsonwebtoken
const jsonwebtoken=require("jsonwebtoken")
 async function genToken(userid){
    //we code for genrate the token and import pacake of jsonwebtoken
            try {
                
                const token = await jsonwebtoken.sign((userid),process.env.secrect_key) //here are we genrate the token
                return token
       
       
       
            } catch (error) {
                 throw new  Error(error)   
            }
       
       
    }


module.exports=genToken