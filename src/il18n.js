import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importing your translation files
import translationEN from "./locales/en/translation.json";

// Constructing the resources object based on imported translations
const resources = {
  en: {
    translation: translationEN,
  },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // If you're using language detection, you can remove this line
    fallbackLng: "en", // Fallback language

    keySeparator: ".", // If your translation keys don't use dots

    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
