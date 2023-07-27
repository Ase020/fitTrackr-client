import { Link } from "react-router-dom";
import { footerLogo } from "../../assets";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links-container">
        <div className="footer-links-logo-wrapper">
          <img src={footerLogo} alt="footer-logo" className="footer-logo" />
          <div className="footer-links">
            <Link to="/">Lifestyle</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">Features</Link>
            <Link to="/">Class</Link>
            <Link to="/">Download</Link>
          </div>
        </div>

        <div className="footer-contact-us">
          <h4 className="footer-contact-header">Address</h4>

          <div className="footer-contact-address-wrapper">
            <p className="footer-contact-address">1st Floor Ngong Lane Plaza</p>
            <p className="footer-contact-address">Ngong Road</p>
            <p className="footer-contact-address">Nairobi, Kenya</p>
            <p className="footer-contact-address">+254 712 345 678</p>
          </div>
        </div>
        <div className="footer-newsletter">Newsletter</div>
      </div>

      <div className="footer-copyright-social-links">
        <div className="footer-copyright">Copyright</div>
        <div className="footer-social-links">Copyright</div>
      </div>
    </footer>
  );
};

export default Footer;
