import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; // Ensure you include this CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
           
          <Link to="/">Shri Vinayak Infra</Link>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/community">Community</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
