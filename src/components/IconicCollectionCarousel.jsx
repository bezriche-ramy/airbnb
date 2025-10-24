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
          Gestion Locative de Nice à Monaco, <span className="title-highlight">l'excellence sur toute la Côte d'Azur</span>
        </h2>
      </div>

      <motion.div
        ref={ref}
        className={`iconic-collection-container ${visible ? 'is-visible' : ''}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
      >
        <motion.div className="destination-cards-stack" variants={cardsContainer}>
          
          {/* Card 1 - Côte d'Azur */}
          <motion.div className="destination-card" variants={cardVariant}>
            <div className="card-thumbnail">
              <img src="/cote azur.jpg" alt="Gestion locative Côte d'Azur - Location Airbnb luxe" className="card-thumbnail-image" loading="lazy" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Conciergerie Côte d'Azur</h3>
              <p className="card-location">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1.75C5.067 1.75 3.5 3.317 3.5 5.25C3.5 7.4375 7 12.25 7 12.25C7 12.25 10.5 7.4375 10.5 5.25C10.5 3.317 8.933 1.75 7 1.75Z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="5.25" r="1.25" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                Riviera Française
              </p>
              <p className="card-description">
                Gestion de propriétés de luxe, plages de rêve et gastronomie raffinée sur la Côte d'Azur.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Monaco */}
          <motion.div className="destination-card" variants={cardVariant}>
            <div className="card-thumbnail">
              <img src="/monaco.jpg" alt="Gestion locative Monaco - Conciergerie luxe Monaco" className="card-thumbnail-image" loading="lazy" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Gestion Locative Monaco</h3>
              <p className="card-location">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1.75C5.067 1.75 3.5 3.317 3.5 5.25C3.5 7.4375 7 12.25 7 12.25C7 12.25 10.5 7.4375 10.5 5.25C10.5 3.317 8.933 1.75 7 1.75Z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="5.25" r="1.25" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                Monaco
              </p>
              <p className="card-description">
                Conciergerie luxe Monaco - Gestion de biens premium et location courte durée.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Villefranche-sur-Mer */}
          <motion.div className="destination-card" variants={cardVariant}>
            <div className="card-thumbnail">
              <img src="/ville_franche.jpg" alt="Location saisonnière Villefranche-sur-Mer" className="card-thumbnail-image" loading="lazy" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Villefranche-sur-Mer</h3>
              <p className="card-location">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1.75C5.067 1.75 3.5 3.317 3.5 5.25C3.5 7.4375 7 12.25 7 12.25C7 12.25 10.5 7.4375 10.5 5.25C10.5 3.317 8.933 1.75 7 1.75Z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="5.25" r="1.25" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                Provence-Alpes
              </p>
              <p className="card-description">
                Location saisonnière dans une baie pittoresque avec authenticité provençale.
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Cannes */}
          <motion.div className="destination-card" variants={cardVariant}>
            <div className="card-thumbnail">
              <img src="/cannes.jpg" alt="Location Airbnb Cannes - Gestion appartements luxe" className="card-thumbnail-image" loading="lazy" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Conciergerie Cannes</h3>
              <p className="card-location">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1.75C5.067 1.75 3.5 3.317 3.5 5.25C3.5 7.4375 7 12.25 7 12.25C7 12.25 10.5 7.4375 10.5 5.25C10.5 3.317 8.933 1.75 7 1.75Z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="5.25" r="1.25" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                Côte d'Azur, France
              </p>
              <p className="card-description">
                Gestion de propriétés premium à Cannes - Location courte durée et services de conciergerie.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default IconicCollectionCarousel;
