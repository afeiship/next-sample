const nx = require('@feizheng/next-js-core2');
require('../src/next-sample');

describe('api.basic test', () => {
  test('nx.sample should returned an random element', function () {
    var arr = [
      1,
      2,
      3,
      4,
      5,
      'a',
      'b',
      'c',
      'd',
      'e',
      'abc',
      'afeiship',
      'afei'
    ];

    for (let index = 0; index < 100; index++) {
      var el = nx.sample(arr);
      expect(arr.includes(el)).toBe(true);
    }

    expect(nx.sample(arr, 2).length).toBe(2);
  });
});
