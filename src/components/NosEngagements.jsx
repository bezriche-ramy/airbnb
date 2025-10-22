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
          <div className="award-badge">
            <div className="award-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="award-text">
              <div className="award-title">Award Winner</div>
              <div className="award-subtitle">Best Travel Agency 2024</div>
            </div>
          </div>

          <img src="/nos enga.jpg" alt="B&C Conciergerie Côte d'Azur" className="nos-engagements-image" />
        </div>
      </div>
    </section>
  );
};

export default NosEngagements;
