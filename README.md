# d3-time-format-thai

[![Codecov branch](https://img.shields.io/codecov/c/github/kristw/d3-time-format-thai/master.svg?style=flat-square)](https://codecov.io/gh/kristw/d3-time-format-thai/branch/master)
[![Build Status](https://img.shields.io/travis/com/kristw/d3-time-format-thai/master.svg?style=flat-square)](https://travis-ci.com/kristw/d3-time-format-thai)
[![David](https://img.shields.io/david/dev/kristw/d3-time-format-thai.svg?style=flat-square)](https://david-dm.org/kristw/d3-time-format-thai?type=dev)
[![Version](https://img.shields.io/npm/v/d3-time-format-thai.svg?style=flat-square)](https://img.shields.io/npm/v/d3-time-format-thai.svg?style=flat-square)

## Usage

```sh
npm install d3-time-format-thai --save
```

`timeFormat` and `utcFormat` takes the same format string as `d3-time-format`'s. [See documentation](https://github.com/d3/d3-time-format)

```ts
import { timeFormat, utcFormat } from 'd3-time-format-thai';

console.log(timeFormat('%a %0d %b')(new Date(2019, 10, 1)));
// ศ. 01 พ.ย.
```

The library was written in Typescript and provide typings as part of the package.

### License

Apache-2.0
