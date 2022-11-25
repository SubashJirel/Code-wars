//Given an array
let arr = [1,5,8,4,6,9]
//Write a function that accepts a number,adds it to the beginning of the array and returns the updated array.

function unshift(num,arr) {
    for(let i = arr.length-1; i>=0; i--) { // i =5 //1
      arr[i+1] = arr[i]
  
    }
    arr[0] = num

    return arr
  } 
  

  console.log(unshift(6769,[1,2,3,4,5]))
  