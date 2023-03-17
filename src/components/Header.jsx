import logoImage from "../assets/logo.svg";
import heroImage from "../assets/illustration-working.svg";
import Shortener from "./Shortener";

function Header() {
  function toggleLinks() {
    document.querySelector(".link-section").classList.toggle("active");
  }

  return (
    <header className="header">
      <nav className="nav-bar">
        <img src={logoImage} alt="logo" className="logo" />

        <div className="link-section">
          <div>
            <a href="#" className="link">
              Features
            </a>
            <a href="#" className="link">
              Pricing
            </a>
            <a href="#" className="link">
              Resources
            </a>
          </div>
          <div>
            <a href="#" className="link">
              Login
            </a>
            <a href="#" className="btn">
              Sign Up
            </a>
          </div>
        </div>

        <i className="fa fa-bars" onClick={toggleLinks}></i>
      </nav>

      <div className="content">
        <div className="content-item">
          <h1 className="title">More than just shorter links</h1>
          <p className="sub-title">
            Build your brand's recognition and got detailed insights on how your
            links are performing.
          </p>
          <a href="#" className="btn">
            Get Started
          </a>
        </div>
        <div className="content-item">
          <img
            src={heroImage}
            alt="illustration-working"
            className="hero-img"
          />
        </div>
      </div>

      <Shortener />
    </header>
  );
}

export default Header;
