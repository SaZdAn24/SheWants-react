import React from 'react';
import './Card.css';

const Card = ({ title, description, imgSrc, altText }) => {
  return (
    <div className="grid-item">
      <div className="overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="open-modal-btn">➔</span>
        <a href="#contact" className="cta-button">Zapisać się</a>
      </div>
      <img src={imgSrc} alt={altText} />
    </div>
  );
};

export default Card;
