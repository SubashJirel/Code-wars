/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)

*/
function getNumberFromString(s) {
  const reg = /[0-9]+/g;
  const numStr = s.match(reg).join('');
  return Number(numStr);
}
