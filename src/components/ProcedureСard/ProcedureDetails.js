import React from 'react';
import { useParams } from 'react-router-dom';
import procedures from './proceduresData';
import './ProcedureDetails.css';

const ProcedureDetails = () => {
  const { id } = useParams();
  const category = Object.values(procedures).find((cat) =>
    cat.some((proc) => proc.id === id)
  );
  const procedure = category?.find((proc) => proc.id === id);

  if (!procedure) {
    return <h2 className="error-message">Процедура не найдена</h2>;
  }

  return (
    <div className="procedure-details-container">
      <h1 className="procedure-title">{procedure.title}</h1>
      <div className="procedure-main-info">
        <img src={procedure.imgSrc} alt={procedure.title} className="procedure-image" />
        <div className="procedure-description">
          <p>{procedure.description}</p>
          <p><strong>Цель:</strong> {procedure.goal}</p>
          <p><strong>Эффект:</strong> {procedure.effect}</p>
        </div>
      </div>
      <div className="before-after-section">
        <h3>До и после:</h3>
        <div className="before-after-images">
          <img src={procedure.ImgBefor} alt={`${procedure.title} - до`} className="before-image" />
        </div>
      </div>
      <div className="procedure-meta">
        <p><strong>Стоимость:</strong> {procedure.price}</p>
        <p><strong>Длительность:</strong> {procedure.duration}</p>
      </div>
      <a href="#contact" className="cta-button">Записаться</a>
    </div>
  );
};

export default ProcedureDetails;
