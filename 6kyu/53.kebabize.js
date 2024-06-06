/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters
*/

function kebabize(str) {
  // Step 1: Remove all digits
  str = str.replace(/\d+/g, '');

  // Step 2: Insert a hyphen before each uppercase letter
  // Step 3: Convert all letters to lowercase
  let kebab = str.replace(/([A-Z])/g, '-$1').toLowerCase();

  // Step 4: Handle the case where the string starts with a hyphen
  if (kebab.startsWith('-')) {
    kebab = kebab.slice(1);
  }

  return kebab;
}

// Example usage:
console.log(kebabize('camelsHaveThreeHumps')); // Output: "camels-have-three-humps"
console.log(kebabize('camelsHave3Humps')); // Output: "camels-have-humps"
console.log(kebabize('CAMEL')); // Output: "c-a-m-e-l"
