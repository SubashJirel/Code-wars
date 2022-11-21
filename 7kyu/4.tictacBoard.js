// Given the following `board` variable representing a tic-tac-toe board.
// write a function that takes a board as an input and return us if X has won or not.
//Note: We can give you any state of the board and you will have to give correct result if X has won for that particular state of the board.

//Hint: You have to check in all rows, columns and digonals.
let board = [[' ', 'O', 'X'],
             ['O', '', 'X'],
             ['0', ' ', 'X']];


function CheckTicTack(board) {
    for(let i=0; i<board.length; i++) {
        //row check
        if(board[i][0]=='X' && board[i][1] =='X' && board[i][2] == 'X') {
            return true
        }  
        //column check
        if(board[0][i]=='X' && board[1][i] =='X' && board[2][i] == 'X'){
            return true
        }
    }
    //right diagonal check
    if(board[0][0]=='X' && board[1][1] =='X' && board[2][2] == 'X')
         return true
    //left diagonal check
    if(board[0][2]=='X' && board[1][1] =='X' && board[2][0] == 'X')
        return true
  
    return false
  }

let result = CheckTicTack(board);
console.log(result);

console.log(CheckTicTack([[' ', 'O', 'X'],['O', 'X', ' '], ['O', ' ', 'X']]));
console.log(CheckTicTack([['O', 'X', ''],['O', 'X', ' '], ['O', 'X', '']]));
console.log(CheckTicTack([['X', 'O', 'O'],['O', 'X', ''], ['O', ' ', 'X']]));
console.log(CheckTicTack([[' ', 'O', 'X'],['O', 'X', ' '], ['X', ' ', 'O']]));