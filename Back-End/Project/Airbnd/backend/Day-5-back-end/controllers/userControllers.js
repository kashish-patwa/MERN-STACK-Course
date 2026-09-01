const sinUpModelClass=require("../model/signUpModel")
const genToken=require("../config/token")
const jwt=require("jsonwebtoken"); 
const { response } = require("express");

//signUp function
async function submitSignUp(req, res) {
     console.log(req.body)
  // step 1:get the signup data from the request body
  const { userName, email, password, confirmPassword } = req.body; //destructuring the data from the request 
  //body
  console.log(userName,email,password,confirmPassword)
  

  // step 2: validate the data 
  // 1) basic validation: check if all fields are filled
  if (!userName || !email || !password || !confirmPassword) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }
  // 2) email validation: check if the email is valid using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if(!emailRegex.test(email)){
          return res.status(400).json({success:false, message:"Invalid email address expected format: user@gmail.com"})
              }

   // 3) password validation: check if the password is at least 8 characters long and contains at least one uppercase letter, one lowercase letter, one number, and one special character
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   if(!passwordRegex.test(password)){
            return res.status(400).json({success:false, message:"Invalid password. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"})

        }

      // 4) confirm password validation: check if the password and confirm password match
      if(password !== confirmPassword){
         return res.status(400).json({success:false, message:"Passwords do not match"})
      }


       //now everything is ok soo we should save the data in data base
           const user = new sinUpModelClass({

            userName:userName,
            email:email,
            password:password,
            confirmPassword:confirmPassword

                })
         try {

            // savind sign up data in mongo db
           const newUser= await user.save()
            console.log(`data save in data base suessfully`,newUser)



            // we have to genrate a cookies before response 
            const token = await genToken(newUser._id)

            res.cookie("cookie",token,{httponly:true, maxAge: 24* 60* 60*  1000, secure:true})//seeting the token in a cookie with maximum age of one day


            // we should always send a response to the client with cookies 
             res.status(200).json({success:true, message:"you have successfully signup please login "})
              
         } catch (error) {

            console.log( error)
             res.status(500).json({success:false, message:"Internal server error"})
         }
      


}

 //login function
 
 async function submitLogin(req,res){
      console.log("login form data",req.body)


    //step1  get the data 
    const {email,password}=req.body ////destructuring the data from the request body


    // step 2: validate the data 
 // 1) basic validation: check if all fields are filled
    if(!email || !password){
        return res.status(400).json({success: false, message:"All filled are required "})
    }

     // 2) email validation: check if the email is valid using regex
    
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){

        return res.status(400).json({success: false, message:"email is not in correct format eg:username@gmail.com"})
    }

    // 3) password validation: check if the password is at least 8 characters long and contains at least one uppercase letter, one lowercase letter, one number, and one special character
    
    const passcode=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passcode.test(password)){
        return res.status(400).json({success:false,message:" password must be  at least 8 characters long and contains at least one uppercase letter, one lowercase letter, one number, and one special character"
    })
    }


    // find the current user document to check wheater he exist or not
    try {

        const foundUser=await sinUpModelClass.findOne({email })
        console.log(foundUser)
        if(!foundUser)
        {
            return res.status(404).json({success:false,message:"user does't exist with this email please sign up first"})
        }

        // now if user exist then we should check user password wheateh  it match or not with data base password 

        const foundPaasowrd=foundUser.password
        if(foundPaasowrd===password)
        {
             // genrate a tokern
             const token=await jwt.sign({_id:foundUser._id},process.env.secret_key,{expiresIn:"7d"})
             if(!token)
             {
                 return res.status(400).json({success:false,message:"token has not been created"})
             }
             res.cookie("token",token,{
                secure:true,
                httponly:true,
                sameSite: "lax", // use "lax" for localhost,
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days,
                
             })
             
            return res.status(200).json({success:true,message:"you have successfully login"})
        }

        return res.status(400).json({success:false,message:"password doesn't match"})

    }catch (error) {
          console.log(error)
          return res.staus(500).json({success:false,message:"oops something went wrong please try later"})
    }

 }


 async function getCurrentUser(req,res)
 {
       console.log(req.cookies)
       const {token}=req.cookies
       if(!token){
          return res.status(400).json({success:false,message:"you don't have toekn"})
       }

          //now we have to decode the token and veriy it 
           const isVerify=jwt.verify(token,process.env.secret_key)//Reads the Header,Reads the Payload.Uses the same Secret Key. Recalculates the signature using mention algo rithm from header and then rturn payload decoded format
           if(!isVerify)
           {
               return res.status(400).json({success:false,message:"user doesn't verifyed"})
           }

           try {
               const user = await sinUpModelClass.findById(isVerify._id).select("-password -confirmPassword");
            return res.status(200).json({success:true,message:user})
            
           } catch (error) {
               console.log(error)
               return res.staus(500).json({success:"false",message:"internal server error"})
           }




 }
module.exports = {
    submitSignUp,
    submitLogin,
    getCurrentUser
}
