import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import common from './assets/locales/common.json';
import enTranslation from "./assets/locales/en/translation.json";
import grTranslation from "./assets/locales/gr/translation.json";
import sqTranslation from "./assets/locales/sq/translation.json";


export const resources = {
    en: {
        common: common,
        translation: enTranslation,
    },
    gr: {
        common: common,
        translation: grTranslation,
    },
    sq: {
        common: common,
        translation: sqTranslation,
    },
};

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use( LanguageDetector )
    // pass the i18n instance to react-i18next.
    .use( initReactI18next )
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init( {
        debug: true,
        lng: "en",
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources,
    } );

export default i18n;