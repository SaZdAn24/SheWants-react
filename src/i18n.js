import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationRU from '../src/locales/ru.json';
import translationPL from '../src/locales/pl.json';
import translationsEN from '../src/locales/en.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEN },
      ru: { translation: translationRU },
      pl: { translation: translationPL }
    },
    lng: 'pl', // Язык по умолчанию
    fallbackLng: 'en', // Резервный язык, если перевод не найден
    interpolation: {
      escapeValue: false // React сам экранирует значения
    }
  });

export default i18n;
