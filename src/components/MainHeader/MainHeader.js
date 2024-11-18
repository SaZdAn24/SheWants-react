import React from 'react';
import { Link } from 'react-router-dom';  
import './MainHeader.css'; 

import logoIcon from '../../assets/favicon.png';
import searchIcon from '../../assets/poisk.png';

function MainHeader() {
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">
          <img src={logoIcon} alt="She Wants Gdansk" />
        </Link>
        <div className="brand-text">
          <span className="brand-name">She Wants Gdansk</span>
          <span className="specialization">Medycyna estetyczna</span>
        </div>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <a href="#about">O Nas</a>
            <ul className="submenu">
              <li><a href="#zespół">Zespół</a></li>
              <li><a href="#gabinet">Gabinet</a></li>
              <li><a href="#metamorfozy">Metamorfozy</a></li>
            </ul>
          </li>
          <li>
            <a href="#services">Usługi</a>
            <ul className="submenu">
              <li><a href="#laser">Depilacja laserowa</a></li>
              <li><a href="#skin-care">Pielęgnacja skóry</a></li>
            </ul>
          </li>
          <li>
            <a href="#oferta">Oferta</a>
            <ul className="submenu">
              <li><a href="#twarz">Twarz</a></li>
              <li><a href="#ciało">Ciało</a></li>
              <li><a href="#okolice-intymne">Okolice Intymne</a></li>
              <li><a href="#twój-problem">Twój problem</a></li>
            </ul>
          </li>
          <li><a href="#technology">Technology</a></li>
          <li>
          <li>
            <Link to="/cennik">Cennik</Link>
          </li>
            <ul className="submenu">
              <li><a href="#kosmetologia">Kosmetologia</a></li>
              <li><a href="#Aesthetic-medicine">Aesthetic medicine</a></li>
            </ul>
          </li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>
      <a href="#contact-form" className="book-button">Umów wizytę</a>
      <button id="toggle-search" className="search-icon">
        <img src={searchIcon} alt="Поиск" />
      </button>
      <div className="search-container" style={{ display: 'none' }}>
        <input type="text" id="search-input" placeholder="Введите запрос" />
        <button id="search-button">Поиск</button>
      </div>
      <div id="search-results" style={{ display: 'none' }}>
        <ul id="results-list"></ul>
      </div>
    </header>
  );
}

export default MainHeader;
