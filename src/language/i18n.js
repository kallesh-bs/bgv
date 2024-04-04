import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "./en.json";
import Hindi from "./hi.json";
import Language from "i18next-browser-languagedetector";

i18n
  .use(Language)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: English,
      },
      hi: {
        translations: Hindi,
      },
    },
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
