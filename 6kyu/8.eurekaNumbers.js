function sumDigPow(a, b) {
    // Your code here
    let newArr = []
    for( i=a; i<=b;i++) {
      if(check(i)) {
      newArr.push(i)
    }
    }

    return newArr
    
  }
  function check(num) {
    let sum = 0
    let original = num
    let length  = num.toString().length
    while(num!=0) {
        let lastNum = num%10
    //   let revNum = Number(num.toString().split().reverse().join())
        sum+= Math.pow(lastNum,length)
        length--
        num = Math.floor(num/10)
        
    }
    if(sum == original) {
        return true
    }
    else return false
  }
  
//   console.log(check(8))
  console.log(sumDigPow(1,135))
//   [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 89,
//   135
// ]