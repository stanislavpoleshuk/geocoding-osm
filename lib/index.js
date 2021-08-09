"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const language_1 = require("./language");
class GeoCodingOSM {
    search(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield client_1.apiClient.get(`/search`, params);
            const { data } = response;
            return data;
        });
    }
    reverse(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield client_1.apiClient.get(`/reverse`, params);
            const { data } = response;
            return data;
        });
    }
    static setLanguage(lang) {
        language_1.Language.setLanguage(lang);
    }
}
exports.default = GeoCodingOSM;
