import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next"

i18n
.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    lng: "en",
    resources: {
        en: {
            translation: {
                greeting: "hello world"
            }
        },
        hi: {
            translation: {
                greeting: "नमस्ते दुनिया"
            }
        },
        mr: {
            translation: {
                greeting: "नमस्कार मित्रांनो"
            }
        }
    }
})

