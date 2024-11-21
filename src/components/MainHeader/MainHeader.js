import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './MainHeader.css';

import logoIcon from '../../assets/favicon.png';
import searchIcon from '../../assets/poisk.png';

function MainHeader() {
  const { t } = useTranslation();
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">
          <img src={logoIcon} alt={t('logoAlt')} />
        </Link>
        <div className="brand-text">
          <span className="brand-name">{t('brandName')}</span>
          <span className="specialization">{t('specialization')}</span>
        </div>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </div>
      
      <nav>
        <ul className={menuOpen ? 'open' : 'hidden'}>
          <li><Link to="/">{t('menu.home')}</Link></li>
          <li>
            <a href="#about">{t('menu.about')}</a>
            <ul className="submenu">
              <li><Link to="/team">{t('menu.team')}</Link></li>
              <li><a href="#gabinet">{t('menu.office')}</a></li>
              <li><a href="#metamorfozy">{t('menu.metamorphoses')}</a></li>
            </ul>
          </li>
          <li>
            <a href="#services">{t('menu.services')}</a>
            <ul className="submenu">
              <li><a href="#laser">{t('menu.laserHairRemoval')}</a></li>
              <li><a href="#skin-care">{t('menu.skinCare')}</a></li>
            </ul>
          </li>
          <li>
            <Link to="/oferta">{t('menu.offer')}</Link>
            <ul className="submenu">
              <li><Link to="/twarz">{t('menu.face')}</Link></li>
              <li><Link to="/ciało">{t('menu.body')}</Link></li>
              <li><Link to="/okolice-intymne">{t('menu.intimateAreas')}</Link></li>
              <li><Link to="/twój-problem">{t('menu.yourProblem')}</Link></li>
            </ul>
          </li>
          <li><a href="#technology">{t('menu.technology')}</a></li>
          <li>
            <Link to="/cennik">{t('menu.prices')}</Link>
            <ul className="submenu">
              <li><a href="#kosmetologia">{t('menu.cosmetology')}</a></li>
              <li><a href="#Aesthetic-medicine">{t('menu.aestheticMedicine')}</a></li>
            </ul>
          </li>
          <li><Link to="/kontakt">{t('menu.contact')}</Link></li>
        </ul>
      </nav>

      <a href="#contact-form" className="book-button">{t('bookAppointment')}</a>

      <button id="toggle-search" className="search-icon" onClick={toggleSearch}>
        <img src={searchIcon} alt={t('searchAlt')} />
      </button>

      {searchVisible && (
        <div className="search-container">
          <input type="text" id="search-input" placeholder={t('searchPlaceholder')} />
          <button id="search-button">{t('searchButton')}</button>
        </div>
      )}
    </header>
  );
}

export default MainHeader;
