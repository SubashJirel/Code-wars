/*
Your task is to make a program takes in a sentence (without puncuation), adds all words to a list and returns the sentence as a string which is the positions of the word in the list. Casing should not matter too.

Example
"Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"

becomes

"01234567802856734"

Another example
"the one bumble bee one bumble the bee"

becomes

"01231203"
*/

function compress(sentence) {
    let senArr = sentence.toUpperCase().split(' ')
    let newArr = [] // need a new array to push all the single occurence of the word
    let indexNum = ''
    let k = 0
  
    for(let i = 0; i<senArr.length; i++) {
      if(!newArr.includes(senArr[i])) { // if the newArray doesn't have that word previously, then we are going to push 
        newArr.push(senArr[i])
        indexNum += k
        k++
      }
      else {
        indexNum += newArr.indexOf(senArr[i])
      }
    
    }
    return indexNum
  }
  
  console.log(compress('The bumble bee THe bumble tea cloves')); //output: 0120134

  //other code
  
function compress_other(sentence) {
    sentence = sentence.toLowerCase()
    let arr = [...new Set(sentence.split` `)] //making a new array with non-repeated words
    console.log(arr)
    return sentence.split` `.map(x => arr.indexOf(x)).join``// sentence ko array then maped to a newArray containing the
  }                                                         // indexes of the elements in new array and joinin them
  