/*
Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

For example, the transpose of:

| 1 2 3 |
| 4 5 6 |
is

| 1 4 |
| 2 5 |
| 3 6 |
The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.
*/
function transpose(matrix) {
    let row = matrix.length;// row =2
    let col = matrix[0].length; //col =3
    let result =[]
    for(let i=0; i<col;i++) { //i<2
      let newArr = []
      for(let j=0;j<row;j++) { // j<3
        newArr.push(matrix[j][i])
      }
      result.push(newArr)
    }
    
    return result
    }
    
    console.log(transpose([[1,2,3],[4,5,6]]))
    
    //using map
    var transpose = m => m[0].map((_, i) => m.map(val => val[i]));
    