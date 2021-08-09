# geocoding-osm

Geocoding Service uses OpenStreetMap API

Setting the default language

```ts
import GeoCodingOSM from 'geocoding-osm';

Language.setLanguage('ru');
```

Get address by coordinates

```ts
import GeoCodingOSM from 'geocoding-osm';

const reverseParams: IReverseParams = {
  lat: 46.84581,
  lon: 29.5674794,
  zoom: 18,
  addressdetails: 1,
};
const geoCodingOSM = new GeoCodingOSM();
const response = await geoCodingOSM.reverse(reverseParams);
```

Search by address, returns an array

```ts
import GeoCodingOSM from 'geocoding-osm';

const searchParams: ISearchParams = {
  q: 'Одесская 80А, Тирасполь',
  countrycodes: 'md',
};
const geoCodingOSM = new GeoCodingOSM();
const response = await geoCodingOSM.search(searchParams);
```
