import React, { useRef } from 'react';
import './WelcomeSection.css';
import useInView from '../hooks/useInView';

/**
 * WelcomeSection Component
 * Text content on the left, three photos grid on the right
 * Introduces B&C Conciergerie Côte d'Azur
 */
const WelcomeSection = () => {
  const ref = useRef(null);
  const visible = useInView(ref, { threshold: 0.12 });

  return (
    <section className="welcome-section">
      <div ref={ref} className={`welcome-container ${visible ? 'is-visible' : ''}`}>
        {/* Left side - Text content */}
        <div className="welcome-text">
          <h2 className="welcome-title">
            Bienvenue chez
            <br />
            B&C Conciergerie Côte d'Azur
          </h2>
          <p className="welcome-description">
            Conciergerie haut de gamme dédiée exclusivement aux propriétaires de résidences sur la Côte d'Azur et à Monaco.
          </p>
          <p className="welcome-description">
            Nous prenons soin de votre bien comme si c'était le nôtre avec exigence, élégance et discrétion.
          </p>
          <p className="welcome-description">
            De la mise en location à la gestion complète, nous définissons une expérience fluide et rentable, tout en valorisant votre patrimoine.
          </p>
        </div>

        {/* Right side - Photo grid */}
        <div className="welcome-photos">
          <div className="photo-grid">
            <img
              src="/why1.jpg"
              alt="Why image 1"
              className="grid-photo photo-1"
              loading="lazy"
            />
            <img
              src="/why2.jpg"
              alt="Why image 2"
              className="grid-photo photo-2"
              loading="lazy"
            />
            <img
              src="/why3.jpg"
              alt="Why image 3"
              className="grid-photo photo-3"
              loading="lazy"
            />
            <img
              src="/why4.jpg"
              alt="Why image 4"
              className="grid-photo photo-4"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
