/*!
 * name: @jswork/next-sample
 * description: Get an/some element from array like target.
 * homepage: https://github.com/afeiship/next-sample
 * version: 1.0.0
 * date: 2020-11-19 08:39:19
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var sample = function (inTarget) {
    var length = inTarget.length;
    if (typeof length !== 'number') return;
    var index = Math.floor(Math.random() * length);
    return inTarget[index];
  };

  nx.sample = function (inTarget, inCount) {
    if (inTarget.length <= inCount) return inTarget;
    if (inCount === void(0)) {
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
