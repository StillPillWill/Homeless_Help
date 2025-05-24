// src/Card.js
import React from 'react';
import './Card.css'; // We'll add some basic styling for the card

function Card({ title, description, imageUrl }) { // Destructure props here
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;