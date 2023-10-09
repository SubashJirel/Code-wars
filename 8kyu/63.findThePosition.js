/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

function position(letter) {
  // Convert the input letter to lowercase to handle both cases (uppercase and lowercase letters)
  letter = letter.toLowerCase();

  // Check if the input is a single letter
  if (letter.length === 1 && letter >= 'a' && letter <= 'z') {
    // Calculate the position in the alphabet
    const position = letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

    // Return the result
    return `Position of alphabet: ${position}`;
  } else {
    // Handle invalid input
    return 'Invalid input. Please provide a single letter.';
  }
}

// Example usage:
const input = 'a';
const result = positionInAlphabet(input);
console.log(result); // Output: "Position of alphabet: 1"

//another way
function position(letter) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}
