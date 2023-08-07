/* eslint-disable react/prop-types */
// import { useNavigate } from "react-router-dom";

import { googleIcon, signUp } from "../../assets";
import "./signup1.css";

const Signup1 = ({
  // onLogin,
  email,
  setEmail,
  password,
  setPassword,
  passwordConfirmation,
  setPasswordConfirmation,
  setShowPage,
}) => {
  // const navigate = useNavigate();

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("http://localhost:3000/signup", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //       password_confirmation: passwordConfirmation,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then(onLogin);

  //   navigate("/login");
  // }

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
          <form className="Form" autoComplete="on">
            <div className="forms-group">
              <label>Email Address</label>
              <input
                className="sign_page-inputs"
                type="email"
                placeholder="jondoe123@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
            <div className="forms-group">
              <label>Password</label>
              <input
                className="sign_page-inputs"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="forms-group">
              <label>Confirm Password</label>
              <input
                className="sign_page-inputs"
                type="password"
                placeholder="Confirm your password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="password"
                required
              />
            </div>
            <button
              className="submit-button"
              type="submit"
              onClick={() => {
                setShowPage("profile");
              }}
            >
              Signup
            </button>
          </form>
          <div id="or">or</div>
          <div className="google-signup">
            <img src={googleIcon} alt="Google-icon" className="google-icon" />
            <p>Google</p>
          </div>
          <p className="have-account">
            Already have an account?{" "}
            <a className="login-shortcut" href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signup1;
