import { initReactI18next} from "react-i18next";
import i18next from "i18next";
import {resources} from "./language/resurses";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        interpolation: {escapeValue: false},
        lng:JSON.parse(localStorage.getItem('lang'))||'uz',
        resources:resources
    })

export default i18next
