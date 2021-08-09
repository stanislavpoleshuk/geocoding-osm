export interface AddressModel {
    house_number: string;
    road: string;
    town: string;
    city: string;
    county: string;
    state_district: string;
    state: string;
    postcode: string;
    country: string;
    country_code: string;
}
export interface ReverseModel {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    lat: string;
    lon: string;
    display_name: string;
    address: AddressModel;
    boundingbox: string[];
}
export interface GeojsonModel {
    type: string;
    coordinates: number[][][];
}
export interface SearchModel {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    boundingbox: string[];
    lat: string;
    lon: string;
    display_name: string;
    class: string;
    type: string;
    importance: number;
    address: AddressModel;
    geojson: GeojsonModel;
}
interface IBaseParams {
    acceptLanguage?: string;
}
export interface ICoordinates extends IBaseParams {
    lat: number;
    lon: number;
    zoom: number;
}
declare type AddressDetailsType = 0 | 1;
declare type ExtraTagsType = 0 | 1;
declare type NameDetailsType = 0 | 1;
export interface IReverseParams extends ICoordinates {
    addressdetails?: AddressDetailsType;
    extratags?: ExtraTagsType;
    namedetails?: NameDetailsType;
}
export interface ISearchParams {
    q: string;
    addressdetails?: AddressDetailsType;
    extratags?: ExtraTagsType;
    namedetails?: NameDetailsType;
    countrycodes?: string;
}
export declare type GeoCodingParams = IReverseParams | ISearchParams;
export declare type Languages = 'ru' | 'en' | 'ro' | 'fr' | 'ua' | 'ar' | 'es';
export {};
