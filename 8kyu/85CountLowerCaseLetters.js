/*
Your task is simply to count the total number of lowercase letters in a string.

Examples
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26
*/

function lowercaseCount(str) {
  //How many?
  let reg = /[a-z]/g;
  return str.match(reg) ? str.match(reg).length : 0;
}
console.log(lowercaseCount('asdf'));
