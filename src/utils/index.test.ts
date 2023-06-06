import { calculateYearsOfExperience } from './index';

describe('calculateYearsOfExperience', () => {
  it('calculate correctly years of experience', () => {
    const startdate = '04-06-2022';
    const enddate = '04-06-2023';

    expect(calculateYearsOfExperience(startdate, enddate)).toBe({
      years: '1',
      months: '0',
    });
  });
});
