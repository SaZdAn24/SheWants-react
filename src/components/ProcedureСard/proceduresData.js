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


import BeforBotox from "../../assets/do/befor after.jpg"






const procedures = {
    depilacja: [
      {
        id: 'depilacja-laserowa',
        title: 'Depilacja Laserowa',
        description: 'Лазерная депиляция – это безопасный и эффективный метод удаления волос, который обеспечивает длительный эффект.',
        goal: 'Удаление нежелательных волос на длительный срок.',
        effect: 'Кожа становится гладкой уже после первого сеанса, видимое сокращение роста волос после нескольких процедур.',
        imgSrc: laserImage,
        price: '300-600 zł',
        duration: '30-60 минут',
      },
      {
        id: 'depilacja-woskiem',
        title: 'Depilacja Woskiem',
        description: 'Эффективный и быстрый способ удалить волосы с корнем для гладкости кожи.',
        goal: 'Удаление волос на несколько недель.',
        effect: 'Гладкая кожа до 4 недель.',
        imgSrc: depilacjaWoskiem,
        price: '100-200 zł',
        duration: '20-40 минут',
      },
      {
        id: 'depilacja-cukrowa',
        title: 'Depilacja Cukrowa',
        description: 'Натуральный способ удаления волос с использованием сахарной пасты.',
        goal: 'Деликатное удаление волос без раздражения.',
        effect: 'Мягкая и гладкая кожа.',
        imgSrc: depilacjaCukrowa,
        price: '150-250 zł',
        duration: '30 минут',
      },
      {
        id: 'depilacja-kremem',
        title: 'Depilacja Kremem',
        description: 'Простой и быстрый метод удаления волос кремом.',
        goal: 'Удаление волос без боли.',
        effect: 'Кожа без раздражения.',
        imgSrc: masażLimfatyczny,
        price: '50-100 zł',
        duration: '15-20 минут',
      },
    ],
    masaż: [
      {
        id: 'masaz-klasyczny',
        title: 'Masaż Klasyczny',
        description: 'Расслабляющий массаж для снятия стресса и напряжения.',
        goal: 'Расслабление мышц и улучшение кровообращения.',
        effect: 'Чувство легкости и релаксации.',
        imgSrc: masażKlasyczny ,
        price: '150-300 zł',
        duration: '60 минут',
      },
      {
        id: 'masaz-tajski',
        title: 'Masaż Tajski',
        description: 'Сочетание растяжек и глубокого массажа для баланса тела и души.',
        goal: 'Улучшение гибкости и снятие напряжения.',
        effect: 'Энергия и легкость в теле.',
        imgSrc: masażTajski,
        price: '200-400 zł',
        duration: '90 минут',
      },
      {
        id: 'masaz-limfatyczny',
        title: 'Masaż Limfatyczny',
        description: 'Стимуляция лимфатической системы для выведения токсинов.',
        goal: 'Улучшение лимфотока и уменьшение отеков.',
        effect: 'Чистая и здоровая кожа.',
        imgSrc: '/images/lymph-massage.jpg',
        price: '200-350 zł',
        duration: '60 минут',
      },
      {
        id: 'masaz-antycellulitowy',
        title: 'Masaż Antycellulitowy',
        description: 'Интенсивный массаж для уменьшения целлюлита и подтяжки кожи.',
        goal: 'Уменьшение целлюлита и улучшение текстуры кожи.',
        effect: 'Гладкая и упругая кожа.',
        imgSrc: '/images/cellulite-massage.jpg',
        price: '250-400 zł',
        duration: '60 минут',
      },
    ],
    medycyna: [
      {
        id: 'botox',
        title: 'Botox',
        description: 'Эффективный метод уменьшения мимических морщин.',
        goal: 'Разглаживание морщин и омоложение кожи.',
        effect: 'Молодая и гладкая кожа.',
        imgSrc: botox,
        ImgBefor: BeforBotox,
        price: '500-800 zł',
        duration: '30 минут',
      },
      {
        id: 'kwas-hialuronowy',
        title: 'Kwas Hialuronowy',
        description: 'Глубокое увлажнение и восстановление кожи.',
        goal: 'Устранение морщин и улучшение текстуры кожи.',
        effect: 'Свежая и упругая кожа.',
        imgSrc: kwasHialuronowy,
        price: '600-1000 zł',
        duration: '40 минут',
      },
      {
        id: 'mezoterapia',
        title: 'Mezoterapia',
        description: 'Метод омоложения кожи с помощью инъекций.',
        goal: 'Улучшение упругости кожи и устранение мелких морщин.',
        effect: 'Здоровая и сияющая кожа.',
        imgSrc: mezoterapia,
        price: '400-800 zł',
        duration: '45 минут',
      },
      {
        id: 'lifting',
        title: 'Lifting',
        description: 'Натуральное подтягивание кожи без хирургического вмешательства.',
        goal: 'Подтяжка кожи и улучшение овала лица.',
        effect: 'Молодое и подтянутое лицо.',
        imgSrc: lifting,
        price: '800-1200 zł',
        duration: '60 минут',
      },
    ],
  };
  
  export default procedures;
  