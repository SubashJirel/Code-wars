function highAndLow(numbers){
    // ...
    let sortedNum = numbers.split(" ").sort((a,b) => a-b)

    console.log(sortedNum.map(Number))
    let highAndLow =  sortedNum[sortedNum.length-1] +" " + sortedNum[0]
    return highAndLow
  }

  console.log(highAndLow("1 2 3"))

  //other code
  function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number); // you can ignore .map(Number) and code works fine. look below for details 
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }
  console.log(highAndLow("1 2 3"))

  //
  /*For example, if the input string is '1 2 3 4 5', split(' ') will create an array of string ['1', '2', '3', '4', '5']. and the map method will iterate through this array of string and converts each element to a number. so the resulting array will be [1, 2, 3, 4, 5]*/
  