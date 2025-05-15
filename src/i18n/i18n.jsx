import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en.json';
import ptTranslation from './pt.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { ...ptTranslation},
      en: { ...enTranslation},
    },
    lng: 'pt', // Idioma padrão
    fallbackLng: 'pt', // Idioma de fallback
    interpolation: {
      escapeValue: false, // Permite inserir variáveis no texto
    },
  });

export default i18n;