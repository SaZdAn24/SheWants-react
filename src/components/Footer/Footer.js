import React from 'react';
import './Footer.css'; 
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>{t('usefulLinks')}</h3>
          <ul>
            <li><a href="#regulamin-salonu">{t('salonRules')}</a></li>
            <li><a href="#regulamin-voucherow">{t('voucherRules')}</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>{t('financialInfo')}</h3>
          <p>{t('companyName')}</p>
          <p>{t('bankAccount')}</p>
          <p>35 1050 1533 1000 0092 9416 0800</p>
        </div>
        <div className="footer-section">
          <h3>{t('contactInfo')}</h3>
          <p>📞 +48 451 294 424</p>
          <p>📍 ul. Jaglana 6F, Gdańsk</p>
          <p>📧 <a href="mailto:shewants.gdansk@gmail.com">shewants.gdansk@gmail.com</a></p>
        </div>
      </div>
      <div className="footer-recaptcha">
        <p>{t('privacy')}</p>
      </div>
    </footer>
  );
};

export default Footer;
