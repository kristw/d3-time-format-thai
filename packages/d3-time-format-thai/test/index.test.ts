import { thaiLocale, formatYear, formatDate, formatFullDate, THAI_LOCALE_DEFINITION } from '../src';

describe('d3-time-format-thai', () => {
  describe('THAI_LOCALE_DEFINITION', () => {
    it('is exported', () => {
      expect(THAI_LOCALE_DEFINITION).toBeDefined();
    });
  });

  describe('thaiLocale', () => {
    describe('.format()', () => {
      it('returns a formatter', () => {
        const format = thaiLocale.format('%a %0d %b');
        expect(format(new Date(2019, 10, 1))).toEqual('ศ. 01 พ.ย.');
        const format2 = thaiLocale.format('%0d/%m');
        expect(format2(new Date(2019, 10, 1))).toEqual('01/11');
      });
    });
  });

  describe('formatYear()', () => {
    it('returns buddhist calendar year', () => {
      expect(formatYear(new Date(2020, 0, 1))).toEqual('2563');
    });
  });

  describe('formatFullDate()', () => {
    it('formats full date in Thai', () => {
      expect(formatFullDate(new Date(2020, 0, 1))).toEqual('พ. 1 ม.ค. 2563');
    });
  });

  describe('formatDate()', () => {
    it('formats short date in Thai', () => {
      expect(formatDate(new Date(2020, 0, 1))).toEqual('1 ม.ค. 2563');
    });
  });
});
