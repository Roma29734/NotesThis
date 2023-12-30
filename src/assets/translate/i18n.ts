import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './translations/en.json'; // Замените на свои файлы локализации
import ru from './translations/ru.json';
import es from './translations/es.json'
import { getLanguageState } from "../../data/localData/MmkvStorageData";

const resources = {
  en: { translation: en },
  ru: { translation: ru },
  es: { translation: es}
};

const getLocales = (): string => {
  const localState = getLanguageState()
  if(localState == null) {
    return RNLocalize.getLocales()[0].languageCode
  } else  {
    return localState
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getLocales(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
  });

export default i18n;

export const changeLanguage = (language: string) => {
  i18n.changeLanguage(language)
}
