import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './translations/en.json'; // Замените на свои файлы локализации
import ru from './translations/ru.json';
import es from './translations/es.json'

const resources = {
  en: { translation: en },
  ru: { translation: ru },
  es: { translation: es}
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: RNLocalize.getLocales()[0].languageCode,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
  });

export default i18n;
