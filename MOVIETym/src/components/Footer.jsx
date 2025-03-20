import React from 'react';
import { FaTiktok, FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'; // Import social media icons
import '../styles.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Media Section */}
        <div className="footer-section">
          <h4>Follow MOVIETym on Social</h4>
          <div className="social-links">
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
          </div>
        </div>

        {/* App Download Section */}
        <div className="footer-section">
          <h4>Get the MOVIETym App</h4>
          <p>For Android and iOS</p>
          <img src="https://via.placeholder.com/100x100" alt="QR Code" className="qr-code" />
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        <a href="/help">Help</a>
        <a href="/site-index">Site Index</a>
        <a href="/pro">MOVIETym Pro</a>
        <a href="/box-office">Box Office Mojo</a>
        <a href="/license">License</a>
        <a href="/data">MOVIETym Data</a>
        <a href="/press">Press Room</a>
        <a href="/advertising">Advertising</a>
        <a href="/jobs">Jobs</a>
        <a href="/conditions">Conditions of Use</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/your-privacy-choices" className="privacy-choices">
          Your Privacy Choices
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 by MOVIETym, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;