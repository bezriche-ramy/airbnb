import React, { useState } from 'react';
import './SearchBar.css';

/**
 * SearchBar Component
 * Search form with destination, arrival, departure, guests, and search button
 */
const SearchBar = () => {
  const [destination, setDestination] = useState('');
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', { destination, arrival, departure, guests });
    // Add search logic here
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <div className="search-fields">
        {/* Destination Field */}
        <div className="search-field">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            placeholder="Où souhaitez-vous aller ?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        {/* Arrival Date Field */}
        <div className="search-field">
          <label htmlFor="arrival">Arrivée</label>
          <input
            type="date"
            id="arrival"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          />
        </div>

        {/* arrow separator removed as requested */}

        {/* Departure Date Field */}
        <div className="search-field">
          <label htmlFor="departure">Départ</label>
          <input
            type="date"
            id="departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>

        {/* Guests Field */}
        <div className="search-field">
          <label htmlFor="guests">Voyageurs</label>
          <select
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            <option value="">Combien de voyageurs ?</option>
            <option value="1">1 voyageur</option>
            <option value="2">2 voyageurs</option>
            <option value="3">3 voyageurs</option>
            <option value="4">4 voyageurs</option>
            <option value="5">5 voyageurs</option>
            <option value="6">6 voyageurs</option>
            <option value="7">7 voyageurs</option>
            <option value="8">8 voyageurs</option>
            <option value="9">9 voyageurs</option>
            <option value="10+">10+ voyageurs</option>
          </select>
        </div>

        {/* Search Button */}
        <button type="submit" className="search-button">
          Rechercher
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
