let easyPuzzle = [
    ['b', 'a', 't'],
    ['i', 'i', 'p'],
    ['t', 'o', 'n']
  ];
  
  let hardPuzzle = [
    ['y', 'o', 't', 'v'],
    ['k', 'c', 'p', 's'],
    ['t', 'h', 'n', 's'],
    ['t', 'a', 'o', 'e'],
    ['t', 't', 'a', 'i'],
  ];
  
  function findWord(matrix,word) {
    for(let i = 0; i<matrix.length; i++) {
      for(let j =0; j<matrix[i].length; j++) {
        if(matrix[i][j] == word[0]) {
          //console.log(i,j) checking the row and column number of the found word[0]
          if(check(i,j,word,matrix)) {
            return true
          }
        }
      }
    }
    return false
  }
  
  const check = (row,col,word,matrix) => {
    let count = 0
    let k = 0
    while(k<word.length) {
    
      if(matrix[row][col] == word[k]) { //don't do matrix[row++][col]
        count++
      }
      k++
      row++
    }
    if(count == word.length) { 
      return true
    }
    else
      return false
  } 
  
  console.log(findWord(hardPuzzle, 'chat')); // should print true
  console.log(findWord(hardPuzzle, 'set')); // should print false
  console.log(findWord(hardPuzzle, 'i')); // should print true
  
  console.log(findWord(easyPuzzle, 'bit')); // should print true
  console.log(findWord(easyPuzzle, 'bat')); // should print false
  
  //Rookie mistake that worked for the first puzzle but it can never work for the second puzzle
  /*
  
  // function findWord(matrix,word) {
  //   let count = 0
  //   console.log(matrix.length)
  //   for(i =0; i<matrix.length;i++) {
  //     if(count == word.length) {
  //       return true
  //     }
  //      count = 0
  //     for(j =0; j<matrix.length; j++) {
  //       if(matrix[j][i] === word[j]) {
  //         count++
  //       }
  //     }
  //   }
  //   return false
  // }
  */
  
  