/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
*/
function sumDigits(number) {
  let num = Math.abs(number);
  let sum = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    sum += lastDigit;
    num = Math.floor(num / 10);
  }
  return sum;
}
