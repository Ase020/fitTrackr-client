import React from "react";
// import { signUp } from "../../assets";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="container">
      <div className="image-container">
        {/* <img src={signUp} alt="Signup-image" /> */}
      </div>
      <div className="form-container">
        <h2>Sign up</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />
          </div>
          <button type="submit">Signup</button>
        </form>
        <div className="or-divider">
          <hr />
          <p>or</p>
        </div>
        <div className="google-signup">
          <p>Google</p>
          {/* not forgetting the google identity */}
        </div>
        <p>Already have an account? <a className="login" href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;
