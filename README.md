# d3-time-format-thai

[![Codecov branch](https://img.shields.io/codecov/c/github/kristw/d3-time-format-thai/master.svg?style=flat-square)](https://codecov.io/gh/kristw/d3-time-format-thai/branch/master)
[![Build Status](https://img.shields.io/travis/com/kristw/d3-time-format-thai/master.svg?style=flat-square)](https://travis-ci.com/kristw/d3-time-format-thai)
[![David](https://img.shields.io/david/dev/kristw/d3-time-format-thai.svg?style=flat-square)](https://david-dm.org/kristw/d3-time-format-thai?type=dev)
[d3-time-format-thai](https://github.com/kristw/d3-time-format-thai/tree/master/packages/d3-time-format-thai) | [![Version](https://img.shields.io/npm/v/d3-time-format-thai.svg?style=flat-square)](https://img.shields.io/npm/v/d3-time-format-thai.svg?style=flat-square)

## Usage

```sh
npm install d3-time-format-thai --save
```

```ts
import { thaiLocale, formatFullDate, formatDate, formatYear } from 'd3-time-format';

// Unfortunately %Y does not return buddhist calendar year
const format = thaiLocale.format('%a %0d %b');
console.log(format(new Date(2019, 10, 1)));
// ศ. 01 พ.ย.

console.log(formatYear(new Date(2019)));
// 2562

console.log(formatDate (new Date(2020, 0, 1)));
// 1 ม.ค. 2563

console.log(formatFullDate(new Date(2020, 0, 1))); // พ. 1 ม.ค. 2563

```

### License

Apache-2.0
