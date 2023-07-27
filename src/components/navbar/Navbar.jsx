import { Link } from "react-router-dom";
import { logo } from "../../assets";
import "./navbar.css";

const Navbar = () => {
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
        <Link to="/membership">Membership</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      {/* login */}
      <div className="logon-options">
        <button className="">Login</button>
        <button className="">Login</button>
      </div>
    </header>
  );
};

export default Navbar;
