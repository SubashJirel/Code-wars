/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
 */
function simpleMultiplication(number) {
    // your code........
  let oddOrEven = number%2
  return oddOrEven?number*9:number*8
}
