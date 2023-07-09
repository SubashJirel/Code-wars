/*
 This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. 
 */

function accum(s) {
  // your code
  let resultStr = '';
  for (let i = 0; i < s.length; i++) {
    resultStr += s[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      resultStr += s[i].toLowerCase();
    }
    resultStr += '-'; // this was added later on// At first, like this strin was made ABbCccDddd
  }
  let pattern = /-$/;
  return resultStr.replace(pattern, '');
}
console.log(accum('ZpglnRxqenU'));

//Some other solution
function accum(s) {
  return s
    .split('')
    .map((s, i) => s.toUpperCase() + s.toLowerCase().repeat(i))
    .join('-');
}

//next one

function accum(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}
