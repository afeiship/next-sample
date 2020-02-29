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
