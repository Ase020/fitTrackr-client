import "./login.css";
import { login1 } from "../../assets";
import { googleIcon } from "../../assets";

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router for navigation

const Login = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  function handleSubmit(e) {
    e.preventDefault();

    //  login request to the server
    fetch("https://group-6-project.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid credentials"); //  invalid credentials case
        }
        return res.json();
      })
      .then((user) => {
        handleLogin(user);
        navigate("/protected/dashboard"); // Redirect to the dashboard after successful login
      })
      .catch((error) => {
        console.error("Login failed:", error);
      
      });
  }

return (
    <div className="login_container">
      <div className="login-wrapper">
     <div className="image-container"> 
      
         <img src={login1} alt="img" className="login-logo-img"/>
      </div>
      <div className="form_container">

        <h3>Login</h3>
        <form className="Form" onSubmit={handleSubmit} autoComplete="on">
        <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          placeholder="starboy@gmail.com"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="**********************"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        <button type="submit" className="login-btn">
          Log In
        </button>
        </div>
      </form>
      <p className="have-account">
            
            <a className="login" href="/PasswordReset">
              forgot password
            </a>
          </p>
      <div id="or">or</div>
          <div className="google-login">
            <img
              src={googleIcon}
              alt="Google-icon"
              className="google-icon"
            />
           
          </div>
          <p className="have-account">
            Don't have an account ?{" "}
            <a className="login" href="/signup">
              Sign up
            </a>
          </p>
      </div>
      </div>
    
    </div>
    
  )
};

export default Login;


