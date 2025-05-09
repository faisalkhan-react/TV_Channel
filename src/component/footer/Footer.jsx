import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left: Logo + About */}
        <div className="footer-section">
          <div className="footer-logo">Chitramcinema</div>
          <p className="footer-about">
          ChitramCinema helps individuals and startups scale fast with modern web solutions. 
            We believe in innovation, simplicity, and impact.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>✉️ chitramcinema@gmail.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Chitramcinema. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
