let alphaobj = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};
function encodeByCaesaer(str, key) {
  let result = [];
  let arrayOfLetter = Object.keys(alphaobj);
  str
    .toLowerCase()
    .split('')
    .forEach((letter) => {
      if (/[a-z]/.test(letter)) {
        let cipherLetterIndex = (alphaobj[letter] + key) % 26;
        let cipherLetter = arrayOfLetter.find(
          (item) => alphaobj[item] === cipherLetterIndex
        );
        result.push(cipherLetter);
      } else {
        result.push(letter);
      }
    });
  return result.join('');
}
console.log(encodeByCaesaer('www.home.home', 3)); // zzz.krph.krph

//Decoding
function decodeByCaesaer(str, key) {
  let result = [];
  let arrayOfLetter = Object.keys(alphaobj);
  str
    .toLowerCase()
    .split('')
    .forEach((letter) => {
      if (/[a-z]/.test(letter)) {
        let cipherLetterIndex = (alphaobj[letter] - key) % 26;
        let cipherLetter = arrayOfLetter.find(
          (item) => alphaobj[item] === cipherLetterIndex
        );
        result.push(cipherLetter);
      } else {
        result.push(letter);
      }
    });
  return result.join('');
}
console.log(decodeByCaesaer('zzz.krph.krph', 3)); //www.home.home
