import { IReverseParams, ISearchParams, Languages, ReverseModel, SearchModel } from './types';
export default class GeoCodingOSM {
    search(params: ISearchParams): Promise<Array<SearchModel>>;
    reverse(params: IReverseParams): Promise<ReverseModel>;
    static setLanguage(lang: Languages): void;
}
export { GeoCodingParams } from './types';
