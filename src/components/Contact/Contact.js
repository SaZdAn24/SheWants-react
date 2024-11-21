import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_rs819hh', 
        'template_hs6z0rd',
        event.target, 
        'tFJhhvUUdCaq7C1S-' 
      )
      .then(
        () => {
          setIsModalVisible(true); 
        },
        (error) => {
          console.error('Error: ', error);
          setErrorMessage(t('errorSending'));
        }
      );

    event.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <h2>{t('contact')}</h2>

      <div className="contact-details">
        <p><strong>{t('address')}:</strong> ul. Jaglana 6F, Gdańsk</p>
        <p><strong>{t('phone')}:</strong> <a href="tel:+48451294424">+48 451 294 424</a></p>
        <p><strong>{t('email')}:</strong> <a href="mailto:shewants.gdansk@gmail.com">shewants.gdansk@gmail.com</a></p>
      </div>

      <form id="contact-form" className="contact-form" onSubmit={sendEmail}>
        <h3>{t('onlineReservation')}</h3>
        <input type="text" name="from_name" placeholder={t('yourName')} required />
        <input type="email" name="email" placeholder={t('yourEmail')} required />
        <input type="tel" name="phone" placeholder={t('yourPhone')} required />
        <textarea name="message" placeholder={t('yourMessage')} required />
        <button type="submit">{t('submit')}</button>
      </form>

      {isModalVisible && (
        <div id="confirmation-modal" className="modal">
          <div className="modal-content">
            <p>{t('successMessage')}</p>
            <button onClick={() => setIsModalVisible(false)}>{t('close')}</button>
          </div>
        </div>
      )}

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </section>
  );
};

export default Contact;
