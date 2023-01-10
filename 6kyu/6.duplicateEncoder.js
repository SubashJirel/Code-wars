

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
