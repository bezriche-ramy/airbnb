import React, { useState, useEffect, useRef } from 'react';
import './IconicCollectionCarousel.css';

const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const offers = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',
    title: "Chalet Jango, Courchevel 1550",
    desc: "Avec ses lignes modernes et sa façade en bois bicolore, le chalet Sisimut se démarque déjà de ses voisins plus traditionnels. Mais c'est lorsqu'on passe les portes en verre fumé que l'on découvre sa vraie singularité..."
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80',
    title: "Domaine de l'Orme, Méribel",
    desc: "Chalet extraordinaire à Méribel, le Domaine de l'Orme concentre le meilleur des Alpes françaises. Derrière sa façade en bois traditionnelle et son architecture savoyarde typique de la région..."
  },
  {
    id: 3,
  image: 'https://www.bing.com/th/id/OIP.YDH9iUgVp_rt87kkiL5WEAHaFj?w=160&h=128&c=8&rs=1&qlt=90&o=6&cb=12&pid=3.1&rm=2',
    title: "Villa Ottavia, Florence",
    desc: "Nichée au creux des collines toscanes près de Florence, la Villa Ottavia offre un charme intemporel de la région. Entourée d'une nature méditerranéenne, cette demeure conjugue avec harmonie tradition rustique..."
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
    title: "Villa Azure, Côte d'Azur",
    desc: "Perchée sur les hauteurs de Saint-Tropez, la Villa Azure offre une vue panoramique sur la Méditerranée. Cette propriété d'exception allie design contemporain et luxe méditerranéen pour une expérience inoubliable..."
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
    title: "Chalet Blanc, Megève",
    desc: "Au coeur de Megève, ce chalet authentique réinvente le luxe alpin. Avec son spa privatif, sa cave à vin et ses suites majestueuses, le Chalet Blanc promet une escapade hivernale d'exception dans les Alpes françaises..."
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?w=1200&q=80',
    title: "Mas Provençal, Gordes",
    desc: "Authentique mas en pierre du 18ème siècle, cette propriété a été entièrement rénovée tout en préservant son caractère d'origine. Piscine à débordement, oliveraie centenaire et vue sur le Luberon..."
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
    title: "Villa Moderna, Ibiza",
    desc: "Architecture contemporaine épurée et vues spectaculaires sur la mer Méditerranée. Cette villa ultra-moderne dispose d'une infinity pool, d'un cinéma privé et d'un accès direct à une plage privée..."
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&q=80',
    title: "Château de Lumière, Bordeaux",
    desc: "Propriété viticole d'exception au coeur du Médoc. Ce château du 19ème siècle entouré de vignobles propose une immersion totale dans l'art de vivre à la française, entre dégustation et raffinement..."
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    title: "Penthouse Étoile, Paris",
    desc: "Au dernier étage d'un immeuble haussmannien rénové, ce penthouse exceptionnel offre une terrasse panoramique avec vue sur la Tour Eiffel. Design intérieur signé par un architecte de renom, prestations haut de gamme..."
  }
];

const IconicCollectionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const sectionRef = useRef(null);

  // Calculate maxIndex based on cards per view
  const maxIndex = offers.length - cardsPerView;

  const handleNext = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  };

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(3); // Desktop: 3 cards
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);

    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Reset currentIndex when cardsPerView changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [cardsPerView]);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
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

  return (
    <section 
      ref={sectionRef}
      className={`iconic-collection-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="iconic-container">
        <div className="iconic-header">
          <h2 className="iconic-title">La Collection Iconique</h2>
          <p className="iconic-intro">
            Dans notre Collection Iconique, nous regroupons nos maisons emblématiques, celles pour 
            lesquelles nous avons eu un immense coup de coeur et que nous vous proposons pour la 
            plupart en exclusivité. Toutes les maisons de notre Collection Iconique sont accompagnées de 
            notre Conciergerie Club, pour vous offrir le plus haut niveau de l'expérience sur-mesure Le 
            Collectionist.
          </p>
        </div>

        <div className="carousel-container">
          <button 
            className="carousel-arrow" 
            onClick={handlePrev}
            aria-label="Précédent"
          >
            <ChevronLeftIcon />
          </button>

          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{ 
                transform: `translateX(calc(-${currentIndex} * (100% / ${cardsPerView} + ${cardsPerView === 1 ? '1rem' : cardsPerView === 2 ? '1.5rem / 2' : '2rem / 3'})))`
              }}
            >
              {offers.map((offer, idx) => (
                <div
                  key={offer.id}
                  className="carousel-card"
                  style={{ animationDelay: `${(idx % cardsPerView) * 0.1}s` }}
                >
                  <div className="card-image-wrapper">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="card-image"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="card-title">{offer.title}</h3>
                  <p className="card-desc">{offer.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-arrow" 
            onClick={handleNext}
            aria-label="Suivant"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IconicCollectionCarousel;
