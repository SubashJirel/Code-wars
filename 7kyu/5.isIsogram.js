/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
*/

function isIsogram(str){
    //..
    let upperStr = str.toUpperCase()
    for(let i =0; i<upperStr.length;i++) {
        for(let j=i+1; j<=upperStr.length;j++) {
            if(upperStr[i] == upperStr[j]) {
                return false
            }
        }
    }
    return true
  }

  console.log(isIsogram('hairh')) //false

  //Best solution 
  function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length; // here Set is a constructor that takes array or strings and
  }                                                       // converts it into mathematical set, no repetitions of elem