import React from 'react';
import './SuggestionBar.css';
import { FaGlobeAmericas } from 'react-icons/fa';

/**
 * SuggestionBar Component
 * Displays an inspiration prompt for users who don't know where to go
 */
const SuggestionBar = () => {
  const handleInspiration = () => {
    console.log('Get inspiration clicked');
    // Add inspiration logic here
  };

  return (
    <div className="suggestion-bar">
      <button className="suggestion-button" onClick={handleInspiration}>
        <FaGlobeAmericas className="globe-icon" />
        <span>Vous ne savez pas où partir ?</span>
        <span className="suggestion-link">S'inspirer</span>
      </button>
    </div>
  );
};

export default SuggestionBar;
