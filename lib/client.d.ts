import { AxiosInstance } from 'axios';
declare class Client {
    instance: AxiosInstance;
    constructor();
    get: (url: string, params?: import("./types").IReverseParams | import("./types").ISearchParams | undefined) => Promise<any>;
}
export declare const apiClient: Client;
export {};
