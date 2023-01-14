/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/
function persistence(num) {
    //code me
    let count = 0
    while(num.toString().length!=1) {
      count++
      num = newNumGenerator(num)
  
    }
    
    return count
  }
  //generating new Number
  function newNumGenerator(num) {
    let newNum = 1
    while(num!=0) {
      newNum *= num%10
      num = Math.floor(num/10)
   } 
   return newNum
  }

  //other code using reduce method
  function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString(); //will work if we don't .map(Number)
    }
    
    return times;
 }