/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/
function diamond(size) {
  // Check if the input is even or negative
  if (size % 2 === 0 || size < 0) {
    return null;
  }

  let result = '';

  // Build the top half of the diamond
  for (let i = 1; i <= size; i += 2) {
    const spaces = ' '.repeat((size - i) / 2);
    const stars = '*'.repeat(i);
    result += spaces + stars + '\n';
  }

  // Build the bottom half of the diamond (excluding the middle line)
  for (let i = size - 2; i > 0; i -= 2) {
    const spaces = ' '.repeat((size - i) / 2);
    const stars = '*'.repeat(i);
    result += spaces + stars + '\n';
  }

  return result;
}

// Example usage:
console.log(diamond(3));
console.log(diamond(5));
