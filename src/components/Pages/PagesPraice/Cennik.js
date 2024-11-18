import React, { useState } from "react";
import './Cennik.css';

const Cennik = [
    {
        category: "KWAS POLIMLEKOWY PLLA",
        description: "Полимолочная кислота используется для стимуляции выработки коллагена и уплотнения кожи.",
        subcategories: [
          { name: "Twarz", price: "1000 zł" },
          { name: "Policzki", price: "500 zł" },
          { name: "Nos", price: "450 zł" },
          { name: "Dłonie", price: "500 zł" },
          { name: "Twarz + szyja", price: "1500 zł" },
        ],
      },
  {
    category: "HYDROKSYAPATYT WAPNIA",
    subcategories: [
        { name: "Twarz", price: "1000 zł" },
        { name: "Policzki", price: "500 zł" },
        { name: "Nos", price: "450 zł" },
        { name: "Dłonie", price: "500 zł" },
        { name: "Twarz + szyja", price: "1500 zł" },
    ],
  },
  {
    category: "IPL - USUWANIE PRZEBARWIEŃ I RUMIENIA",
    subcategories: [
      { name: "Twarz", price: "1000 zł" },
      { name: "Policzki", price: "500 zł" },
      { name: "Nos", price: "450 zł" },
      { name: "Dłonie", price: "500 zł" },
      { name: "Twarz + szyja", price: "1500 zł" },
    ],
  },
  {
    category: "OSOCZE BOGATOPŁYTKOWE PRP",
    subcategories: [   
        { name: "Twarz", price: "1000 zł" },
        { name: "Policzki", price: "500 zł" },
        { name: "Nos", price: "450 zł" },
        { name: "Dłonie", price: "500 zł" },
        { name: "Twarz + szyja", price: "1500 zł" },
    ],
  },
  {
    category: "MEDYCYNA REGENERACYJNA - STYMULATORY TKANKOWE",
    subcategories: [
        { name: "Twarz", price: "1000 zł" },
        { name: "Policzki", price: "500 zł" },
        { name: "Nos", price: "450 zł" },
        { name: "Dłonie", price: "500 zł" },
        { name: "Twarz + szyja", price: "1500 zł" },
    ],
  },
  {
    category: "MEZOTERAPIA IGŁOWA",
    subcategories: [
        { name: "Twarz", price: "1000 zł" },
        { name: "Policzki", price: "500 zł" },
        { name: "Nos", price: "450 zł" },
        { name: "Dłonie", price: "500 zł" },
        { name: "Twarz + szyja", price: "1500 zł" },
    ],
  },
  {
    category: "STYMULACJA SKÓRY OKOLICY OKA",
    subcategories: [
        { name: "Twarz", price: "1000 zł" },
        { name: "Policzki", price: "500 zł" },
        { name: "Nos", price: "450 zł" },
        { name: "Dłonie", price: "500 zł" },
        { name: "Twarz + szyja", price: "1500 zł" },
    ],
  },
  {
    category: "TROPOKOLAGEN",
    subcategories: [
        { name: "Twarz", price: "1000 zł" },
        { name: "Policzki", price: "500 zł" },
        { name: "Nos", price: "450 zł" },
        { name: "Dłonie", price: "500 zł" },
        { name: "Twarz + szyja", price: "1500 zł" },
    ],
  },
];

const ProcedureList = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="container">
      {Cennik.map((procedure, index) => (
        <div key={index} className="procedure-block">
          {/* Категория */}
          <div
            className={`category ${openCategory === index ? "open" : ""}`}
            onClick={() => toggleCategory(index)}
          >
            <span>{procedure.category}</span>
            <span>{openCategory === index ? "-" : "+"}</span>
          </div>

          {/* Описание категории */}
          {openCategory === index && (
            <div className="category-description">
              <p>{procedure.description}</p>
            </div>
          )}

          {/* Подкатегории */}
          {openCategory === index && procedure.subcategories.length > 0 && (
            <div className="subcategory">
              {procedure.subcategories.map((sub, subIndex) => (
                <div key={subIndex} className="subcategory-item">
                  <span>{sub.name}</span>
                  <span>{sub.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export { Cennik };
export default ProcedureList;