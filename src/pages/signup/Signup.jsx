import React, { useState } from "react";
import "./signup.css";
import { signUp } from "../../assets";
import { googleIcon } from "../../assets";
import { useNavigate } from "react-router-dom"; 

const Signup = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((res) => res.json())
      .then(onLogin);
    navigate("/login");
  }

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="image-container-wrapper">
          <img
            src={signUp} 
            alt="Signup-image"
            className="signup-image-container-image"
          />
        </div>
        <div className="form-for-container">
          <h2>Sign up</h2>
          <form  className="Form" onSubmit={handleSubmit} autoComplete="on" >
            <div className="forms-group">
              <label htmlFor="email">Email Address</label>
              <input
                className="this-input"
                type="email"
                id="email"
                name="email"
                placeholder="jondoe123@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
            <div className="forms-group">
              <label htmlFor="password">Password</label>
              <input
                className="this-input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="forms-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="this-input"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="password"
                required
              />
            </div>
            <button className="submit-button" type="submit">Signup</button>
          </form>
          <div id="or">or</div>
          <div className="google-signup">
            <img
              src={googleIcon}
              alt="Google-icon"
              className="google-icon"
            />
            <p>Google</p>
          </div>
          <p className="have-account">
            Already have an account?{" "}
            <a className="login" href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;