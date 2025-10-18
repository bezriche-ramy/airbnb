import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PhotoGallerySection from '../components/PhotoGallerySection';
import SkiFever from '../components/SkiFever';
import IconicCollectionCarousel from '../components/IconicCollectionCarousel';
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

  

      {/* Photo Gallery Section - Collections */}
      <PhotoGallerySection />

    
      {/* Ski Fever Promo Block */}
      <SkiFever />

        {/* Iconic Collection Carousel */}
      <IconicCollectionCarousel />


    </div>
  );
};

export default Home;
