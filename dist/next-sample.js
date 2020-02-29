/*!
 * name: @feizheng/next-sample
 * description: Get an element from array like target.
 * url: https://github.com/afeiship/next-sample
 * version: 1.0.0
 * date: 2020-02-29 19:00:03
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.sample = function(inTarget) {
    var length = inTarget.length;
    if (typeof length !== 'number') return;
    var index = Math.floor(Math.random() * length);
    return inTarget[index];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.sample;
  }
})();

//# sourceMappingURL=next-sample.js.map
