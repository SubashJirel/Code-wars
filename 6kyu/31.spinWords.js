/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(string){
    //TODO Have fun :)
    return string.replace(/[a-zA-Z]{5,}/g, val=> val.split('').reverse().join(''))
    /*
    note:split("") is not best way to convert string->array try some emojis and any non basic plane characters and you muts deal with codepoints Array.from(str) is better.
    Array.from("\u{1f404}") vs "\u{1f404}
    */
  }

  console.log(spinWords("Hey fellow warriors"))

  //other code
  function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }