/*
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

Note:

Empty string values should be ignored.
Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
Example: (Input --> output)

['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""
*/

function formatWords(words){
    if (!words) return "";
    let newWords = words.filter(Boolean);
    if (newWords.length == 0) return "";
    if (newWords.length == 1) return newWords[0];
    let joinedWithComma = newWords.join(', ');
    let lastCommaIndex = joinedWithComma.lastIndexOf(', ');
    let replaced = joinedWithComma.slice(0,lastCommaIndex) + ' and' + joinedWithComma.slice(lastCommaIndex+1);
    return replaced;
  }

  //other code
  function formatWords(words){
    return (words || [])
    .filter(w => w)
    .join(', ')
    .replace(/, ([^,]+)$/, ' and $1');
  }

  function formatWords(words){
    if (!words) return "";
    return words.filter(function(a) { return a !== ''}).join(', ').replace(/(, )+(\S+)$/, ' and $2');
  }