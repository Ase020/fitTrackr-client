/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./login.css";
import { googleIcon, login1 } from "../../assets";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    // Send login request to the server
    fetch("https://fittrackr-8zow.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid credentials");
        }
        return res.json();
      })
      .then((user) => {
        onLogin(user);
        navigate("/exercises");
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div className="login_container">
      <div className="login-wrapper">
        <div className="image-container">
          <img src={login1} alt="Login-img" className="login-logo-img" />
        </div>
        <div className="form_container">
          <h3>Login</h3>
          <form onSubmit={handleSubmit} autoComplete="on">
            <div className="form-group">
              <label>Email Address</label>
              <input
                className="sign_page-inputs"
                type="email"
                placeholder="jondoe123@gmail.com"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="sign_page-inputs"
                type="password"
                placeholder="************"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>
            <button type="submit" className="login-btn">
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>
          <p className="have-account">
            <Link className="login-shortcut" to="/login/password_reset">
              Forgot password?
            </Link>
          </p>
          <div className="or-divides">or</div>
          <div className="google-login">
            <img src={googleIcon} alt="Google-icon" className="google-icon" />
            <p>Google</p>
          </div>
          <p className="have-account">
            Don&apos;t have an account?{" "}
            <Link className="login-shortcut" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
