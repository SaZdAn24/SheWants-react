import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>PRZYDATNE LINKI PORTALU</h3>
          <ul>
            <li><a href="#regulamin-salonu">Regulamin salonu</a></li>
            <li><a href="#regulamin-voucherow">Regulamin voucherów</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>INFORMACJE FINANSOWE</h3>
          <p>Face & Body Concept</p>
          <p>Numer konta do przelewów:</p>
          <p>35 1050 1533 1000 0092 9416 0800</p>
        </div>
        <div className="footer-section">
          <h3>INFORMACJE KONTAKTOWE</h3>
          <p>📞 +48 451 294 424</p>
          <p>📍 ul. Jaglana 6F, Gdańsk</p>
          <p>📧 <a href="shewants.gdansk@gmail.com">shewants.gdansk@gmail.com</a></p>
        </div>
      </div>
      <div className="footer-recaptcha">
        <p>Конфиденциальность - Условия использования</p>
      </div>
    </footer>
  );
};

export default Footer;
