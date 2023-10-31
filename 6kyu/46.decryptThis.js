function decipherThis(str) {
  const arrayOfLetters = str.split(' ');
  return arrayOfLetters
    .map((val) => {
      const numPattern = /[0-9]+/;
      const numFromVal = val.match(numPattern)[0];
      const asciiToCharacter = String.fromCharCode(numFromVal);
      val = val.replace(numPattern, asciiToCharacter);

      if (val.length > 2) {
        const firstLetter = val[0];
        const secondLetter = val[1];
        const lastLetter = val[val.length - 1];
        let newVal = val.slice(1);

        newVal = newVal.replace(newVal[0], lastLetter);
        return firstLetter + newVal.slice(0, -1) + secondLetter;
      } else {
        return val;
      }
    })
    .join(' ');
}

console.log(decipherThis('115te 103o'));

//other code
function decipherThis(str) {
  return str
    .split(' ')
    .map((w) =>
      w
        .replace(/^\d+/, (c) => String.fromCharCode(c))
        .replace(/^(.)(.)(.*)(.)$/, '$1$4$3$2')
    )
    .join(' ');
}
