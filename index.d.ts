import {IReverseParams, ISearchParams} from "./src/params/query";
import {SearchModel} from "./src/models/search.model";
import {ReverseModel} from "./src/models/reverse.model";
import {Languages} from "./src/params/language";

export {
    Languages,
    ISearchParams,
    IReverseParams,
    SearchModel,
    ReverseModel
}

declare module "geocoding-osm" {
    export default class GeoCodingOSM {
        public static setLanguage(lang: Languages): void

        public search(params: ISearchParams): Promise<SearchModel>;

        public reverse(params: IReverseParams): Promise<ReverseModel>;
    }
}
