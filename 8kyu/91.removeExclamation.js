/*
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!"
"!Hi"     ---> "Hi!"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi!"
*/

function remove(string) {
  // Remove all exclamation marks except the one at the end
  let result = string.replace(/!/g, '');

  // Add an exclamation mark at the end if it's not there
  if (result.charAt(result.length - 1) !== '!') {
    result += '!';
  }

  return result;
}
