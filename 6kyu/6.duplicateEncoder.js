

function duplicateEncode(word){
    // ...
    let upperWord = word.toUpperCase()
    let obj = {}
    let strArr = upperWord.split('')

    // counting how many times each letter has occured
    strArr.forEach(val => {
        if(!obj[val]) {
            obj[val] =1
        }
        else {
            obj[val]++
        }
        //this above code in small form: obj[val] = (obj[val] || 0) +1
    })
    //now encoding 
    let newStr = ''
    strArr.forEach(val => {
        if(obj[val] ===1) {
            newStr += '('
        }
        else newStr += ')'
    })

    return newStr
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));

//Good code that use the lastIndexOf method
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }

  //anothe code 
  const duplicateEncode = s => {
    const S = [...s.toLowerCase()];
    const counts = S.reduce((r, c) => (r[c] = (r[c] || 0) + 1, r), {}); // here accumulator(r) is initialized to object
    return S.map(c => counts[c] > 1 ? ')' : '(').join('');
}
