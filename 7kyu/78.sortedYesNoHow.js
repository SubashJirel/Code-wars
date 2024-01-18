function isSortedAndHow(array) {
  let ascendCheck = [...array].sort((a, b) => a - b);
  let descendCheck = [...array].sort((a, b) => b - a);

  let ascendStr = JSON.stringify(ascendCheck);
  let descendStr = JSON.stringify(descendCheck);
  let originalStr = JSON.stringify(array);

  if (ascendStr == originalStr) {
    return 'yes, ascending';
  } else if (descendStr == originalStr) {
    return 'yes, descending';
  } else {
    return 'no';
  }
}

//another way
function isSortedAndHow(arr) {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
    ? 'yes, ascending'
    : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
    ? 'yes, descending'
    : 'no';
}

console.log(isSortedAndHow([1, 2, 42, 123, 3, 5]));
