import { apiClient } from './client';
import {
  IReverseParams,
  ISearchParams,
  Languages,
  ReverseModel,
  SearchModel,
} from './types';
import { Language } from './language';

export default class GeoCodingOSM {
  async search(params: ISearchParams): Promise<Array<SearchModel>> {
    const response = await apiClient.get(`/search`, params);
    const { data } = response;
    return data;
  }

  async reverse(params: IReverseParams): Promise<ReverseModel> {
    const response = await apiClient.get(`/reverse`, params);
    const { data } = response;
    return data;
  }

  public static setLanguage(lang: Languages): void {
    Language.setLanguage(lang);
  }
}
export { GeoCodingParams } from './types';
