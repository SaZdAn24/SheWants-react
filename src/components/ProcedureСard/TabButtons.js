import React from 'react';
import { useTranslation } from 'react-i18next';  
import './TabButtons.css';

const TabButtons = ({ activeTab, onTabClick }) => {
  const { t } = useTranslation(); 

  return (
    <div className="button-container">
      <button
        className={`tab-button ${activeTab === 'depilacja' ? 'active' : ''}`}
        onClick={() => onTabClick('depilacja')}
      >
        {t('depilation')}
      </button>
      <button
        className={`tab-button ${activeTab === 'masaż' ? 'active' : ''}`}
        onClick={() => onTabClick('masaż')}
      >
        {t('massage')} 
      </button>
      <button
        className={`tab-button ${activeTab === 'medycyna' ? 'active' : ''}`}
        onClick={() => onTabClick('medycyna')}
      >
        {t('medical_cosmetology')}
      </button>
    </div>
  );
};

export default TabButtons;
