/*
Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1

*/
function findDigit(num, nth) {
  if (nth <= 0) {
    return -1;
  }

  // Convert to absolute value to ignore the sign
  num = Math.abs(num);

  // Convert number to string
  let numStr = num.toString();

  // Pad the string with leading zeros if necessary
  numStr = numStr.padStart(nth, '0');

  // Access the nth digit from the right
  let digit = numStr[numStr.length - nth];

  // Convert the character back to an integer
  return parseInt(digit);
}
