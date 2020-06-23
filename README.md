# next-sample
> Get an/some element from array like target.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-sample
```

## usage
```js
import '@feizheng/next-sample';

const arr = [1,2,3,4,5,6,7];

nx.sample(arr); // 2
nx.sample(arr); // 5

nx.sample(arr, 2); // [1, 2]
nx.sample(arr, 2); // [3, 6]
nx.sample(arr, 2); // [5, 6]
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-sample/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-sample
[version-url]: https://npmjs.org/package/@feizheng/next-sample

[license-image]: https://img.shields.io/npm/l/@feizheng/next-sample
[license-url]: https://github.com/afeiship/next-sample/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-sample
[size-url]: https://github.com/afeiship/next-sample/blob/master/dist/next-sample.min.js

[download-image]: https://img.shields.io/npm/dw/@feizheng/next-sample
[download-url]: https://www.npmjs.com/package/@feizheng/next-sample
