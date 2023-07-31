import { Link } from "react-router-dom";
import { logo } from "../../assets";
import "./navbar.css";

const Navbar = () => {
import { useState } from "react";

const Navbar = () => {
  const [profile, setProfile] = useState(false);
  const currentUser = {
    name: "felix",
    profile:
      "https://images.pexels.com/photos/17751042/pexels-photo-17751042.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  };
  return (
    <header className="navbar-container">
      {/* logo */}
      <Link to="/" className="navbar-logo-container">
        <img src={logo} alt="logo" className="navbar-logo-img" />
        <h4 className="navbar-logo-name">
          Fit<span className="navbar-logo-subname">Trackr</span>
        </h4>
      </Link>

      {/* navlinks */}
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/exercises">Exercises</Link>
        <Link to="/membership">Membership</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      {/* login */}
      <div className="logon-options">
        <button className="logon-btn login-option">Log In</button>
        <button className="logon-btn signup-option">Sign Up</button>
      </div>
      {currentUser ? (
        <div className="user_profile">
          <img
            src={currentUser.profile}
            alt=""
            className="user_profile-pic"
            onClick={() => setProfile((prevState) => !prevState)}
          />
          {profile && (
            <div className="user_profile-container">
              <Link
                className="user_profile-link"
                onClick={() => setProfile((prev) => !prev)}
                to="/profile"
              >
                My profile
              </Link>
              <Link
                className="user_profile-link"
                onClick={() => setProfile((prev) => !prev)}
                to="/dashboard"
              >
                Dashboard
              </Link>
              <button className="user_profile-btn">Logout</button>
            </div>
          )}
        </div>
      ) : (
        <div className="logon-options">
          <Link to="/login" className="logon-btn login-option">
            Log In
          </Link>
          <Link to="/signup" className="logon-btn signup-option">
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
