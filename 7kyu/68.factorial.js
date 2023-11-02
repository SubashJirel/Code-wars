/*
Your task is to write function factorial.
*/
function factorial(n) {
  //your code here
  if (n < 1) {
    return 1;
  } else return n * factorial(n - 1);
}
