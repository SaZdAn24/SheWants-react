import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ title, description, imgSrc, altText, id }) => {
  return (
    <div className="grid-item">
      <div className="overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`/procedure/${id}`} className="open-modal-btn">➔</Link>
        <a href="#contact" className="cta-button">Zapisać się</a>
      </div>
      <img src={imgSrc} alt={altText} />
    </div>
  );
};

export default Card;
