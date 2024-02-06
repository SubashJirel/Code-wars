/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
*/
function vowelIndices(word) {
  //your code here
  let indexOfVowelArr = [];
  let reg = /[aeiouy]/i;
  word.split('').forEach((elem, i) => {
    if (reg.test(elem)) {
      indexOfVowelArr.push(i + 1);
    }
  });
  return indexOfVowelArr;
}

//another way
function vowelIndices(word) {
  const matches = word.match(/[aeiouy]/gi);
  return matches ? matches.map((match) => word.indexOf(match) + 1) : [];
}

// Test cases
console.log(vowelIndices('Mmmm')); // Output: []
console.log(vowelIndices('Super')); // Output: [2, 4]
console.log(vowelIndices('Apple')); // Output: [1, 5]
console.log(vowelIndices('YoMama')); // Output: [1, 2, 4, 6]
