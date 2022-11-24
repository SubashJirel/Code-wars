/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
    // your code
    let newWord = s1+s2
    const mySet = new Set(newWord) //creates a set of unique alphabets
    return [...mySet].sort().join('') // converting that set to an array,sorting them and making them to string
  }

 let a = "xyaabbbccccdefww"
 let b = "xxxxyyyyabklmopq"
  console.log(longest(a,b))