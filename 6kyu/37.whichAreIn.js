/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.
 */
function inArray(array1,array2){
    //...
    let arrayString = array2.join(' ')
    let resultArr = []
    array1.forEach(val => {
      if(arrayString.includes(val)) {
        resultArr.push(val)
      }
    })
    return resultArr.sort()
  }
  a1=["live","strong","lyal","lysh","arp"]
  a2 = ["lively","alive","harp","sharp","armstrong"]
  
  console.log(inArray(a1,a2))
  
  //Other code
  function inArray(array1,array2){
    return array1
      .filter(a1 => array2.find(a2 => a2.match(a1)))
      .sort()
  }
  /*
  I'd be leery of using match with a string. This turns into a regex, which has special meaning. If array1 contained any strings with non-letter chars, like '.', the match would trip up certain tests.
  e.g. 'hello'.match('h.l.o') returns a match.
  
  Also, if someone were trying to be malicious, it could be worse (could potentially crash things).
  e.g. 'hello world'.match('(((((((.*)*)*)*)*)*)*)*x'), in Firefox, freezes for a few seconds.
  */
  
  //another faster
  const inArray = (a,b) => a.filter(s => b.some(t => t.includes(s))).sort();