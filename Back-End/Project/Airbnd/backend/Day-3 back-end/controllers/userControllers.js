const sinUpModelClass=require("../model/signUpModel")
const genToken=require("../config/token")


async function submitSignUp(req, res) {

  // step 1:get the signup data from the request body
  const { name, email, password, confirmPassword } = req.body; //destructuring the data from the request 
  //body
  console.log(name,email,password,confirmPassword)
  

  // step 2: validate the data 
  // 1) basic validation: check if all fields are filled
  if (!name || !email || !password || !confirmPassword) {
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

            name:name,
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

module.exports = submitSignUp
