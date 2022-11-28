
/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
//my code
function reverseWords(str) {
    // Go for it
    return  str.split('').reverse().join('') // at first  //.god yzal eht revo spmuj xof nworb kciuq ehT
               .split(' ').reverse().join(' ')//Then  //ehT kciuq nworb xof spmuj revo eht yzal .god
    
  }

  console.log(reverseWords('The quick brown fox jumps over the lazy dog.')) 

  //other code
  function reverseWords_other(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }