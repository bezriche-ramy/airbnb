import React from 'react';
import './SkiFever.css';

const SkiFever = () => {
  return (
    <section className="ski-fever-section">
      <div className="ski-container">
        <div className="ski-content">
          <h2 className="ski-title">Ski fever</h2>
          <p className="ski-text">L'hiver peut sembler loin, mais la montagne appartient à ceux qui réservent tôt ! Dénichez votre chalet de rêve dès aujourd'hui, direction les sommets.</p>
          <button className="ski-cta">Explorez nos chalets</button>
        </div>

        <div className="ski-image-wrap">
          <img
            src="https://cdn.lecollectionist.com/__collectionist__/production/assets/images/homepage/ski-fever.webp?width=547&height=365&force_format=webp&q=50"
            alt="Ski fever"
            className="ski-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default SkiFever;
