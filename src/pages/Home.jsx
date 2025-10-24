import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WelcomeSection from '../components/WelcomeSection';
import WhyChooseUs from '../components/WhyChooseUs';
import NosEngagements from '../components/NosEngagements';
import IconicCollectionCarousel from '../components/IconicCollectionCarousel';
import ServicesSection from '../components/ServicesSection';
import NosLogements from '../components/NosLogements';
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

      {/* Main page content (will be blurred when the nav drawer opens) */}
      <main className="site-main">
        {/* Hero Section with Video Background */}
        <HeroSection />

  {/* Welcome Section - B&C Conciergerie Introduction */}
  <WelcomeSection />

  {/* subtle color transition between sections */}
  

  {/* Why Choose Us Section - Key Benefits */}
  <WhyChooseUs />

  {/* subtle color transition between sections */}
  

  {/* Nos Engagements Section */}
  <NosEngagements />
  {/* Iconic Collection Carousel - Featured Destinations */}
  <IconicCollectionCarousel />

  {/* Services Section - Complete Management Services */}
  <ServicesSection />

  {/* Nos Logements Section - Property Showcase */}
  <NosLogements />

  
      </main>
    </div>
  );
};

export default Home;
