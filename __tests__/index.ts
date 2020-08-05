import {IReverseParams, ISearchParams} from "../src/params/query";
import {Language} from "../src/common/language";
import GeoCodingOSM from "../src/osm";

Language.setLanguage("ru");

const reverseParams: IReverseParams = {
    lat: 47.132133,
    lon: 29.317310,
    zoom: 18,
    addressdetails: 1
};

const geoCodingOSM = new GeoCodingOSM();
geoCodingOSM.reverse(reverseParams).then(value => {
    console.log(value, 'reverse');
});

const searchParams: ISearchParams = {
    q: 'Одесская 80, Тирасполь',
    countrycodes: 'md'
};

geoCodingOSM.search(searchParams).then(value => {
    console.log(value, 'search');
})
