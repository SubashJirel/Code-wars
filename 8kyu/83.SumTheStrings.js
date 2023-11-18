/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"

*/
const num1 = str1 === '' ? 0 : parseInt(str1);
const num2 = str2 === '' ? 0 : parseInt(str2);

const sum = num1 + num2;

return sum.toString();
