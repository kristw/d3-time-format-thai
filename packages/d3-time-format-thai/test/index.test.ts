import { timeFormat, utcFormat, TimeFormats, THAI_LOCALE_DEFINITION } from '../src';

describe('d3-time-format-thai', () => {
  describe('THAI_LOCALE_DEFINITION', () => {
    it('is exported', () => {
      expect(THAI_LOCALE_DEFINITION).toBeDefined();
    });
  });

  describe('TimeFormats', () => {
    it('is exported', () => {
      expect(TimeFormats).toBeDefined();
    });
  });

  describe('timeFormat()', () => {
    it('returns a formatter', () => {
      expect(timeFormat('%a %0d %b')(new Date(2019, 10, 1))).toEqual('ศ. 01 พ.ย.');
      expect(timeFormat('%0d/%m')(new Date(2019, 10, 1))).toEqual('01/11');
    });
    it('handles year correctly', () => {
      expect(timeFormat('%c')(new Date(2019, 10, 1))).toEqual('1 พ.ย. 62 00:00 น.');
      expect(timeFormat('%x')(new Date(2019, 10, 1))).toEqual('1 พ.ย. 62');
      expect(timeFormat('%Y')(new Date(2019, 10, 1))).toEqual('2562');
      expect(timeFormat('%B %Y')(new Date(2019, 10, 1))).toEqual('พฤศจิกายน 2562');
    });
    it('handles short year correctly', () => {
      expect(timeFormat('%y')(new Date(2019, 10, 1))).toEqual('62');
      expect(timeFormat('%y%Y')(new Date(2019, 10, 1))).toEqual('622562');
      expect(timeFormat('%b %y')(new Date(2019, 10, 1))).toEqual('พ.ย. 62');
    });
  });

  describe('utcFormat()', () => {
    it('returns a formatter', () => {
      expect(utcFormat('%a %0d %b')(new Date(Date.UTC(2019, 10, 1)))).toEqual('ศ. 01 พ.ย.');
      expect(utcFormat('%0d/%m')(new Date(Date.UTC(2019, 10, 1)))).toEqual('01/11');
    });
    it('handles year correctly', () => {
      expect(timeFormat('%c')(new Date(Date.UTC(2019, 10, 1)))).toEqual('1 พ.ย. 62 00:00 น.');
      expect(timeFormat('%x')(new Date(Date.UTC(2019, 10, 1)))).toEqual('1 พ.ย. 62');
      expect(timeFormat('%Y')(new Date(Date.UTC(2019, 10, 1)))).toEqual('2562');
      expect(timeFormat('%B %Y')(new Date(Date.UTC(2019, 10, 1)))).toEqual('พฤศจิกายน 2562');
    });
    it('handles short year correctly', () => {
      expect(timeFormat('%y')(new Date(Date.UTC(2019, 10, 1)))).toEqual('62');
      expect(timeFormat('%y%Y')(new Date(Date.UTC(2019, 10, 1)))).toEqual('622562');
      expect(timeFormat('%b %y')(new Date(Date.UTC(2019, 10, 1)))).toEqual('พ.ย. 62');
    });
  });
});
