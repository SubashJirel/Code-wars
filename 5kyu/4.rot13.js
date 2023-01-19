/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

CIPHERSFUNDAMENTALS
*/

function rot13(message){
    //your code here
    let aplhabets ="abcdefghijklmnopqrstuvwxyz"
    let capital = aplhabets.toLocaleUpperCase()
    let msgArr = message.split('')
    return msgArr.map(val => {
      if(aplhabets.includes(val)) {
        let index = aplhabets.indexOf(val)
        let rot13Position = Math.floor((index+13)%26)
        return aplhabets[rot13Position]
      }
      else if(capital.includes(val)) {
        let index = capital.indexOf(val)
        let rot13Position = Math.floor((index+13)%26)
        return capital[rot13Position]
      }
      else {
        return val
      }
      
    }).join('')
    
  }
  
  console.log(rot13('abcdefghijklmnopqrstuvwxyz'))
  //nopqrstuvwxyzabcdefghijklm
  //nopqrstuvwxyzabcdefghijklm
  //using regex
  function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }