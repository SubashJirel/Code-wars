/*
Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

Sudoku rules:

Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

Rows:


There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.

In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.

Columns:


There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.

In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.

Regions


A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.

Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.

In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.

Valid board example:
*/

function doneOrNot(board){
    //your code here
      //checking the duplicates in the 3X3 subgrids
      for(let i=0; i<9; i+=3) {
        for(let j=0;j<9;j+=3) {
          let subGrid3X3 = [...board[i].slice(j,j+3), ...board[i+1].slice(j,j+3), ...board[i+2].slice(j,j+3)]
          //this also worlks:board3X3 = [...board[j].slice(i,i+3), ...board[j+1].slice(i,i+3), ...board[j+2].slice(i,i+3)]
          let isItUnique = new Set(subGrid3X3)
          if(isItUnique.size !=9) {
            return "Try again! 3X3 grid has duplicates"
          }
          
        }
      }

      //checking the row
      if(!board.every(arr => arr.reduce((acc,curr)=>acc+curr) == 45)) {
        return "Try again!"
      }

      //checking the column
      for(let i =0;i<9;i++) {
        if(board.reduce((acc,curr) => acc+curr[i],0) != 45) {
          return "Try again!"
        }
        //console.log(board.reduce((acc,curr) => acc+curr[i],0))
      }
      /*
      checking column same as above
      for(let i =0; i<board.length;i++) {
      let sum = 0
      for (let j=0;j<board.length;j++) {
        sum+=board[j][i]
      }
      if(sum!=45) {
        return false
      }
    }
      */
      return "Finished!"

  }

  let board = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]]
  

  let board2 = [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 9],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]]

  console.log(doneOrNot(board))

  //Other code
  function doneOrNot_othercode(rows){

    var columns = []
    ,    blocks = [];
    
    for (var i = 0; i < 9; i++) {
      columns[i] = [];
      
      for (var j = 0; j < 9; j++) {
        var k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
        blocks[k] = blocks[k] || [];
        
        blocks[k].push(rows[i][j]);
        columns[i].push(rows[j][i]);
      }
    }
    
    var is_valid_row = (row) => row.slice(0).sort((a, b) => a - b).join('') == '123456789';
    
    var is_valid = rows.every(is_valid_row) 
      && columns.every(is_valid_row) 
      && blocks.every(is_valid_row);
    
    return is_valid ? 'Finished!' : 'Try again!';
  }