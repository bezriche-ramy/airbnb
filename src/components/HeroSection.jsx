import React from 'react';
import SuggestionBar from './SuggestionBar';
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
          Vos vacances méritent d'être inoubliables
        </h1>
        <p className="hero-subtitle">
          Les plus belles maisons à louer, des services exceptionnels et des expériences mémorables
        </p>
        <button className="estimation-button">
          Estimation
        </button>
      </div>

      {/* Suggestion Bar - Positioned at bottom of hero */}
      <div className="hero-suggestion-overlay">
        <SuggestionBar />
      </div>
    </section>
  );
};

export default HeroSection;
