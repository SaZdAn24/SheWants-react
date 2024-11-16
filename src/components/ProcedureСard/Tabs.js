import React, { useState } from 'react';
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
      title: 'Depilacja Laserowa',
      description: 'Skuteczna metoda usuwania owłosienia na stałe. Efekty widoczne już po kilku zabiegach.',
      imgSrc: laserImage,
      altText: 'Depilacja Laserowa'
    },
    {
      id: 'depilacja-woskiem',
      title: 'Depilacja Woskiem',
      description: 'Szybka i skuteczna metoda usuwania włosów na dłuższy czas.',
      imgSrc: depilacjaCukrowa,
      altText: 'Depilacja Woskiem'
    },
    {
      id: 'depilacja-cukrowa',
      title: 'Depilacja Cukrowa',
      description: 'Naturalna metoda usuwania owłosienia, delikatna dla skóry.',
      imgSrc: depilacjaWoskiem,
      altText: 'Depilacja Cukrowa'
    },
    {
      id: 'depilacja-kremem',
      title: 'Depilacja Kremem',
      description: 'Bezbolesne usuwanie włosów, idealne dla osób z wrażliwą skórą.',
      imgSrc: laserImage,
      altText: 'Depilacja Kremem'
    }
  ],
  masaż: [
    {
      id: 'masaz-klasyczny',
      title: 'Masaż Klasyczny',
      description: 'Relaksacja mięśni и redukcja stresu. Odpowiedni для osób w każdym wieku.',
      imgSrc: masażKlasyczny,
      altText: 'Masaż klasyczny'
    },
    {
      id: 'masaz-tajski',
      title: 'Masaż Tajski',
      description: 'Głębоки masaż z элементами rozciągania, ukierunkowany на równowagę energetyczną.',
      imgSrc: masażLimfatyczny,
      altText: 'Masaż tajski'
    },
    {
      id: 'masaz-limfatyczny',
      title: 'Masaż Limfatyczny',
      description: 'Poprawа krążenia limfy и usuwanie токсyn з organizmu.',
      imgSrc: masażTajski,
      altText: 'Masaż limfatyczny'
    },
    {
      id: 'masaz-antycellulitowy',
      title: 'Masaż Antycellulitowy',
      description: 'Ujędrnienie skóry и redukcja cellulitu.',
      imgSrc: masażKlasyczny,
      altText: 'Masaż antycellulitowy'
    }
  ],
  medycyna: [
    {
      id: 'botox',
      title: 'Botox',
      description: 'Redukcja zmarszczek mimicznych. Szybkie и trwałe efekty.',
      imgSrc: botox,
      altText: 'Botox'
    },
    {
      id: 'kwas-hialuronowy',
      title: 'Kwas Hialuronowy',
      description: 'Nawilżenie и wypełnienie zmarszczek. Widoczne efekty już по pierwszym zabiegu.',
      imgSrc: kwasHialuronowy,
      altText: 'Kwas Hialuronowy'
    },
    {
      id: 'mezoterapia',
      title: 'Mezoterapia',
      description: 'Poprawа jędrności skóry oraz jej regeneracja.',
      imgSrc: mezoterapia,
      altText: 'Mezoterapia'
    },
    {
      id: 'lifting',
      title: 'Lifting',
      description: 'Naturalny efekt liftingu без skalpela.',
      imgSrc: lifting,
      altText: 'Lifting'
    }
  ]
};


const Tabs = () => {
  const [activeTab, setActiveTab] = useState('medycyna');

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
              title={item.title}
              description={item.description}
              imgSrc={item.imgSrc}
              altText={item.altText}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tabs;

