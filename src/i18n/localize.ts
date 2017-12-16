/*
   Common localization methods based on
   https://github.com/stefalda/ReactNativeLocalization

   To extend with additional translations, create a new `Translation` interface
   (for auto-complete and type-checking) then run the `translate` method with
   actual translations to combine them with the base, common translations.

      import { translate, PhraseList, Translation } from "lib/i18n/localize";

      interface Phrases extends Translation {
         NEW_PHRASE1?:string;
         NEW_PHRASE2?:string;
      }

      export default translate<Phrases>({
         NEW_PHRASE1: {
            en: "Some phrase"
         },
         NEW_PHRASE2: {
            en: "Some other phrase"
         },
      })
*/
import { is, merge } from "lib/utility";
import { phrases, CommonPhrases } from "./language";
export { format } from "lib/utility";

// tslint:disable-next-line:no-unused
declare global {
   interface Navigator {
      /**
       * Language code for Internet Explorer before version 11.
       */
      userLanguage?:string;
      userAgent?:string;
   }
}

/**
 * Optional translations for a phrase
 */
export interface Language {
   [key:string]:string;
   /** German */
   de?:string;
   /** Greek */
   el?:string;
   /** English */
   en:string;
   /** Spanish */
   es?:string;
   /** Italian */
   it?:string;
   /** Japanese */
   ja?:string;
   /** Korean */
   ko?:string;
   /** Kurdish */
   ku?:string;
   /** Dutch */
   nl?:string;
   /** Polish */
   pl?:string;
   /** Portuguese */
   pt?:string;
   /** Rusian */
   ru?:string;
   /** Swedish */
   sv?:string;
   /** Chinese */
   zh?:string;
}

/**
 * Phrases in a particular language matched to a phrase key.
 */
export interface Translation {
   [key:string]:string;
}

/**
 * Keyed list of phrases and their translations into each supported language.
 * Translation converts the PhraseList to the Translation interface which has
 * only a single language per phrase key.
 */
export interface PhraseList {
   [key:string]:Language;
}

/**
 * Language abbreviations.
 */
export const language:{[key:string]:string} = {
   Chinese: "zh",
   Dutch: "nl",
   English: "en",
   German: "de",
   Greek: "el",
   Italian: "it",
   Japanese: "ja",
   Korean: "ko",
   Kurdish: "ku",
   Polish: "pl",
   Portuguese: "pt",
   Russian: "ru",
   Spanish: "es",
   Swedish: "sv"
};

export const defaultLanguage = language.English;
/** Currently active language. */
let currentLanguage = defaultLanguage;
/** Currently active source phrases. */
let source:PhraseList;
/** Translation of source using current language. */
const text:Translation = {};

/**
 * Load all strings for set language into text hash.
 */
export function translate<T extends Translation>(addPhrases?:PhraseList):T & CommonPhrases {
   source = is.value(addPhrases) ? merge(phrases, addPhrases) : phrases;

   for (const phrase in source) {
      if (source.hasOwnProperty(phrase)) {
         const alternates = source[phrase];
         // assign translation for given language if it exists, otherwise assign
         // translation for default language
         text[phrase] = is.defined(alternates, currentLanguage)
            ? alternates[currentLanguage]
            : alternates[defaultLanguage];
      }
   }
   return text as T & CommonPhrases;
}

export default text as CommonPhrases;


/**
 * Infer language if possible.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language
 */
function inferLanguage() {
   if (typeof(window) !== is.type.UNDEFINED && typeof(window.navigator) !== is.type.UNDEFINED) {
      const n = window.navigator;
      let l = defaultLanguage;

      if (is.array(n.languages) && is.value(n.languages[0])) {
         l = n.languages[0];
      } else if (is.value(n.language)) {
         l = n.language;
      } else if (is.value(n.userLanguage)) {
         l = n.userLanguage;
      }
      // discard regionality
      setLanguage(l.indexOf("-") > 0 ? l.split("-")[0] : l);
   }
}

/**
 * Update language and re-translate source phrases.
 */
export function setLanguage(l:string):Translation {
   if (is.value(l) && l != currentLanguage) {
      currentLanguage = l;
      // update translation with new language
      translate(source);
   }
   return text;
}

inferLanguage();