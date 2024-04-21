/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/
function cubeOdd(arr) {
  let sum = 0;
  let nonNumericFlag = false;

  arr.forEach((val) => {
    if (typeof val !== 'number') {
      nonNumericFlag = true;
      return;
    }
    if (val % 2 !== 0) {
      sum += Math.pow(val, 3);
    }
  });

  if (nonNumericFlag) {
    return undefined;
  }

  return sum;
}
