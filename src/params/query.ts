import {ICoordinates} from "./base";

type AddressDetailsType = 0 | 1;
type ExtraTagsType = 0 | 1;
type NameDetailsType = 0 | 1;

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