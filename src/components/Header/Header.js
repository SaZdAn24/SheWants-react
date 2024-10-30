import React from 'react';
import styles from './Header.module.scss';
import instagramIcon from '../../assets/instagram.png';
import FacebookIcon from '../../assets/facebook.png';
import EmailIcon from '../../assets/email.png';
import PhoneIcon from '../../assets/iphone.png';
import BooksyIcon from '../../assets/booksy.png';




function Header() {
  return (
    <header className={styles.header}>

      {/* Шапка с иконками и переключением языка */}

      <div className={styles["top-bar"]}> 
        <div className={styles["social-contact"]}> 
          <a href="https://www.instagram.com/she.wants.gdansk/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className={styles.icon} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" className={styles.icon} />
          </a>
          <a href="mailto:info@shewants.pl">
            <img src={EmailIcon} alt="Email" className={styles.icon} />
          </a>
          <a href="tel:+48555555555">
            <img src={PhoneIcon} alt="Phone" className={styles.icon} />
          </a>
          <a href="https://booksy.com/pl-pl/171284_she-wants-kosmetologia-manicure-depilacja-laserowa_salon-kosmetyczny_20383_gdansk" target="_blank" rel="noopener noreferrer">
            <img src={BooksyIcon} alt="Booksy" className={styles.icon} />
          </a>
        </div>
        <div className={styles["language-switch"]}> 
          <a href="/" onClick={(e) => e.preventDefault()} className={styles.lang}>PL</a>
          <span> | </span>
          <a href="/" onClick={(e) => e.preventDefault()} className={styles.lang}>EN</a>
          <span> | </span>
          <a href="/" onClick={(e) => e.preventDefault()} className={styles.lang}>RU</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
