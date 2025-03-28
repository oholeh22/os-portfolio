import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationUA from './locales/ua.json';

// Конфигурация
i18n.use(initReactI18next).init({
  resources: {
    EN: {
      translation: translationEN,
    },
    UA: {
      translation: translationUA,
    },
  },
  lng: 'EN', // язык по умолчанию
  fallbackLng: 'EN',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
