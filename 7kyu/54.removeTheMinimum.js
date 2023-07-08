//https://www.codewars.com/kata/563cf89eb4747c5fb100001b/solutions/javascript
// \w matches every word haru
// \d matches digits
function removeSmallest(numbers) {
  if (numbers.length == 0) {
    return [];
  }
  let junkArr = [...numbers];

  let sorted = [...junkArr].sort((a, b) => a - b);
  let smallest = sorted[0];
  let theIndexOfSmallest = junkArr.findIndex((elem) => elem == smallest);

  junkArr.splice(theIndexOfSmallest, 1);
  return junkArr;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([2, 2, 1, 2, 1]));

//other solutions
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

const removeSmallest = (numbers) =>
  numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));
