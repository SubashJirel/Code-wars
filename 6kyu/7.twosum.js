function twoSum(numbers, target) {
    // ...
    let sum =0
    for(let i =0; i<numbers.length-1; i++) {
        for(let j=i+1;j<numbers.length;j++) {
            sum =numbers[i] +numbers[j]
            if (sum == target) {
                return [i,j]
            }
        }
    }
    return false
  }

  console.log(twoSum([1, 2, 3], 4))

  //other code
  function twoSum(numbers, target) {
    const hash = {};
    
    for (let i = 0; i < numbers.length; i++) {
      const searched = target - numbers[i];
      if (searched in hash) {
        return [hash[searched], i];
      } else {
        hash[numbers[i]] = i;
      }
    }
  }