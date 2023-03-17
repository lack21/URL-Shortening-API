import logoImage from "../assets/logo.svg";
import facebookImage from "../assets/icon-facebook.svg";
import twitterImage from "../assets/icon-twitter.svg";
import pinterestImage from "../assets/icon-pinterest.svg";
import instagramImage from "../assets/icon-instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-image">
        <img src={logoImage} alt="logo" className="logo" />
      </div>

      <div className="footer-item">
        <h3 className="item-name">Features</h3>
        <a href="#" className="footer-link">
          Link Shortening
        </a>
        <a href="#" className="footer-link">
          Branded Links
        </a>
        <a href="#" className="footer-link">
          Analytics
        </a>
      </div>

      <div className="footer-item">
        <h3 className="item-name">Resources</h3>
        <a href="#" className="footer-link">
          Blog
        </a>
        <a href="#" className="footer-link">
          Developers
        </a>
        <a href="#" className="footer-link">
          Support
        </a>
      </div>

      <div className="footer-item">
        <h3 className="item-name">Company</h3>
        <a href="#" className="footer-link">
          About
        </a>
        <a href="#" className="footer-link">
          Our Team
        </a>
        <a href="#" className="footer-link">
          Careers
        </a>
        <a href="#" className="footer-link">
          Contact
        </a>
      </div>

      <div className="social-icons">
        <img src={facebookImage} alt="facebook-icon" />
        <img src={twitterImage} alt="twitter-icon" />
        <img src={pinterestImage} alt="pinterest-icon" />
        <img src={instagramImage} alt="instagram-icon" />
      </div>
    </footer>
  );
}

export default Footer;
