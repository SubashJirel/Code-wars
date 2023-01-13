function stray(numbers) {
    let obj = {}
    for(let i=0; i<numbers.length;i++) {
      if(obj[numbers[i]]) {
        obj[numbers[i]]++
      }
      else {
        obj[numbers[i]] = 1
      }
    }
     for(x in obj) {
      if(obj[x] == 1)
      return x
     }
    }
    console.log(stray([17, 17, 3, 17, 17, 17, 17]))
    
    const stray = nums => nums.reduce((a, b) => a ^ b); //using XOR operator all the even number gets to 0 and we end up with 
                                                        //only odd value
    //explanation:  https://dev.to/bladesensei/xor-operator-in-programming-use-case-34ng
    
    