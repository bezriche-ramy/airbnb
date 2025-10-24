import React, { useState, useRef, useEffect } from 'react';
import './NosLogements.css';

/**
 * Nos Logements Section
 * Showcases 5 luxury property categories with dual photo display
 */
const NosLogements = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const properties = [
    {
      id: 1,
      category: 'Vue Mer',
      title: 'Appartements Vue Mer',
      description: 'Profitez d\'un panorama exceptionnel sur la Méditerranée dans nos appartements élégants. Situés en front de mer à Nice, Cannes et Monaco, ces biens offrent des prestations haut de gamme et des vues imprenables.',
  photo1: '/log11.jpg',
  photo2: '/log21.jpg',
      badgeColor: 'blue'
    },
    {
      id: 2,
      category: 'Prestige',
      title: 'Villas avec Piscine Privée',
      description: 'Des villas d\'exception nichées dans les hauteurs de la Côte d\'Azur, alliant intimité et luxe. Piscines à débordement, jardins paysagers et vues spectaculaires pour des séjours inoubliables.',
  photo1: '/log22.jpg',
  photo2: '/log12.jpg',
      badgeColor: 'gold'
    },
    {
      id: 3,
      category: 'Prestige',
      title: 'Penthouses de Prestige',
      description: 'Au sommet de résidences d\'exception, découvrez nos penthouses avec toits-terrasses privés. Espaces généreux, finitions luxueuses et vues panoramiques à 360° sur la mer et les montagnes.',
  photo1: '/log23.jpg',
  photo2: '/log13.jpg',
      badgeColor: 'gold'
    },
    {
      id: 4,
      category: 'Charme',
      title: 'Propriétés de Charme Provençales',
      description: 'Bastides et mas authentiques rénovés avec goût, préservant le charme de la pierre et des voûtes tout en offrant un confort moderne. Idéales pour une immersion dans l\'art de vivre provençal.',
  photo1: '/log14.jpg',
  photo2: '/log24.jpg',
      badgeColor: 'olive'
    },
    {
      id: 5,
      category: 'Centre-Ville',
      title: 'Studios et Appartements Centre-Ville',
      description: 'Au cœur des villes emblématiques de la Riviera, nos studios et appartements allient confort et emplacement privilégié. Proximité immédiate des commerces, restaurants étoilés et sites culturels.',
  photo1: '/log15.jpg',
  photo2: '/log25.jpg',
      badgeColor: 'olive'
    },
    {
      id: 6,
      category: 'Luxe',
      title: 'Propriété d\'Exception',
      description: 'Une sélection exclusive de biens d\'exception offrant des prestations incomparables et un cadre de vie privilégié sur la Côte d\'Azur.',
  photo1: '/log3.jpg',
  photo2: '/log3.jpg',
      badgeColor: 'gold'
    }
  ];

  return (
    <section className="nos-logements-section" ref={sectionRef}>
      <div className="nos-logements-container">
        {/* Section Header */}
        <div className="nos-logements-header">
          <span className="section-badge">NOS PROPRIÉTÉS</span>
          <h2 className="section-title">Nos Logements de Luxe Côte d'Azur</h2>
          <p className="section-intro">
            Du studio intimiste à la villa d'exception, nous gérons une sélection rigoureuse de propriétés de luxe et biens haut de gamme sur la Côte d'Azur, à Nice, Monaco et Cannes. Chaque bien immobilier bénéficie de notre expertise en gestion locative pour une valorisation optimale et des revenus locatifs maximisés via Airbnb et location courte durée.
          </p>
        </div>

        {/* Properties Grid */}
        <div className={`properties-grid ${inView ? 'in-view' : ''}`}>
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        {/* CTA Section removed per request */}
      </div>
    </section>
  );
};

/**
 * Individual Property Card Component
 */
const PropertyCard = ({ property, index }) => {
  const [activePhoto, setActivePhoto] = useState(1);
  const scrollContainerRef = useRef(null);
  const cardRef = useRef(null);

  // Handle horizontal scroll on mobile to change active photo
  const handleScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth;
    
    // Determine which photo is in view based on scroll position
    if (scrollLeft < cardWidth / 2) {
      setActivePhoto(1);
    } else {
      setActivePhoto(2);
    }
  };

  // Handle scroll end - if on last photo, scroll to next card
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollTimeout;
    const handleScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.offsetWidth;
        
        // If scrolled to the end (last photo) and trying to scroll more
        if (scrollLeft >= cardWidth * 0.95) {
          // Get the parent grid and find next card
          const parentGrid = cardRef.current?.parentElement;
          const nextCard = cardRef.current?.nextElementSibling;
          
          if (nextCard && parentGrid) {
            // Scroll parent grid to next card
            nextCard.scrollIntoView({ 
              behavior: 'smooth', 
              inline: 'start',
              block: 'nearest'
            });
          }
        }
      }, 150);
    };

    container.addEventListener('scroll', handleScrollEnd);
    return () => {
      container.removeEventListener('scroll', handleScrollEnd);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="property-card"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setActivePhoto(2)}
      onMouseLeave={() => setActivePhoto(1)}
    >
      {/* Photo Gallery */}
      <div className="property-photos" ref={scrollContainerRef} onScroll={handleScroll}>
        <div className="photo-wrapper">
          <img 
            src={property.photo1} 
            alt={`${property.title} location luxe Côte d'Azur - Gestion locative premium`}
            className={`property-photo ${activePhoto === 1 ? 'active' : ''}`}
            loading="lazy"
          />
          <img 
            src={property.photo2} 
            alt={`${property.title} location Airbnb Nice Monaco Cannes`}
            className={`property-photo ${activePhoto === 2 ? 'active' : ''}`}
            loading="lazy"
          />
        </div>
        
        {/* Category Badge removed per request */}

        {/* Photo Indicators */}
        <div className="photo-indicators">
          <span className={`indicator ${activePhoto === 1 ? 'active' : ''}`}></span>
          <span className={`indicator ${activePhoto === 2 ? 'active' : ''}`}></span>
        </div>
      </div>

      {/* Card Content - hidden on mobile */}
         <div className="property-content">
          
          {/* CTA removed per request - ultra-minimal card */}
         </div>
    </div>
  );
};

export default NosLogements;
