/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {
    let obj = {}
    for(let i=0; i<numbers.length;i++) {
      if(obj[numbers[i]]) {
        obj[numbers[i]]++
      }
      else {
        obj[numbers[i]] = 1
      }
    }
     for(x in obj) {
      if(obj[x] == 1)
      return x
     }
    }
    console.log(stray([17, 17, 3, 17, 17, 17, 17]))
    
    const stray = nums => nums.reduce((a, b) => a ^ b); //using XOR operator all the even number gets to 0 and we end up with 
                                                        //only odd value
    //explanation:  https://dev.to/bladesensei/xor-operator-in-programming-use-case-34ng
    
    