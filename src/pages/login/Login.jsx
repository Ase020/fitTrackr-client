import "./login.css";
import { login1 } from "../../assets";
import { googleIcon } from "../../assets";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = (handleLogin) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    // Send login request to the server
    fetch("http://localhost:3000/login", {
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
        handleLogin(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Login failed:", error);
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
              <label htmlFor="email">Email Address</label>
              <input
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
              <label htmlFor="password">Password</label>
              <input
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
              Log In
            </button>
          </form>
          <p className="have-account">
            <Link className="login" to="/login/password_reset">
              Forgot password?
            </Link>
          </p>
          <div className="or-divides">or</div>
          <div className="google-login">
            <img src={googleIcon} alt="Google-icon" className="google-icon" />
          </div>
          <p className="have-account">
            Don&apos;t have an account?{" "}
            <Link className="login" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
