// components/Pages/Oferta/Oferta.js
import React from "react";
import { Link } from "react-router-dom"; // Используйте Link для маршрутизации
import "./Oferta.css";

import massaz from "../../../assets/promo/massaz.jpg";
import depilacija_promo from "../../../assets/promo/depilacija_promo.jpg";
import PRX_T from "../../../assets/promo/PRX_T.jpg";
import Rf from "../../../assets/promo/Rf.jpg";
import dmk from "../../../assets/promo/dmk.jpg";

const Oferta = () => {
  const cards = [
    {
      image: massaz,
      title: "АКЦИЯ ЛЕТО: МАССАЖ ПОДДАВЛИВАЮЩИЙ ICOONE LASER MED II С СКИДКОЙ ДО 50%",
      link: "/massaz",
    },
    {
      image: depilacija_promo,
      title: "БЕЗБОЛЕЗНЕННАЯ ДЕПИЛЯЦИЯ ЛАЗЕРОМ И ГЛАДКОЕ ТЕЛО НА ДОЛГИЕ ГОДЫ ПО СНИЖЕННЫМ ЦЕНАМ",
      link: "/depilacija",
    },
    {
      image: PRX_T,
      title: "Эгзосомы ASCE+: продвинутая регенеративная терапия с анти-эйдж эффектом",
      link: "/prx_t",
    },
    {
      image: Rf,
      title: "АКЦИЯ ЛЕТО: ПОБЕДИТЕЛЬ ЦЕЛЛЮЛИТА STORZ D-ACTOR СО СКИДКОЙ ДО 50%",
      link: "/rf",
    },
    {
      image: dmk,
      title: "ПРОМОЦИЯ: УВЕЛИЧЕНИЕ ГУБ СО СКИДКОЙ 100 ЗЛ ДО КОНЦА МАЯ",
      link: "/dmk",
    },
  ];

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <Link to={card.link} className="card-image-wrapper">
            <img src={card.image} alt={card.title} className="card-image" />
          </Link>
          <p className="card-title">{card.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Oferta;
