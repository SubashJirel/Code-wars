/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/
function toCamelCase(str){
    if (!str) {
      return '';
    }
  
    let result =""
  
    if(str.indexOf('_')>=0) {
      result =  str.split('_').map(val => val[0].toUpperCase()+val.slice(1)).join('')
     }
     else {
     result = str.split('-').map(val => val[0].toUpperCase()+val.slice(1)).join('')
     
     }
  
     //for cases like  A-Cat_was-pippi where both underscore and dash is present
     if(result.indexOf('_')>=0) {
      result =  result.split('_').map(val => val[0].toUpperCase()+val.slice(1)).join('')
     }
     else if(result.indexOf('-')>=0) {
     result = result.split('-').map(val => val[0].toUpperCase()+val.slice(1)).join('')
     }
  
  
    //to check if the first letter is capital in the given parameter
    if(str[0] == str[0].toUpperCase()) {
      return result
    }
    else {
      return result[0].toLowerCase() + result.slice(1)
    }
  
  }
  console.log(toCamelCase("A-Cat_was-pippi"))

  //using regex // callback is arrow function
  function toCamelCase(str){
    let regex = /[-_]\w/gi
    return str.replace(regex, match => match[1].toUpperCase())
}
console.log(toCamelCase("A-Cat_was-pippi"))

////callback is normal
function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}
