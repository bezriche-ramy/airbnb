import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
// PhotoGallerySection, SkiFever, and IconicCollectionCarousel removed per request
import './Home.css';

/**
 * Home Page
 * Main landing page with fullscreen video background, search functionality
 * Luxury holiday rental homepage inspired by Le Collectionist
 */
const Home = () => {
  return (
    <div className="home-page">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section with Video Background and Suggestion Bar */}
      <HeroSection />

  

      {/* Removed Photo Gallery, Ski Fever, and Iconic Collection sections */}


    </div>
  );
};

export default Home;
