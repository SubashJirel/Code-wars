/*

*/

function sortArray(array) {
    // Return a sorted array.
    let oddArr = []
    let newArr = array.map(val =>{
      if(val%2 ==0) {
        return val
      }
      else {
        oddArr.push(val) //pushing all the odd values in one array
        return 'x'  // x is a grabage value that holds the place for odd integers
      }
    })
    //sort the odd
    oddArr.sort((a,b) => a-b)
  
    let oddIndex = -1
    let arrWithSortedElem = newArr.map(val => {
      if(val == 'x') { // if the array has the inital garbage value then replace with the sorted odd num
        oddIndex++
        return oddArr[oddIndex] //could've used oddArr.shift() which just returns the first element
        
      }
      else return val
    })
  // console.log(oddArr)
  // console.log(newArr)
  // console.log(arrWithSortedElem)
  return arrWithSortedElem
  }
  sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
  //[ 1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

  //other code
  function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);//he x % 2 expression is used to check if a number is odd (if it is, the result is non-zero, which is considered to be "truthy" in JavaScript).
    return array.map((x) => x % 2 ? odd.shift() : x);
  }
  /*
  The function checks if an element is odd (x % 2) and if it is, it gets the first element from the sorted "odd" array (odd.shift()) and returns it as the new element. If the element is even, it returns the original element.
  */