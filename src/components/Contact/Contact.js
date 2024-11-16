import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Подключите ваши стили

const Contact = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (event) => {
    event.preventDefault();

    // Отправка формы через EmailJS
    emailjs
      .sendForm(
        'service_rs819hh', // ID сервиса
        'template_hs6z0rd', // ID шаблона
        event.target, // Данные формы
        'tFJhhvUUdCaq7C1S-' // Ваш User ID
      )
      .then(
        () => {
          setIsModalVisible(true); // Показать модальное окно
        },
        (error) => {
          console.error('Ошибка: ', error);
          setErrorMessage('Ошибка при отправке формы. Попробуйте снова.');
        }
      );

    // Очистка формы после отправки
    event.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Контакты</h2>

        <div className="contact-details">
          <p>
            <strong>Адрес:</strong> ul. Grunwaldzka 99, Gdańsk
          </p>
          <p>
            <strong>Телефон:</strong>{' '}
            <a href="tel:+48555555555">+48 555 555 555</a>
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@shewants.pl">info@shewants.pl</a>
          </p>
        </div>

        <form id="contact-form" className="contact-form" onSubmit={sendEmail}>
          <h3>Онлайн-запись</h3>
          <input
            type="text"
            name="from_name"
            placeholder="Ваше имя"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш email"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Ваш телефон"
            required
          />
          <textarea
            name="message"
            placeholder="Ваше сообщение"
            required
          />
          <button type="submit">Записаться</button>
        </form>

        {isModalVisible && (
          <div id="confirmation-modal" className="modal">
            <div className="modal-content">
              <p>Ваше сообщение успешно отправлено!</p>
              <button onClick={() => setIsModalVisible(false)}>Закрыть</button>
            </div>
          </div>
        )}

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;
