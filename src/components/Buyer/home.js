import React from 'react';
import './home.css'; // Import CSS for styling
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to DealDone</h1>
        <p>Your one-stop shop for everything!</p>
      </header>

      <div className="home-content">
        <div className="home-banner">
          <img src="/path-to-your-image/shopping-banner.jpg" alt="Shopping Banner" />
        </div>

        <div className="home-features">
          <h2>Why Shop With Us?</h2>
          <ul>
            <li>Wide range of products</li>
            <li>Fast and secure delivery</li>
            <li>Easy returns and exchanges</li>
            <li>24/7 customer support</li>
          </ul>
        </div>

        <div className="home-actions">
          <Link to="/signup" className="home-btn">Get Started</Link>
          <Link to="/login" className="home-btn">Log In</Link>
        </div>
      </div>

      <footer className="home-footer">
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
        </div>
        <p>© 2024 DealDone. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
