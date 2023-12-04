import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.png";
import facebookIcon from "../assets/img/facebook-logo.png";
import twitterIcon from "../assets/img/Twitter-logo.png";
import instagramIcon from "../assets/img/Instagram-logo.png";
import linkedinIcon from "../assets/img/linkedin-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container"  style={{  backgroundColor: "white" }}>
        <div className="row">
          <div className="col-md-3">
            <img src={logo} alt="logo" style={{ width: "50%", height: "auto" }} />
          </div>

          <div className="col-md-3">
            <p>Follow Us on Social Media</p>
            <div>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" style={{ width: "30px", height: "30px", marginRight: "10px" }} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" style={{ width: "30px", height: "30px", marginRight: "10px" }} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" style={{ width: "30px", height: "30px", marginRight: "10px" }} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" style={{ width: "30px", height: "30px" }} />
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <p>Community</p>
            <ul className="list-unstyled">
              <li>
                <Link to="/community">Blog</Link>
              </li>
              <li>
                <Link to="/community">Community</Link>
              </li>
              <li>
                <Link to="/community">Ideas</Link>
              </li>
            </ul>
          </div>


          <div className="col-md-3">
            <p>Useful Links</p>
            <ul className="list-unstyled">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/media">Media</Link>
              </li>
              <li>
                <Link to="/terms-of-use">Terms of Use</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookie-policy">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/Contacts-ands-imprints">Contacts and imprints</Link>
              </li>
              <li>
                <Link to="/cookie-setting">Cookie Setting</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom" style={{ textAlign: "center", backgroundColor: "white" }}>
          <p>&copy; {new Date().getFullYear()} ExpertiseLink All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;