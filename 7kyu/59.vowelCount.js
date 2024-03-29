/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

const inputString = 'Hello, how are you?';
const vowelCount = countVowels(inputString);
console.log(`Number of vowels: ${vowelCount}`);

//regex
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
