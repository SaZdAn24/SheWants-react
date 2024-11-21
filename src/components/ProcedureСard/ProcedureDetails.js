import React from 'react';
import { useParams } from 'react-router-dom';
import procedures from './proceduresData';
import './ProcedureDetails.css';
import { useTranslation } from 'react-i18next';

const ProcedureDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const category = Object.values(procedures).find((cat) =>
    cat.some((proc) => proc.id === id)
  );
  const procedure = category?.find((proc) => proc.id === id);

  if (!procedure) {
    return <h2 className="error-message">{t('procedure_not_found')}</h2>;
  }

  return (
    <div className="procedure-details-container">
      <h1 className="procedure-title">{t(procedure.id + '-title')}</h1>
      <div className="procedure-main-info">
        <img src={procedure.imgSrc} alt={procedure.title} className="procedure-image" />
        <div className="procedure-description">
          <p>{t(procedure.id + '-description')}</p>
          <p><strong>{t('goal')}:</strong> {t(procedure.id + '-goal')}</p>
          <p><strong>{t('effect')}:</strong> {t(procedure.id + '-effect')}</p>
        </div>
      </div>
      <div className="before-after-section">
        <h3>{t('before_and_after')}:</h3>
        <div className="before-after-images">
          <img src={procedure.ImgBefor} alt={`${procedure.title} - ${t('before')}`} className="before-image" />
        </div>
      </div>
      <div className="procedure-meta">
        <p><strong>{t('cost')}:</strong> {procedure.price}</p>
        <p><strong>{t('duration')}:</strong> {procedure.duration}</p>
      </div>
      <a href="#contact" className="cta-button">{t('sign_up')}</a>
    </div>
  );
};


export default ProcedureDetails;