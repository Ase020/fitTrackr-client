import { Link } from "react-router-dom";
import {
  dribbble,
  enterEmail,
  facebook,
  footerLogo,
  instagram,
  twitter,
} from "../../assets";
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

        <div className="footer-newsletter">
          <h4 className="footer-contact-header">Newsletter</h4>
          <p className="footer-newsletter-desc">
            Subscribe our newsletter to get more free design course and
            resource.
          </p>
          <div className="footer-newsletter-email-wrapper">
            <input
              type="text"
              placeholder="Enter your email"
              className="footer-newsletter-email"
            />
            <img src={enterEmail} alt="send" className="newsletter-btn" />
          </div>
        </div>
      </div>

      <div className="footer-copyright-social-links">
        <div className="footer-copyright">
          Copyright © 2023 FitTrackr LLC. All rights reserved
        </div>
        <div className="footer-social-links">
          <Link to="/">
            <img src={facebook} alt="facebook" className="footer-social-link" />
          </Link>
          <Link to="/">
            <img src={twitter} alt="twitter" className="footer-social-link" />
          </Link>
          <Link to="/">
            <img
              src={instagram}
              alt="instagram"
              className="footer-social-link"
            />
          </Link>
          <Link to="/">
            <img src={dribbble} alt="dribbble" className="footer-social-link" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
