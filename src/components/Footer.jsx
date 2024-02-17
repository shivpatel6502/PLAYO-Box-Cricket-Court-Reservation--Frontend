import React from 'react';
import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>Aim</p>
          <p>Vision</p>
          <p>Testimonials</p>
        </div>
        <div className="footer-section">
          <h2>Services</h2>
          <p>Writing</p>
          <p>Internships</p>
          <p>Coding</p>
          <p>Teaching</p>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Uttar Pradesh</p>
          <p>Ahmedabad</p>
          <p>Indore</p>
          <p>Mumbai</p>
        </div>
        <div className="footer-section">
          <h2>Social Media</h2>
          <p>
            <i className="fab fa-facebook-f"></i> Facebook
          </p>
          <p>
            <i className="fab fa-instagram"></i> Instagram
          </p>
          <p>
            <i className="fab fa-twitter"></i> Twitter
          </p>
          <p>
            <i className="fab fa-youtube"></i> Youtube
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Crickies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;