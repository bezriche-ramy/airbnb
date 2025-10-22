import React, { useState, useEffect } from 'react';
import './Navbar.css';
// Using react-icons for icon placeholders
import { FaBars, FaHeart, FaUserCircle } from 'react-icons/fa';

/**
 * Navbar Component
 * Main navigation bar with logo, menu icon, phone number, app button, wishlist, and profile
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((s) => !s);
  const closeMenu = () => setMenuOpen(false);

  // side effect: add a 'blurred' class to the main content when the drawer is open
  useEffect(() => {
    const main = document.querySelector('.site-main');
    if (!main) return;
    if (menuOpen) main.classList.add('blurred');
    else main.classList.remove('blurred');
    return () => main.classList.remove('blurred');
  }, [menuOpen]);

  useEffect(() => {
    // Robust scroll detection: check multiple possible scroll containers (window, documentElement, body, .home-page)
    const homeEl = document.querySelector('.home-page');
    const candidates = [window, document.documentElement, document.body, homeEl].filter(Boolean);

    let rafId = 0;

    const getTop = (c) => {
      try {
        if (c === window) return window.scrollY || window.pageYOffset || 0;
        return c.scrollTop || 0;
      } catch (e) {
        return 0;
      }
    };

    const poll = () => {
      const anyScrolled = candidates.some((c) => getTop(c) > 0);
      setScrolled(anyScrolled);
      rafId = requestAnimationFrame(poll);
    };

    // start polling
    poll();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        {/* Left section - Menu icon and Logo */}
        <div className="navbar-left">
          <button className="menu-icon" aria-label="Menu" onClick={toggleMenu} aria-expanded={menuOpen} aria-controls="site-drawer">
            <FaBars />
          </button>
          <div className="logo">
            <img src="/logo.jpg" alt="conciergerie logo" className="logo-img" />
            <span className="logo-text">conciergerie</span>
          </div>
        </div>

        {/* Right section - Phone, App button, Wishlist, Profile */}
        <div className="navbar-right">
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
      {/* Drawer + Backdrop */}
      <div className={`nav-backdrop ${menuOpen ? 'open' : ''}`} onClick={closeMenu} aria-hidden={!menuOpen}></div>

      <aside id="site-drawer" className={`nav-drawer ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <button className="drawer-close" aria-label="Close menu" onClick={closeMenu}>&times;</button>
        <nav className="drawer-links" aria-label="Primary">
          <a href="/" onClick={closeMenu}>PAGE D'ACCUEIL</a>
          <a href="/services" onClick={closeMenu}>NOS SERVICES</a>
          <a href="/about" onClick={closeMenu}>À PROPOS</a>
          <a href="/destinations" onClick={closeMenu}>DESTINATIONS</a>
        </nav>

        <div className="drawer-footer">
          <p className="drawer-contact">Nos conseillers sont joignables<br/><strong>+33 1 73 03 02 02</strong></p>
          <a className="drawer-contact-link" href="/contact">Contactez-nous</a>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
