import { ISearchParams } from '../src/types';
import { Language } from '../src/language';
import GeoCodingOSM from '../src';

describe('Reverse', () => {
  it('should length of the list must be greater than or equal to one object and the type of the first apartment', async () => {
    Language.setLanguage('ru');
    const searchParams: ISearchParams = {
      q: 'Одесская 80А, Тирасполь',
      countrycodes: 'md',
    };
    const geoCodingOSM = new GeoCodingOSM();
    const response = await geoCodingOSM.search(searchParams);
    expect(response.length).toBeGreaterThanOrEqual(1);
    expect(response[0].type).toEqual('apartments');
  });
});
