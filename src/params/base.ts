interface IBaseParams {
    acceptLanguage?: string;
}

export interface ICoordinates extends IBaseParams {
    lat: number;
    lon: number;
    zoom: number;
}