import { timeFormatLocale, TimeLocaleDefinition } from 'd3-time-format';

export const THAI_LOCALE_DEFINITION: TimeLocaleDefinition = {
  dateTime: '%A, %e %B %Y г. %X',
  date: '%-d %m %Y',
  time: '%H:%M:%S',
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

export const thaiLocale = timeFormatLocale(THAI_LOCALE_DEFINITION);

export function formatYear(t: Date) {
  return `${t.getFullYear() + 543}`;
}

export function formatFullDate(t: Date) {
  return `${thaiLocale.format('%a %-d %b')(t)} ${formatYear(t)}`;
}

export function formatDate(t: Date) {
  return `${thaiLocale.format('%-d %b')(t)} ${formatYear(t)}`;
}
