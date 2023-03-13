import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import messages_en from './locales/en_translation.json'
import messages_es from './locales/es_translation.json'

export type LocaleCode = 'en' | 'es'

type MessagesRecord = {
  [key: string]: string | MessagesRecord
}
type LocaleData = {
  readonly code: LocaleCode
  readonly messages: MessagesRecord
  readonly ownDisplayName: string
}

type LocaleDataRecord = Readonly<Record<LocaleCode, LocaleData>>

export type LocaleList = readonly {
  readonly code: LocaleCode
  readonly ownDisplayName: string
}[]

const localeData: LocaleDataRecord = Object.freeze({
  en: Object.freeze<LocaleData>({
    code: 'en',
    messages: messages_en as MessagesRecord,
    ownDisplayName: 'English',
  }),
  es: Object.freeze<LocaleData>({
    code: 'es',
    messages: messages_es as MessagesRecord,
    ownDisplayName: 'Español',
  }),
})

export const availableLocales: LocaleList = Object.freeze(
  Object.values(localeData).map(({ code, ownDisplayName }) =>
    Object.freeze({ code, ownDisplayName }),
  ),
)

const resources: Record<LocaleCode, { translation: MessagesRecord }> = {
  en: {
    translation: localeData.en.messages,
  },
  es: {
    translation: localeData.es.messages,
  },
}

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      lookupCookie: 'lang',
      lookupLocalStorage: 'lang',
      lookupQuerystring: 'lang',
      lookupSessionStorage: 'lang',
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    nonExplicitSupportedLngs: true,
    resources,
    supportedLngs: Object.keys(resources),
  })
  .catch((err) => {
    console.error('Error initializing i18next')
    console.error(err)
  })

export default i18next
