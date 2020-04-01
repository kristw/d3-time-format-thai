import { timeFormatLocale, TimeLocaleDefinition } from 'd3-time-format';

export const TimeFormats = {
  FULL_DATE: '%Aที่ %-d %B พ.ศ. %Y',
  SHORT_DATE: '%-d %b %y',
};

export const THAI_LOCALE_DEFINITION: TimeLocaleDefinition = {
  dateTime: '%x %H:%M น.',
  date: TimeFormats.SHORT_DATE,
  time: '%H:%M น.',
  periods: ['', ''],
  days: ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัส', 'วันศุกร์', 'วันเสาร์'],
  shortDays: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
  months: [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
  ],
  shortMonths: [
    'ม.ค.',
    'ก.พ.',
    'มี.ค.',
    'เม.ย.',
    'พ.ค.',
    'มิ.ย.',
    'ก.ค.',
    'ส.ค.',
    'ก.ย.',
    'ต.ค.',
    'พ.ย.',
    'ธ.ค.',
  ],
};

const PLACEHOLDER_YEAR = '##Y';
const PLACEHOLDER_SHORT_YEAR = '##y';

const shortYearRegex = /%y/g;
const yearRegex = /%Y/g;

const placeholderShortYearRegex = new RegExp(PLACEHOLDER_SHORT_YEAR, 'g');
const placeholderYearRegex = new RegExp(PLACEHOLDER_YEAR, 'g');

const locale = timeFormatLocale(THAI_LOCALE_DEFINITION);

function factory(originalFormat: (format: string) => (d: Date) => string) {
  return (format: string) => {
    const hasYear =
      format.includes('%Y') ||
      format.includes('%y') ||
      format.includes('%x') ||
      format.includes('%c');

    if (hasYear) {
      const cleanedFormatter = locale.format(
        format
          .replace(/%c/g, THAI_LOCALE_DEFINITION.dateTime)
          .replace(/%x/g, THAI_LOCALE_DEFINITION.date)
          .replace(shortYearRegex, PLACEHOLDER_SHORT_YEAR)
          .replace(yearRegex, PLACEHOLDER_YEAR),
      );

      const fullYearFormat = originalFormat('%Y');

      return (time: Date) => {
        const fullYear = fullYearFormat(time);
        const correctYear = `${Number(fullYear) + 543}`;
        const { length } = correctYear;

        return cleanedFormatter(time)
          .replace(placeholderShortYearRegex, correctYear.slice(length - 2, length))
          .replace(placeholderYearRegex, correctYear);
      };
    }

    return originalFormat(format);
  };
}

export const timeFormat = factory(locale.format);

export const utcFormat = factory(locale.utcFormat);

/* Does not support yet */
// export const timeParse = locale.parse;
// export const { utcParse } = locale;
