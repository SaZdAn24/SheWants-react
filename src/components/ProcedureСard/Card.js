import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Card.css';

const Card = ({ title, description, imgSrc, altText, id }) => {
  const { t } = useTranslation();

  return (
    <div className="grid-item">
      <div className="overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`/procedure/${id}`} className="open-modal-btn">➔</Link>
        <a href="#contact" className="cta-button">{t('sign_up')}</a> {/* Используем t для перевода */}
      </div>
      <img src={imgSrc} alt={altText} />
    </div>
  );
};

export default Card;
