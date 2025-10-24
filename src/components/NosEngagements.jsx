import React, { useRef } from 'react';
import './NosEngagements.css';
import useInView from '../hooks/useInView';

/**
 * Nos Engagements Section
 * Two-column layout: left side with badge, title and checklist; right side with image and award badge
 */
const NosEngagements = () => {
  const ref = useRef(null);
  const visible = useInView(ref, { threshold: 0.15 });

  return (
    <section className="nos-engagements-section">
      <div ref={ref} className={`nos-engagements-container ${visible ? 'is-visible' : ''}`}>
        <div className="nos-engagements-content">
          <div className="engagements-badge">NOS ENGAGEMENTS</div>
          
          <h2 className="engagements-title">Nous croyons en une conciergerie plus humaine, responsable et élégante.</h2>
          
          <div className="engagements-checklist">
            <div className="checklist-item">
              <span className="check-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="currentColor"/>
                  <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="checklist-text">Collaboration avec des prestataires locaux</span>
            </div>

            <div className="checklist-item">
              <span className="check-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="currentColor"/>
                  <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="checklist-text">Entretien haut de gamme</span>
            </div>

            <div className="checklist-item">
              <span className="check-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="currentColor"/>
                  <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="checklist-text">Transparence et communication claire</span>
            </div>

            <div className="checklist-item">
              <span className="check-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="currentColor"/>
                  <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="checklist-text">Engagement pour la durabilité</span>
            </div>
          </div>
        </div>

        <div className="nos-engagements-image-wrapper">
          <img src="/nos enga.jpg" alt="B&C Conciergerie Côte d'Azur" className="nos-engagements-image" />
        </div>
      </div>
    </section>
  );
};

export default NosEngagements;
