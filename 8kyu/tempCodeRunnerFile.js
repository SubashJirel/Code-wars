function noBoringZeros(n) {
  // your code
  let stringNum = n.toString();
  let reg = /^[1-9][0-9]*0+$/;
  return +stringNum.replace(reg, '');
}