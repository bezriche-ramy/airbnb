import React, { useRef } from 'react';
import './WhyChooseUs.css';
import useInView from '../hooks/useInView';

/**
 * WhyChooseUs Component
 * Displays four key benefits of B&C Conciergerie
 */
const WhyChooseUs = () => {
  const ref = useRef(null);
  const visible = useInView(ref, { threshold: 0.15 });

  return (
    <section className="why-choose-us">
      <div ref={ref} className={`why-container ${visible ? 'is-visible' : ''}`}>
        <h2 className="why-title">Pourquoi nous choisir</h2>
        
        <div className="benefits-grid">
          <div className="benefit-card">
            <span className="benefit-badge" aria-hidden>
              {/* Shield icon for Sérénité totale */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 2L4 5v6c0 5 4 9 8 11 4-2 8-6 8-11V5l-8-3z" fill="currentColor" />
              </svg>
            </span>
            <h3 className="benefit-title">Sérénité totale</h3>
            <p className="benefit-description">
              Nous gérons chaque aspect de vos emplacements, sans compromis.
            </p>
          </div>

          <div className="benefit-card">
            <span className="benefit-badge" aria-hidden>
              {/* Chart icon for Performance locative */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3 17h3v-7H3v7zm6 0h3V7H9v10zm6 0h3v-4h-3v4z" fill="currentColor" />
              </svg>
            </span>
            <h3 className="benefit-title">Performance locative</h3>
            <p className="benefit-description">
              Stratégie tarifaire et taux d'occupations optimisés.
            </p>
          </div>

          <div className="benefit-card">
            <span className="benefit-badge" aria-hidden>
              {/* Star icon for Service premium */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 17.3L5.6 20l1-6.1L2 9.6l6.2-.9L12 3l3.8 5.7 6.2.9-4.6 4.3L18.4 20 12 17.3z" fill="currentColor" />
              </svg>
            </span>
            <h3 className="benefit-title">Service premium</h3>
            <p className="benefit-description">
              Chaque détail compte, pour vous comme pour vos hôtes.
            </p>
          </div>

          <div className="benefit-card">
            <span className="benefit-badge" aria-hidden>
              {/* Location pin for Présence locale */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" fill="currentColor" />
              </svg>
            </span>
            <h3 className="benefit-title">Présence locale</h3>
            <p className="benefit-description">
              Une équipe basée sur la Côte d'Azur, disponible et réactive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
