import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './IconicCollectionCarousel.css';
import useInView from '../hooks/useInView';

/**
 * Iconic Collection Carousel Section
 * Left: Large featured destination card (636x600px)
 * Right: Stack of 3 destination cards (636x180px each)
 */
const IconicCollectionCarousel = () => {
  const ref = useRef(null);
  const visible = useInView(ref, { threshold: 0.1 });

  // Framer Motion variants
  const featuredVariant = {
    // keep scale animation but start fully visible to avoid pre-animation flash
    hidden: { scale: 0.98, opacity: 1 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }
    }
  };

  const cardsContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } }
  };

  // Slide-in animation only — keep opacity at 1 so cards are visible before animation starts
  const cardVariant = {
    hidden: { x: 80, opacity: 1 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } }
  };

  return (
    <section className="iconic-collection-section">
      <div className="iconic-collection-header">
        <span className="section-badge">DESTINATIONS EN VEDETTE</span>
        <h2 className="section-title">
          De Nice à Monaco, <span className="title-highlight">l'excellence sur toute la Côte d'Azur</span>
        </h2>
      </div>

      <motion.div
        ref={ref}
        className={`iconic-collection-container ${visible ? 'is-visible' : ''}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
      >
        {/* Left Side - Large Featured Card */}
        <div className="featured-card-large">
          <motion.div
            className="featured-card-image-wrapper"
            variants={featuredVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img 
              src="/cannes.jpg" 
              alt="Cannes - Destination de luxe sur la Côte d'Azur" 
              className="featured-card-image"
            />
            <div className="featured-card-overlay">
              <span className="featured-badge">CHOIX POPULAIRE</span>
              <h3 className="featured-title">Cannes</h3>
              <p className="featured-location">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2C5.79086 2 4 3.79086 4 6C4 8.5 8 14 8 14C8 14 12 8.5 12 6C12 3.79086 10.2091 2 8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Côte d'Azur, France
              </p>
              <p className="featured-description">
                Prestige, glamour, et culture sur le littoral méditerranéen. Profitez du luxe français à son apogée.
              </p>
              <button className="explore-btn">
                Découvrir
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Stack of 3 Cards */}
  <motion.div className="destination-cards-stack" variants={cardsContainer}>
          
          {/* Card 1 - Monaco */}
          <motion.div className="destination-card" variants={cardVariant}>
            <div className="card-thumbnail">
              <img src="/monaco.jpg" alt="Monaco" className="card-thumbnail-image" />
              <span className="card-badge badge-red">MEILLEURE OFFRE</span>
            </div>
            <div className="card-content">
              <h4 className="card-title">Monaco</h4>
              <p className="card-location">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1.75C5.067 1.75 3.5 3.317 3.5 5.25C3.5 7.4375 7 12.25 7 12.25C7 12.25 10.5 7.4375 10.5 5.25C10.5 3.317 8.933 1.75 7 1.75Z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="5.25" r="1.25" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                Monaco
              </p>
              <p className="card-description">
                Glamour absolu, yachts prestigieux et casino légendaire sur la Méditerranée scintillante.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Côte d'Azur */}
          <motion.div className="destination-card" variants={cardVariant}>
            <div className="card-thumbnail">
              <img src="/cote azur.jpg" alt="Côte d'Azur" className="card-thumbnail-image" />
            </div>
            <div className="card-content">
              <h4 className="card-title">Côte d'Azur</h4>
              <p className="card-location">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1.75C5.067 1.75 3.5 3.317 3.5 5.25C3.5 7.4375 7 12.25 7 12.25C7 12.25 10.5 7.4375 10.5 5.25C10.5 3.317 8.933 1.75 7 1.75Z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="5.25" r="1.25" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                Riviera Française
              </p>
              <p className="card-description">
                Plages de rêve, villages perchés et gastronomie raffinée dans un cadre idyllique azuré.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Villefranche-sur-Mer */}
          <motion.div className="destination-card" variants={cardVariant}>
            <div className="card-thumbnail">
              <img src="/ville_franche.jpg" alt="Villefranche-sur-Mer" className="card-thumbnail-image" />
              <span className="card-badge badge-yellow">PLACES LIMITÉES</span>
            </div>
            <div className="card-content">
              <h4 className="card-title">Villefranche-sur-Mer</h4>
              <p className="card-location">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1.75C5.067 1.75 3.5 3.317 3.5 5.25C3.5 7.4375 7 12.25 7 12.25C7 12.25 10.5 7.4375 10.5 5.25C10.5 3.317 8.933 1.75 7 1.75Z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="5.25" r="1.25" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                Provence-Alpes
              </p>
              <p className="card-description">
                Baie pittoresque, ruelles colorées et authenticité provençale au cœur de la Riviera.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default IconicCollectionCarousel;
