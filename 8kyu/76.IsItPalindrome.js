/*
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
*/

function isPalindrome(x) {
  // Remove spaces and convert to lowercase
  let temp = x.replace(/\s/g, '').toLowerCase();

  // Compare the reversed string with the original
  return temp === temp.split('').reverse().join('');
}
