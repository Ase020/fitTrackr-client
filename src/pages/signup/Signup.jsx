import "./signup.css";
import { signUp } from "../../assets";
import { googleIcon } from "../../assets";

const Signup = () => {
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
          <form>
            <div className="forms-group">
              <label htmlFor="email">Email Address</label>
              <input
                className="this-input"
                type="email"
                id="email"
                name="email"
                placeholder="jondoe123@example.com"
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