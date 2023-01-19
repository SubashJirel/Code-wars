//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
    let numArr =  x.split('').map(num => {
        //use this return num<5?0:1
        if(num<5) {
            return 0
        }
        else return 1
    })
    return numArr.join('')
  
  }

console.log(fakeBin('45385593107843568'))

//another way using only one for loop
function fakeBin(x){
    let strBin = ''
    for(let pos = 0; pos < x.length; pos++){
      strBin += (x[pos] < 5) ? 0 : 1
    }
    return strBin
  }

  //using regex
  function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
  }