/*
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites 1,000 times.

FUNDAMENTALS
*/
// add the value "codewars" to the websites array 1,000 times
var websites = [];
for (let i = 0; i < 1000; i++) {
  websites.push('codewars');
}

// another way
var websites = new Array(1000).fill('codewars');
