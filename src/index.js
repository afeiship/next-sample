import nx from '@jswork/next';

const sample = function (inTarget) {
  var length = inTarget.length;
  if (typeof length !== 'number') return;
  var index = Math.floor(Math.random() * length);
  return inTarget[index];
};

nx.sample = function (inTarget, inCount) {
  if (inTarget.length <= inCount) return inTarget;
  if (inCount === void 0) {
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

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.sample;
}

export default nx.sample;
