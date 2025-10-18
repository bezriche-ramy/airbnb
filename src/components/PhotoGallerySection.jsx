import React, { useState, useEffect, useRef } from 'react';
import './PhotoGallerySection.css';

/**
 * PhotoGallerySection Component
 * Displays a gallery of luxury chalets with category navigation
 */
const PhotoGallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('Chalets d\'hiver');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
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

  const categories = [
    'Chalets d\'hiver',
    'En famille',
    'Saison de Noël',
    'Nos nouveautés'
  ];

  const galleries = {
    'Chalets d\'hiver': [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80',
        title: 'Chalet Mont Tremblant',
        location: 'Méribel'
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
        title: 'Chalet Lume',
        location: 'Courchevel 1650 Moriond'
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
        title: 'Chalet Bruxellois',
        location: 'Courchevel 1850'
      }
    ],
    'En famille': [
      {
        id: 4,
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
        title: 'Villa Familiale Alpina',
        location: 'Val d\'Isère'
      },
      {
        id: 5,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
        title: 'Chalet Grande Famille',
        location: 'Les Arcs'
      },
      {
        id: 6,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
        title: 'Résidence Les Enfants',
        location: 'La Plagne'
      }
    ],
    'Saison de Noël': [
      {
        id: 7,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
        title: 'Chalet Festif',
        location: 'Megève'
      },
      {
        id: 8,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        title: 'Villa de Noël',
        location: 'Chamonix'
      },
      {
        id: 9,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
        title: 'Chalet des Fêtes',
        location: 'Tignes'
      }
    ],
    'Nos nouveautés': [
      {
        id: 10,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        title: 'Nouveau Chalet Moderne',
        location: 'Verbier'
      },
      {
        id: 11,
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
        title: 'Villa Contemporaine',
        location: 'Zermatt'
      },
      {
        id: 12,
        image: 'https://thvnext.bing.com/th/id/OIP.a1oUhFj6Kc07HyhBg8bejQHaDq?w=317&h=173&c=7&r=0&o=7&cb=12&pid=1.7&rm=3',
        title: 'Chalet Design',
        location: 'St. Moritz'
      }
    ]
  };

  const currentGallery = galleries[activeCategory];

  return (
    <section 
      ref={sectionRef}
      className={`photo-gallery-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="gallery-container">
        {/* Main Heading */}
        <h2 className="gallery-heading animate-fade-in">Les Collections</h2>

        {/* Category Navigation */}
        <nav className="category-nav animate-fade-in">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {category}
              <span className="underline"></span>
            </button>
          ))}
        </nav>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {currentGallery.map((item, index) => (
            <div 
              key={item.id} 
              className="gallery-item animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <span className="view-text">Voir plus</span>
                </div>
              </div>
              <h3 className="gallery-title">{item.title}</h3>
              <p className="gallery-location">{item.location}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="gallery-cta animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <button className="discover-button">
            Découvrez le luxe de nos villas
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
