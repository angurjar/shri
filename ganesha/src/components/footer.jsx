import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Shri Vinayak Infra</h2>
          <p>We are a leading service provider in oil & gas, telecom, and power sectors, committed to excellence and quality assurance.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/our-team">Our Team</Link></li>
            <li><Link to="/founder">Founder Details</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/Clients">Clients</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@shri-vinayak.com</p>
          <p>Phone: +91-1234567890</p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <Link to="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Shri Vinayak Infra. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
