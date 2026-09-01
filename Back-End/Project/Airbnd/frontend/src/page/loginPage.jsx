import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

 function LoginPage() {

  const [error,updateError]=useState("")
  const navigate =useNavigate()
   
    async function handleSubmit(e)
     {
           e.preventDefault()
           
          //  we have to collect data login form data
          const formObject=new FormData(e.target)
           const email=formObject.get("email")
           const password=formObject.get("password")
           const formData={
                email,
                password
           }

           console.log(formData)
          //  hame api call karna padega data ko server pe send kr ne ke liye
          try {
            
            const api="http://localhost:4000/login"
            const response=await fetch(api,{
               method:"POST",
               headers:{
                  "Content-Type":"application/json"
               },
               credentials: "include",   // Important
               body:JSON.stringify(formData)
            })
  
           const actualData=await response.json()
            console.log(actualData)
            if(!actualData.success)
            {
                updateError(actualData.message)
            }
            else{
                 navigate("/")  
            }
          } catch (error) {
              console.log(error)
          }


     }




  return (
    <div className="login-container">
      <div className="login-card">
        <p style={{color:"red", textAlign:"center", marginBottom:"10px"}}>{error}</p>
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to your Airbnb account</p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email Address" name="email"  />

          <input type="password" placeholder="Password" name="password" />

          <button type="submit">Login</button>
        </form>

        <p className="forgot-password">
          <span>Forgot Password?</span>
        </p>

        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;