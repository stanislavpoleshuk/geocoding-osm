import { Languages } from './types';

export class Language {
  static acceptLanguage: Languages = 'ru';

  static setLanguage = (lang: Languages) => {
    Language.acceptLanguage = lang;
  };
}
