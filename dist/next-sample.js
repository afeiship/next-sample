/*!
 * name: @feizheng/next-sample
 * description: Get an/some element from array like target.
 * homepage: https://github.com/afeiship/next-sample
 * version: 1.2.0
 * date: 2020-09-24T10:20:02.773Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var UNDEFINED = 'undefined';;
  var sample = function (inTarget) {
    var length = inTarget.length;
    if (typeof length !== 'number') return;
    var index = Math.floor(Math.random() * length);
    return inTarget[index];
  };

  nx.sample = function (inTarget, inCount) {
    if (inTarget.length <= inCount) return inTarget;
    if (typeof inCount === UNDEFINED) {
      return sample(inTarget);
    } else {
      var result = [];
      while (result.length !== inCount) {
        var value = sample(inTarget);
        if (result.indexOf(value) === -1) {
          result.push(value);
        }
      }
      return result;
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.sample;
  }
})();

//# sourceMappingURL=next-sample.js.map
