import React from 'react';
import { useParams } from 'react-router-dom';
import procedures from './proceduresData';

const ProcedureDetails = () => {
  const { id } = useParams();
  const category = Object.values(procedures).find((cat) =>
    cat.some((proc) => proc.id === id)
  );
  const procedure = category?.find((proc) => proc.id === id);

  if (!procedure) {
    return <h2>Процедура не найдена</h2>;
  }

  return (
    <div>
      <h1>{procedure.title}</h1>
      <img src={procedure.imgSrc} alt={procedure.title} />
      <p>{procedure.description}</p>
      <p><strong>Цель:</strong> {procedure.goal}</p>
      <p><strong>Эффект:</strong> {procedure.effect}</p>
      {/* Добавление изображений "до и после" */}
      <div>
        <h3>До и после:</h3>
        <img src={procedure.imgSrc} alt={procedure.title} />
        <img src="/images/after-default.jpg" alt="After" />
      </div>
      <p><strong>Стоимость:</strong> {procedure.price}</p>
      <p><strong>Длительность:</strong> {procedure.duration}</p>
      <a href="#contact" className="cta-button">Записаться</a>
    </div>
  );
};

export default ProcedureDetails;
