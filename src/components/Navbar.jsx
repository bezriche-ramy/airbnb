import React from 'react';
import './Navbar.css';
// Using react-icons for icon placeholders
import { FaBars, FaHeart, FaUserCircle } from 'react-icons/fa';

/**
 * Navbar Component
 * Main navigation bar with logo, menu icon, phone number, app button, wishlist, and profile
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left section - Menu icon and Logo */}
        <div className="navbar-left">
          <button className="menu-icon" aria-label="Menu">
            <FaBars />
          </button>
          <div className="logo">
            le collectionist
          </div>
        </div>

        {/* Right section - Phone, App button, Wishlist, Profile */}
        <div className="navbar-right">
          <a href="tel:+33173030202" className="phone-number">
            +33 1 73 03 02 02
          </a>
          <button className="app-button">
            Obtenir l'app
          </button>
          <button className="icon-button wishlist" aria-label="Wishlist">
            <FaHeart />
          </button>
          <button className="icon-button profile" aria-label="Profile">
            <FaUserCircle />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
