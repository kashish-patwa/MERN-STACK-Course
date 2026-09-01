import { useState } from "react";
import "./signUpPage.css";
import { useNavigate,Link } from "react-router-dom";

function SignUpPage() {

   const [error,setError]=useState("")
   const navigate=useNavigate()
    // we have to collect a form data 
 

   async function handleSubmit(e)
    {
        e.preventDefault()
         
       const formObject=new FormData(e.target)
       const userName=formObject.get("userName")
       const email=formObject.get("email")
       const password=formObject.get("password")
       const confirmPassword=formObject.get("confirmPassword")
       const formData={
             userName,
             email,
             password,
             confirmPassword
       }

       console.log(formData)//

      //  now we have a data so we should make a api request to the our backend
       const api="http://localhost:4000/signup"
       try {
           const response=  await  fetch(api,{
                 method:"POST",
                 headers:{
                   "Content-Type":"application/json",

                 },
                 body:JSON.stringify(formData)
             })
             console.log(response)

           const data=  await response.json()//it internally concatenate the all chunks and concatenate it and pasre it 
           console.log(data)
           if(data.success)
           {
               navigate("/login")
           }
           setError(data.message)
        
       } catch (error) {
           console.log(error)
       }

    }
    


  return (
    <div className="signup-container">
      <div className="signup-card">
        <p style={{color:"red", textAlign:"center", marginBottom:"5px"}}>{error}</p>
        <h2>Create your account</h2>
        <p className="subtitle">Welcome to Airbnb</p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" name="userName" />

          <input type="text" placeholder="Email Address" name="email" />

          <input type="password" placeholder="Password" name="password" />

          <input type="password" placeholder="Confirm Password" name="confirmPassword" />

          <button type="submit">Sign Up</button>
        </form>

        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;