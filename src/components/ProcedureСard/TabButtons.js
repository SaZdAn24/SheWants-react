import React from 'react';
import './TabButtons.css';

const TabButtons = ({ activeTab, onTabClick }) => {
  return (
    <div className="button-container">
      <button
        className={`tab-button ${activeTab === 'depilacja' ? 'active' : ''}`}
        onClick={() => onTabClick('depilacja')}
      >
        Depilacja
      </button>
      <button
        className={`tab-button ${activeTab === 'masaż' ? 'active' : ''}`}
        onClick={() => onTabClick('masaż')}
      >
        Masaż
      </button>
      <button
        className={`tab-button ${activeTab === 'medycyna' ? 'active' : ''}`}
        onClick={() => onTabClick('medycyna')}
      >
        Kosmetologia medyczna
      </button>
    </div>
  );
};

export default TabButtons;
