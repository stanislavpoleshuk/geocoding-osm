import {SearchModel} from "./models/search.model";
import {apiClient} from "./client/client";
import {ReverseModel} from "./models/reverse.model";
import {IReverseParams, ISearchParams} from "./params/query";
import {Languages} from "./params/language";
import {Language} from "./common/language";

export default class GeoCodingOSM {
    async search(params: ISearchParams): Promise<SearchModel> {
        const response = await apiClient.get(`/search`, params);
        const {data} = response;
        return data;
    }

    async reverse(params: IReverseParams): Promise<ReverseModel> {
        const response = await apiClient.get(`/reverse`, params);
        const {data} = response;
        return data;
    }

    public static setLanguage(lang: Languages): void {
        Language.setLanguage(lang);
    }
}