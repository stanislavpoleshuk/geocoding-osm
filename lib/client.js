"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiClient = void 0;
const language_1 = require("./language");
const axios_1 = __importDefault(require("axios"));
const URL = 'https://nominatim.openstreetmap.org';
class Client {
    constructor() {
        this.get = (url, params) => {
            return this.instance.get(url, {
                params: Object.assign({ format: 'json', 'accept-language': language_1.Language.acceptLanguage }, params),
            });
        };
        this.instance = axios_1.default.create({
            baseURL: URL,
            timeout: 5000,
        });
    }
}
exports.apiClient = new Client();
