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
              src="https://th.bing.com/th/id/OIP.DEK0fRndpTScfJR7CAI8BAHaD2?w=320&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3" 
              alt="Luxury property view 1"
              className="grid-photo photo-1"
            />
            <img 
              src="https://th.bing.com/th/id/OIP.MsH-aCY_jy8xSwEL0efzKwHaEK?w=329&h=185&c=7&r=0&o=7&cb=12&pid=1.7&rm=3" 
              alt="Luxury property view 2"
              className="grid-photo photo-2"
            />
            <img 
              src="https://th.bing.com/th/id/OIP.vtk3S8Dmmu91gU8Uju8-jQHaE8?w=277&h=185&c=7&r=0&o=7&cb=12&pid=1.7&rm=3" 
              alt="Luxury property view 3"
              className="grid-photo photo-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
