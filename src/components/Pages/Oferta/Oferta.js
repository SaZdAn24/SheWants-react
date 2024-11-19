import React from "react";
import "./Oferta.css";

const Oferta = () => {
  const cards = [
    {
      image: "path-to-image-1.jpg",
      title: "АКЦИЯ ЛЕТО: МАССАЖ ПОДДАВЛИВАЮЩИЙ ICOONE LASER MED II С СКИДКОЙ ДО 50%",
    },
    {
      image: "path-to-image-2.jpg",
      title:
        "БЕЗБОЛЕЗНЕННАЯ ДЕПИЛЯЦИЯ ЛАЗЕРОМ И ГЛАДКОЕ ТЕЛО НА ДОЛГИЕ ГОДЫ ПО СНИЖЕННЫМ ЦЕНАМ",
    },
    {
      image: "path-to-image-3.jpg",
      title:
        "Эгзосомы ASCE+: продвинутая регенеративная терапия с анти-эйдж эффектом",
    },
    {
      image: "path-to-image-4.jpg",
      title: "АКЦИЯ ЛЕТО: ПОБЕДИТЕЛЬ ЦЕЛЛЮЛИТА STORZ D-ACTOR СО СКИДКОЙ ДО 50%",
    },
    {
      image: "path-to-image-5.jpg",
      title: "ПРОМОЦИЯ: УВЕЛИЧЕНИЕ ГУБ СО СКИДКОЙ 100 ЗЛ ДО КОНЦА МАЯ",
    },
  ];

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div className="card-image-wrapper">
            <img src={card.image} alt={card.title} className="card-image" />
          </div>
          <p className="card-title">{card.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Oferta;
