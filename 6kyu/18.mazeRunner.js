/*
Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
Task
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
..with the following key

      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point
  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
Rules
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost.
Good luck, and stay safe!
*/

var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];

function mazeRunner(maze, directions) {
  // Code here
  //findig the start and finish from the given maze
  let start = []
  let end = []
  for(let i=0;i<maze.length;i++) {
    for(let j=0; j<maze[i].length;j++) {
      if(maze[i][j] ==2) {
        start.push(i,j)
      }
      if(maze[i][j] ==3) {
        end.push(i,j)
      }
    }
  }

  //doing the steps
  let result = ''
  for(let i=0;i<directions.length;i++) {
    if(directions[i] == "N"){
      start[0]--
    }
    else if(directions[i] == "S"){
      start[0]++
    }
    else if(directions[i] == "E"){
      start[1]++
    }
    else {
      start[1]--
    }
    //check
  if(start[0] == end[0] && start[1] == end[1]) {
    return 'Finish'
  }
  else if(start[0]<0 || start[0]>maze.length-1 ||start[1]<0||start[1]>maze.length-1 || maze[start[0]][start[1]] == 1) {
    return 'Dead'
  }
 
  }
  return 'Lost'
} 
console.log(mazeRunner(maze,["N","N","N","W","W"])) //dead

//other code
function mazeRunner(maze, directions) {
  var path = Array(), curX, curY;
  for (var i = 0; i < maze.length; i++) {
    for (var j = 0; j < maze[i].length; j++) {
      if (maze[i][j] == 2) {
        curX = j;
        curY = i;
      }
    }
  }
  for (var i = 0; i < directions.length; i++) {
    if (directions[i] == 'N') curY--;
    if (directions[i] == 'S') curY++;
    if (directions[i] == 'W') curX--;
    if (directions[i] == 'E') curX++;
    
    // path.push(maze[curY][curX]);
    if (!maze[curY]) return 'Dead';
    if (maze[curY][curX] == 3) return 'Finish';
    if (maze[curY][curX] == undefined || maze[curY][curX] == 1) return 'Dead';
  }
  return 'Lost';
}

