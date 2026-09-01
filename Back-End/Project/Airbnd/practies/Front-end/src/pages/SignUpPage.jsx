
import "./SignUpPage.css";
function SignUpPage() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Sign Up</h1>

        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <input type="password" placeholder="Confirm Password" />

        <button>Sign Up</button>

        <p>
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;