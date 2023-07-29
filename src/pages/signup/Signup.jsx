import "./Signup.css";
import { signUp } from "../../assets";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="image-container">
          <img
            src={signUp}
            alt="Signup-image"
            className="signup-image-container-image"
          />
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
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
              />
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
          <p>
            Already have an account?{" "}
            <a className="login" href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
