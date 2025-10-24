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
            Conciergerie haut de gamme et gestion locative dédiée exclusivement aux propriétaires de résidences de luxe sur la Côte d'Azur, à Nice, Monaco et Cannes.
          </p>
          <p className="welcome-description">
            Nous prenons soin de votre bien immobilier et de votre propriété de luxe comme si c'était le nôtre avec exigence, élégance et discrétion.
          </p>
          <p className="welcome-description">
            De la mise en location Airbnb à la gestion complète de biens, nous définissons une expérience fluide et rentable avec des revenus locatifs optimisés, tout en valorisant votre patrimoine immobilier.
          </p>
        </div>

        {/* Right side - Photo grid */}
        <div className="welcome-photos">
          <div className="photo-grid">
            <img
              src="/why1.jpg"
              alt="Conciergerie luxe Nice Monaco - Gestion locative premium"
              className="grid-photo photo-1"
              loading="lazy"
            />
            <img
              src="/why2.jpg"
              alt="Location Airbnb Côte d'Azur - Gestion appartements"
              className="grid-photo photo-2"
              loading="lazy"
            />
            <img
              src="/why3.jpg"
              alt="Gestion de biens Monaco - Conciergerie haut de gamme"
              className="grid-photo photo-3"
              loading="lazy"
            />
            <img
              src="/why4.jpg"
              alt="Location courte durée Nice - Entretien professionnel"
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
