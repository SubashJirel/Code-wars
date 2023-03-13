
/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/
function validBraces(braces){

    let opening = '([{'
    let openingSet = new Set(opening)
  
    let closing = ')]}'
    let stack =[]
    for(bracket of braces) {
      if(openingSet.has(bracket)) {
        stack.push(bracket)
      }
      else {
        let nemesisIndex = closing.indexOf(bracket)
        if(stack.pop() == opening[nemesisIndex]) {
          continue
        }
        else return false
  
      }
    }
    if(stack.length ==0 ) return true
    else return false
  
  }

  //other
  function validBraces(braces){
    var matches = { '(':')', '{':'}', '[':']' };
    var stack = [];
    var currentChar;
  
    for (var i=0; i<braces.length; i++) {
      currentChar = braces[i];
  
      if (matches[currentChar]) { // opening braces
        stack.push(currentChar);
      } else { // closing braces
        if (currentChar !== matches[stack.pop()]) {
          return false;
        }
      }
    }
  
    return stack.length === 0; // any unclosed braces left?
  }
  //other using regex
  function validBraces(braces){
    while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
    return !braces.length;
   }