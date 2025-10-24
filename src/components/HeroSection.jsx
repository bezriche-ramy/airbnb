import React from 'react';
import './HeroSection.css';

/**
 * HeroSection Component
 * Fullscreen background video with dark overlay and centered hero text
 * Uses the provided video URL from Le Collectionist
 */
const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <video 
        className="hero-video" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source 
          src="https://collectionist.s3.eu-west-1.amazonaws.com/production/assets/homepage/2025/ski-fever.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Votre bien.
          <br />
          Notre expertise.
          <br />
          Votre tranquillité.
        </h1>
        <p className="hero-subtitle">
          B&C pour Bienveillance & Confiance
        </p>
        <button className="estimation-button">
          Demander une estimation gratuite
        </button>
      </div>

      {/* suggestion bar removed */}
    </section>
  );
};

export default HeroSection;
