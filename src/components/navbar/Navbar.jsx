/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import "./navbar.css";
import { useState } from "react";

const Navbar = ({ user, onLogout, isLoggedin }) => {
  const [profile, setProfile] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch("http://localhost:3000/logout", {
      method: "DELETE",
    }).then(() => onLogout());
    setProfile(false);
    console.log("logged out");
    navigate("/login");
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
        <Link to="/exercises">Exercises</Link>
        <Link to="/membership">Membership</Link>
        <Link to="/workouts">My Workouts</Link>
      </nav>

      {/* login */}
      {isLoggedin ? (
        <div className="user_profile">
          <img
            src={user.profile_image}
            alt=""
            className="user_profile-pic"
            onClick={() => setProfile((prevState) => !prevState)}
          />
          {profile && (
            <div className="user_profile-container">
              <Link
                className="user_profile-link"
                onClick={() => setProfile((prev) => !prev)}
                to="/myprofile"
              >
                {user?.username}
              </Link>
              {user?.is_admin && (
                <Link
                  className="user_profile-link"
                  onClick={() => setProfile((prev) => !prev)}
                  to="/add-exercise"
                >
                  Add Exercise
                </Link>
              )}
              <Link
                className="user_profile-link"
                onClick={() => setProfile((prev) => !prev)}
                to="/dashboard"
              >
                Dashboard
              </Link>
              <button className="user_profile-btn" onClick={handleLogout}>
                Logout
              </button>
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
