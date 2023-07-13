/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/
function capitalize(str) {
  let capitalStr = str.toUpperCase();
  let even = '';
  let odd = '';
  for (let i = 0; i < str.length; i++) {
    if (i & 1) {
      even += str[i];
      odd += capitalStr[i];
    } else {
      even += capitalStr[i];
      odd += str[i];
    }
  }
  return [even, odd];
}

//other solution
function capitalize(s) {
  const odd = s
    .split('')
    .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l))
    .join('');
  const even = s
    .split('')
    .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l))
    .join('');
  return [even, odd];
}
