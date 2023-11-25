/*
function sumOfMinimums(arr) {
  // your code here
  let sum = 0;
  arr.forEach((val) => {
    sum += val.sort((a, b) => a - b)[0];
  });
  return sum;
}

*/

function sumOfMinimums(arr) {
  // your code here
  let sum = 0;
  arr.forEach((val) => {
    sum += val.sort((a, b) => a - b)[0];
  });
  return sum;
}

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
);

// another solution
