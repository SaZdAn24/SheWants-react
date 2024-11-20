import React from 'react';
import './Twarz.css'; 
import backgroundImage from '../../../assets/backgroundImage.jpg';  

const Twarz = () => {
  return (
    <div className="promo-page">
      <div className="promo-header">
        <div className="promo-header-content">
          <h1>PROMOCJA - ICOONE LASER MED</h1>
        </div>
      </div>
      
      <div className="promo-image">
        <img className="background-image"
          src={backgroundImage}
          alt="Promo Background"
        />
      </div>

      {/* Контент страницы */}
      <div className="promo-content">
        <h2>AKCJA LATO: masaż podciśnieniowy Icoone Laser Med z rabatem do nawet 50%</h2>
        <p>
          Masaż podciśnieniowy z multi mikrostymulacją osiągamy za pomocą zestawu mikrorolek obecnych na powierzchni głowic zabiegowych.
          Rolki obracają się tam i z powrotem, przeżywając kilkusetne stymulacje skóry w ciągu 1 minuty. Działanie stymulujące odbywa się na 3 poziomach jednocześnie:
          ...
        </p>

        <h3>Wskazania do zabiegu:</h3>
        <ul>
          <li>Zabieg skierowany jest do wszystkich kobiet i mężczyzn...</li>
          <li>Zmniejszenie cellulitu...</li>
          <li>Ujędrnienie skóry...</li>
          <li>...</li>
        </ul>
        <p>Poznaj cennik i sprawdź jak wiele możesz zyskać dzięki naszym usługom!</p>
      </div>
    </div>
  );
};

export default Twarz;
