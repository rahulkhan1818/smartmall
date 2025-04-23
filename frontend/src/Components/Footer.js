import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  const handleLocationClick = () => {};

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <h2 className="footer-title">Smart Malls</h2>
          <p className="footer-description">
            Discover the ultimate shopping and entertainment experience with Smart Malls. 
            Where technology meets luxury!
          </p>
        </div>

        <div className="footer-section footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-list">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/services" className="footer-link">Services</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3 className="footer-heading">Contact Us</h3>
          <p>Email: <Link to="mailto:info@smartmalls.com" className="footer-link">info@smartmalls.com</Link></p>
          <p>Phone: <Link to="tel:+1234567890" className="footer-link">+9812021861</Link></p>
          <p>Address: 123 Smart Mall Blvd, Metro City</p>
        </div>

        <div className="footer-section footer-social">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-social-icons">
            <Link to="/" className="footer-icon"><i className="bi bi-facebook"></i></Link>
            <Link to="/" className="footer-icon"><i className="bi bi-twitter"></i></Link>
            <Link to="/" className="footer-icon"><i className="bi bi-instagram"></i></Link>
            <Link to="/" className="footer-icon"><i className="bi bi-linkedin"></i></Link>
            <Link to="/" className="footer-icon"><i className="bi bi-whatsapp"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
