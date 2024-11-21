import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';  
import Card from './Card';
import TabButtons from './TabButtons';
import './Tabs.css';

import laserImage from "../../assets/laser.jpg"
import depilacjaWoskiem from "../../assets/lasergolova.jpg"
import depilacjaCukrowa from "../../assets/lasernogi.jpg"

import masażKlasyczny from "../../assets/massaz body.jpg"
import masażTajski from "../../assets/massaz face.jpg"
import masażLimfatyczny from "../../assets/massaz face.jpg"

import botox from "../../assets/botox.jpg"
import kwasHialuronowy from "../../assets/Kwas_Hialuronowy.jpg"
import mezoterapia from "../../assets/mezo.jpg"
import lifting from "../../assets/lifting.jpg"

export const contentData = {
  depilacja: [
    {
      id: 'depilacja-laserowa',
      title: 'depilacja_laserowa', 
      description: 'depilacja_laserowa_description',
      imgSrc: laserImage,
      altText: 'depilacja_laserowa'
    },
    {
      id: 'depilacja-woskiem',
      title: 'depilacja_woskiem',
      description: 'depilacja_woskiem_description',
      imgSrc: depilacjaCukrowa,
      altText: 'depilacja_woskiem'
    },
    {
      id: 'depilacja-cukrowa',
      title: 'depilacja_cukrowa',
      description: 'depilacja_cukrowa_description',
      imgSrc: depilacjaWoskiem,
      altText: 'depilacja_cukrowa'
    },
    {
      id: 'depilacja-kremem',
      title: 'depilacja_kremem',
      description: 'depilacja_kremem_description',
      imgSrc: laserImage,
      altText: 'depilacja_kremem'
    }
  ],
  masaż: [
    {
      id: 'masaz-klasyczny',
      title: 'masaz_klasyczny',
      description: 'masaz_klasyczny_description',
      imgSrc: masażKlasyczny,
      altText: 'masaz_klasyczny'
    },
    {
      id: 'masaz-tajski',
      title: 'masaz_tajski',
      description: 'masaz_tajski_description',
      imgSrc: masażLimfatyczny,
      altText: 'masaz_tajski'
    },
    {
      id: 'masaz-limfatyczny',
      title: 'masaz_limfatyczny',
      description: 'masaz_limfatyczny_description',
      imgSrc: masażTajski,
      altText: 'masaz_limfatyczny'
    },
    {
      id: 'masaz-antycellulitowy',
      title: 'masaz_antycellulitowy',
      description: 'masaz_antycellulitowy_description',
      imgSrc: masażKlasyczny,
      altText: 'masaz_antycellulitowy'
    }
  ],
  medycyna: [
    {
      id: 'botox',
      title: 'botox',
      description: 'botox_description',
      imgSrc: botox,
      altText: 'botox'
    },
    {
      id: 'kwas-hialuronowy',
      title: 'kwas_hialuronowy',
      description: 'kwas_hialuronowy_description',
      imgSrc: kwasHialuronowy,
      altText: 'kwas_hialuronowy'
    },
    {
      id: 'mezoterapia',
      title: 'mezoterapia',
      description: 'mezoterapia_description',
      imgSrc: mezoterapia,
      altText: 'mezoterapia'
    },
    {
      id: 'lifting',
      title: 'lifting',
      description: 'lifting_description',
      imgSrc: lifting,
      altText: 'lifting'
    }
  ]
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('medycyna');
  const { t } = useTranslation(); 
  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  return (
    <div>
      <TabButtons activeTab={activeTab} onTabClick={handleTabClick} />
      <section id="zabiegi" className="zabiegi">
        <div className="grid">
          {contentData[activeTab].map((item) => (
       <Card
       key={item.id}
       id={item.id}
       title={t(item.title + "-title")}
       description={t(item.title + "-description")}
       imgSrc={item.imgSrc}
       altText={t(item.title + "-altText")}
     />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tabs;
