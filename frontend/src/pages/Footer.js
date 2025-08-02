import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* 1. School Info */}
        <div className="footer-section">
          <h2>Sri Gayatri School</h2>
          <p>Empowering Education for a Better Future</p>
        </div>

        {/* 2 & 3. Quick + Useful Links */}
        <div className="footer-links-wrapper">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="/admission">Admission</a></li>
              <li><a href="/faculty">Faculty</a></li>
              <li><a href="/sports">Sports</a></li>
            </ul>
          </div>
        </div>

        {/* 4. Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Tuni, Andhra Pradesh, India</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: info@srigayatrischool.com</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sri Gayatri School. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
