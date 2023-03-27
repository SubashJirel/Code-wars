/*
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

var capitals = function (word) {
	// Write your code here
  let capitalAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let setCapitalAlpha = new Set(capitalAlpha)
  let result = []
  for(let i=0;i<word.length;i++) {
    if(setCapitalAlpha.has(word[i])) {
      result.push(i)
    }
  }
  return result
};

//another
var capitals = function (word) {
    var caps = [];
      for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };