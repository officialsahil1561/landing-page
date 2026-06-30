import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Brand Name</h3>
          <p>Your brand's tagline goes here.</p>
          <div className="social-media">
            <Link to="/" className="social-icon">
              <FaFacebookF />
            </Link>
            <Link to="/" className="social-icon">
              <FaTwitter />
            </Link>
            <Link to="/" className="social-icon">
              <FaInstagram />
            </Link>
            <Link to="/" className="social-icon">
              <FaTiktok />
            </Link>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: contact@brand.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Brand Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;