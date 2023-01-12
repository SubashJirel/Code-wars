function pigIt(str){
    //Code here
    let strArr = str.split(' ').map(val => {
      if(/[a-zA-Z]+/.test(val)) { //testing if the string is alphabet or not
       let pigWord = val.slice(1,val.length)+val[0]+'ay' // main code: pig is igPay// 
       //we can use val.slice(1) to get all the letters from 1th index
       return pigWord
      }
      else return val
    })
  
    return strArr.join(' ')
  }
  
  
  
  console.log(pigIt('Pig latin is cool !'))

  //regex way
  function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }
  //another code using replace
  function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
      return w.slice(1) + w[0] + 'ay';
    });
  }