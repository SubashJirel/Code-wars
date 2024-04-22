/*
Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/
function filterString(str) {
  // Use regular expression to filter out numbers
  const numbers = str.match(/\d/g);
  // Join the array of numbers into a single string
  // and convert it to a number
  return parseInt(numbers.join(''));
}
