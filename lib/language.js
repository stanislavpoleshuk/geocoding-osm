"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Language = void 0;
class Language {
}
exports.Language = Language;
Language.acceptLanguage = 'ru';
Language.setLanguage = (lang) => {
    Language.acceptLanguage = lang;
};
