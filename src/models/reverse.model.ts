import {AddressModel} from "./address.model";

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