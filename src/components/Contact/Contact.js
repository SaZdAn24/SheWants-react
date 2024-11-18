import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; 

const Contact = () => {
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
          console.error('Błąd: ', error);
          setErrorMessage('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.');
        }
      );

    event.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Kontakt</h2>

        <div className="contact-details">
          <p>
            <strong>Adres:</strong> ul. Jaglana 6F, Gdańsk
          </p>
          <p>
            <strong>Telefon:</strong>{' '}
            <a href="tel:+48451294424">+48 451 294 424</a>
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="shewants.gdansk@gmail.com">shewants.gdansk@gmail.com</a>
          </p>
        </div>

        <form id="contact-form" className="contact-form" onSubmit={sendEmail}>
          <h3>Rezerwacja online</h3>
          <input
            type="text"
            name="from_name"
            placeholder="Twoje imię"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Twój email"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Twój numer telefonu"
            required
          />
          <textarea
            name="message"
            placeholder="Twoja wiadomość"
            required
          />
          <button type="submit">Zarezerwuj</button>
        </form>

        {isModalVisible && (
          <div id="confirmation-modal" className="modal">
            <div className="modal-content">
              <p>Twoja wiadomość została wysłana pomyślnie!</p>
              <button onClick={() => setIsModalVisible(false)}>Zamknij</button>
            </div>
          </div>
        )}

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;
