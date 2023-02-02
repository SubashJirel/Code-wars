/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
function moveZeros(arr) {
    let zeroCollection = []
    let temp = [...arr]
    while(temp.includes(0)) {
        let foundIndex = temp.indexOf(0)
        temp.splice(foundIndex,1)
        zeroCollection.push(0)
    }
    return [...temp,...zeroCollection]
 
  }

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))

//another way
function moveZeros(arr) { 
    let nonZeroArr = arr.filter(val => val!==0)
    let zeroArr = arr.filter(val => val==0)
    return [...nonZeroArr,...zeroArr]
}

//faster way
function moveZeros(arr) {
    var res = new Array(arr.length);
    var pos = 0;
    var rgt = arr.length - 1;
    for (var i = 0; i < arr.length; i++)
      if (arr[i] !== 0)
        res[pos++] = arr[i];
      else
        res[rgt--] = 0;
    return res;
  }