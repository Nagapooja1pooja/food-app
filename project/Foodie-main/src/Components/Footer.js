import React from "react";
import Logo from "../Assets/Logo.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          {/* <img src={Logo} alt="" /> */}
          <h1>Vittles</h1>

        </div>
        <div className="footer-icons">
          <a href="https://twitter.com/your-twitter-profile">
            <TwitterIcon />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-profile">
            <LinkedInIcon />
          </a>
          <a href="https://www.youtube.com/">
            <YouTubeIcon />
          </a>
          <a href="https://www.facebook.com/your-facebook-page">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/elli-instagram-page/">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>9876543210</span>
          <span>elli@gmail.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
