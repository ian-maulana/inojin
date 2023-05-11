import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import id from '@resources/locales/id.json';
import en from '@resources/locales/en.json';

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: process.env.NODE_ENV === 'development',
    lng: 'en',
    fallbackLng: 'id',
    resources: {
      en: {
        translation: en,
      },
      id: {
        translation: id,
      },
    },
    interpolation: {
      escapeValue: true, // not needed for react as it escapes by default
    },
    detection: {
      order: ['localStorage'],
    },
  });

export default i18n;
