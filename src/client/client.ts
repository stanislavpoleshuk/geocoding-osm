import axios, {AxiosInstance} from "axios";
import {Language} from "../common/language";
import {GeoCodingParams} from "../params";

const URL = 'https://nominatim.openstreetmap.org';

class Client {
    instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: URL,
            timeout: 5000,
        });
    }

    get = (url: string, params?: GeoCodingParams): Promise<any> => {
        return this.instance.get(url, {
            params: {
                format: 'json',
                'accept-language': Language.acceptLanguage,
                ...params
            }
        })
    }
}

export const apiClient = new Client();