/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count (string) {  
    // The function code should be 
    let obj ={}
    string.split('').forEach(val => {
      //could also be done: obj[val] = (obj[val] || 0) +1
     if(obj[val]) {
        obj[val]++
      }
      else {
        obj[val] =1
      }
    })
     return obj;
  }