/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/
//math way
function expandedForm(num) {
    let i =1
    let temp = num
    let resultArr = []
    while(temp!=0) {
      digit = temp%10
      if(digit!=0) {
        resultArr.unshift(digit*i)
      }  
      i=i*10
      temp = Math.floor(temp/10)
    }
    return resultArr.join(' + ')
  
  }
  
  console.log(expandedForm(70304))
  
  /*
  CODE FOR FUN
  function expandedForm(num) {
    // Your code here
    length = num.toString().length
    let arr = num.toString().split('').map(val => {
      if(val !== 0) {
        length--
        return val + '0'.repeat(length)
        
      }
      else {
        length--
      }
    })
    return arr.filter(val => val[0]!=0).join(' + ')
  
  }
  
  */