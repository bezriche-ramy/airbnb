import React, { useRef } from 'react';
import './NosEngagements.css';
import useInView from '../hooks/useInView';

/**
 * NosEngagements
 * A clean, non-card section listing the company's commitments.
 * Layout: left column - intro text; right column - four compact rows with subtle accent bars.
 */
const NosEngagements = () => {
  const ref = useRef(null);
  const visible = useInView(ref, { threshold: 0.12 });

  return (
    <section className="engagements-section">
      <div ref={ref} className={`engagements-container ${visible ? 'is-visible' : ''}`}>
        <div className="engagements-left">
          <h2 className="engagements-title">Nos engagements</h2>
          <p className="engagements-lead">
            Nous croyons en une conciergerie plus humaine, responsable et élégante.
          </p>
        </div>

        <div className="engagements-right">
          <ul className="engagements-list">
            <li className="engagement-item">
              <div className="engagement-accent" aria-hidden></div>
              <div className="engagement-body">
                <strong className="engagement-heading">Collaboration avec des prestataires locaux</strong>
                <span className="engagement-text">Soutien des talents et services de la région pour une qualité authentique.</span>
              </div>
            </li>

            <li className="engagement-item">
              <div className="engagement-accent" aria-hidden></div>
              <div className="engagement-body">
                <strong className="engagement-heading">Entretien haut de gamme</strong>
                <span className="engagement-text">Standards soignés et protocoles premium pour chaque propriété.</span>
              </div>
            </li>

            <li className="engagement-item">
              <div className="engagement-accent" aria-hidden></div>
              <div className="engagement-body">
                <strong className="engagement-heading">Transparence et communication claire</strong>
                <span className="engagement-text">Rapports réguliers et contact humain à chaque étape.</span>
              </div>
            </li>

            <li className="engagement-item">
              <div className="engagement-accent" aria-hidden></div>
              <div className="engagement-body">
                <strong className="engagement-heading">Engagement pour la durabilité</strong>
                <span className="engagement-text">Pratiques responsables pour préserver votre bien et l'environnement.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NosEngagements;
