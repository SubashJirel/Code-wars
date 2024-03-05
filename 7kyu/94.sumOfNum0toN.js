var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count < 0) {
      return count + '<0';
    } else if (count === 0) {
      return '0=0';
    } else {
      var sum = 0;
      var sequence = '';
      for (var i = 0; i <= count; i++) {
        sum += i;
        sequence += i + (i < count ? '+' : '');
      }
      return sequence + ' = ' + sum;
    }
  };

  return SequenceSum;
})();

// Example usage:
console.log(SequenceSum.showSequence(6)); // Output: 0+1+2+3+4+5+6 = 21
console.log(SequenceSum.showSequence(-15)); // Output: -15<0
console.log(SequenceSum.showSequence(0)); // Output: 0=0
