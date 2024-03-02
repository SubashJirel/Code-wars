/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/
function switcheroo(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      result += '!';
    } else if (str[i] === 'b') {
      result += 'a';
    } else {
      result += str[i];
    }
  }
  result = result.replace(/!/g, 'b');
  return result;
}
