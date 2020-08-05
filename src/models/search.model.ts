import {AddressModel} from "./address.model";

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