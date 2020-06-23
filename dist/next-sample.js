/*!
 * name: @feizheng/next-sample
 * description: Get an/some element from array like target.
 * homepage: https://github.com/afeiship/next-sample
 * version: 1.1.1
 * date: 2020-06-23T15:28:28.641Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var sample = function (inTarget) {
    var length = inTarget.length;
    if (typeof length !== 'number') return;
    var index = Math.floor(Math.random() * length);
    return inTarget[index];
  };

  nx.sample = function (inTarget, inCount) {
    var count = inCount || 1;
    if (inTarget.length <= inCount) return inTarget;
    if (count === 1) {
      return sample(inTarget);
    } else {
      var result = [];
      while (result.length !== count) {
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
