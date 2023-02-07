//https://www.codewars.com/kata/5a7f58c00025e917f30000f1/solutions
/*
Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.
*/

function longest(str) {
    const matches = str.match(/a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*/gi);
    
    const longestMatch = matches.reduce(
      (acc, match) => match.length > acc.length ? match : acc
      , '');
    
    return longestMatch;
  }

  console.log(longest('asdfaaaabbbbcttavvfffffdf'))

  //another faster code
  function longest_other(str) {
    let max = 0;
    let cur = 0;
    let pos = 0;
    for (let i = 1; i < str.length; ++i) {
      if (str[i-1] <= str[i]) {
        ++cur;
        if (cur > max) {
          max = cur;
          pos = i - max;
        }
      } else {
        cur = 0;
      }
    }
    return str.slice(pos, max+1+pos);
  }