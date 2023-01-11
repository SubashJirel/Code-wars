/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/

function getSum( a,b )
{
   //Good luck!
   if(b<a) {
    let temp = a
    a = b
    b=temp
   }
  let sum =0
  while(a<b+1) {
    sum+=a
    a++
  }
  return sum
}

console.log(getSum(289,181))

//other code

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b); // we can directly return (Math.abs(a - b) + 1) * (a + b) / 2, without finding max min
    return (max - min + 1) * (min + max) / 2;
  }
/*
For example, in a series from 2 to 5, 5 - 2 + 1 = 4; There are 4 pairs: (2+5), (3+4), (4+3), and (5+2). Since we don't want the total of both of these "lines", we divide by 2.
*/