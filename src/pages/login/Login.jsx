import "./login.css";
import { login1 } from "../../assets";

const Login = () => {
    return (
    <div className="login_container">
      <div class="login-content-wrapper">
      <div> 
      
         <img src={login1} alt="img" className="login-logo-img"/>
      </div>
      <div className="form_container">

      <form className="Form"  id="login" autoComplete="on">
        <h3>Login</h3>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="email"
         
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
         
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />

        <button type="submit" className="login-btn">
          Log In
        </button>
      </form>
      </div>
      </div>
    
    </div>
    
  )
};

export default Login;
