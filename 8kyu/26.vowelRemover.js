/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/
function shortcut (string) {
    let vowelRegex = /[^a|e|i|o|u]+/g
    return string.match(vowelRegex).join('')
  }

  //should've done like this
  function shortcut(string){
    return string.replace(/[aeiou]/g,'')
  }
  