/*
Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
 */
var encryptThis = function (text) {
  // Implement me! :)
  const arrayOfLetters = text.split(' ');

  return arrayOfLetters
    .map((val) => {
      if (val.length > 2) {
        const secondLetter = val[1];
        const lastLetter = val[val.length - 1];
        // console.log(secondLetter, lastLetter);
        let newVal = val.charCodeAt(0) + val.slice(1, val.length);
        newVal = newVal.replace(secondLetter, lastLetter);
        return newVal.slice(0, -1) + secondLetter;
      } else {
        return val.replace(val[0], val.charCodeAt(0));
      }
    })
    .join(' ');
};
console.log(encryptThis('I think therefore I am'));
