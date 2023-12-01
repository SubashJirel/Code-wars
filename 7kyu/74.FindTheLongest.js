/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
 */
function findLongest(arr) {
  let longest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (String(arr[i]).length > String(longest).length) {
      longest = arr[i];
    }
  }

  return longest;
}
