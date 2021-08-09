import { IReverseParams } from '../src/types';
import { Language } from '../src/language';
import GeoCodingOSM from '../src';

describe('Reverse', () => {
  it('should house number 19Б', async () => {
    Language.setLanguage('ru');
    const reverseParams: IReverseParams = {
      lat: 46.84581,
      lon: 29.5674794,
      zoom: 18,
      addressdetails: 1,
    };
    const geoCodingOSM = new GeoCodingOSM();
    const response = await geoCodingOSM.reverse(reverseParams);
    expect(response.address?.house_number).toEqual('19Б');
  });
});
