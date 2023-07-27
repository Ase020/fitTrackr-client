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
    </header>
  );
};

export default Navbar;
