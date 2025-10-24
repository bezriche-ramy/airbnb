import React, { useEffect, useRef, useState } from 'react';
import './ServicesSection.css';

/**
 * Services Section Component
 * Displays 4 service cards in a blog post style layout
 * Matches the Figma design specifications with exact dimensions
 */
const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Gestion Locative Complète Airbnb & Location Courte Durée',
      image: '/service1.jpg',
      category: 'GESTION',
      date: 'Service Premium',
      features: [
        'Création et gestion des annonces Airbnb optimisées',
        'Optimisation des tarifs et du calendrier pour maximiser vos revenus locatifs',
        'Sélection rigoureuse des locataires',
        'Reporting mensuel clair et précis de votre gestion de biens'
      ]
    },
    {
      id: 2,
      title: 'Entretien et Ménage Professionnel Conciergerie',
      image: '/service2.jpg',
      category: 'MAINTENANCE',
      date: 'Service Essentiel',
      features: [
        'Ménage professionnel et inspection entre chaque séjour',
        'Maintenance technique et suivi régulier de votre propriété',
        'Linge de maison et produits d\'accueil premium'
      ]
    },
    {
      id: 3,
      title: 'Accueil et Expérience Client Excellence',
      image: 'https://www.leguidedescommerciaux.com/wp-content/uploads/2025/04/Comment-bien-accueillir-un-client-pour-maximiser-limpact-.jpg',
      category: 'ACCUEIL',
      date: 'Service Excellence',
      features: [
        'Check-in/check-out personnalisés pour vos locations saisonnières',
        'Disponibilité 7j/7 pendant le séjour',
        'Recommandations locales sur la Côte d\'Azur et services à la carte'
      ]
    },
    {
      id: 4,
      title: 'Valorisation de Propriété de Luxe',
      image: 'https://studio.gaynako.com/wp-content/uploads/2023/04/photographe-professionnel.jpeg',
      category: 'VALORISATION',
      date: 'Service Premium',
      features: [
        'Conseils en aménagement et mise en scène de votre bien',
        'Photographie professionnelle pour location Airbnb',
        'Accompagnement pour maximiser le potentiel de votre propriété de luxe'
      ]
    }
  ];

  const gridRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!gridRef.current) return;
    const el = gridRef.current;
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <h2 className="services-main-title">
            Services de Conciergerie Côte d'Azur - Gestion Locative Professionnelle
          </h2>
          <p className="services-intro">
            Avec B&C Conciergerie Côte d'Azur, la location saisonnière et la gestion locative Airbnb deviennent simples, fluides et rentables.
            Nous prenons en charge toutes les étapes de gestion de votre propriété de luxe à Nice, Monaco et Cannes, 
            pour que votre bien soit toujours impeccable, vos voyageurs satisfaits et vos revenus locatifs optimisés.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div ref={gridRef} className={`services-grid ${inView ? 'in-view' : ''}`}>
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-image-wrapper">
                <img 
                  src={service.image} 
                  alt={`${service.title} - Conciergerie Côte d'Azur Nice Monaco`}
                  className="service-card-image"
                  loading="lazy"
                />
              </div>
              <div className="service-card-content">
                <div className="service-meta">
                  <span className="service-category">{service.category}</span>
                  <span className="service-date">{service.date}</span>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="service-feature-item">
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="feature-icon"
                      >
                        <path 
                          d="M13.3334 4L6.00002 11.3333L2.66669 8" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button - reuse existing global button styles */}
        <div className="services-actions">
          <button className="estimation-button">Demander une estimation gratuite</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
