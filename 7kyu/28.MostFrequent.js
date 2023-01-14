function mostFrequentItemCount(collection) {
    // Do your magic. :)
    let obj = {}
    for(let i=0;i<collection.length;i++) {
      if(obj[collection[i]]) {
        obj[collection[i]]++
      }
      else {
        obj[collection[i]] =1
      }
    }
    /*
    this above for loop can be excuted this way
    collection.forEach( item => {
      count[item] = (count[item] || 0) + 1;
    });
    */
    let temp = 0
    for(x in obj) {
      if(obj[x]>temp) {
        temp = obj[x]
      }
    }
    return temp
    //could've just used return Math.max(...Object.values(obj)); 
    // Object.values(obj) returns an "array" of the values of the properties in the count object. 
    //we use spread operator before Object.values(obj) to convert the array into a list of arguments which can be passed to the Math.max() function.
    
    
  }
  let arr = [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
  console.log(mostFrequentItemCount(arr)) 
  
  /*
  BETA CODE THAT DIDN'T PASS ALL THE TESTS 
  function mostFrequentItemCount(collection) {
    let sortedArr = collection.sort((a,b) => a-b)
    sortedArr.unshift(0) // to make the first element index 1, a garbage value is put
    let i =0 
    let length =0
    let highest = 0
    while(i <sortedArr.length) {
      length = sortedArr.lastIndexOf(sortedArr[i])-sortedArr.indexOf(sortedArr[i])+1
      //[ 0, -1, -1, -1, -1, -1,2,  2,  3,  3,  3,  3,4,  9]: last index of -1 = 5 and inex =1; 5-1+1 = 5
      if(length>highest) {
          highest =length
      }
      i = sortedArr.lastIndexOf(sortedArr[i])+1
    }
    return highest
      
    }
  */
  