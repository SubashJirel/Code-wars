/*
Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

In one shift operation:

Element at grid[i][j] moves to grid[i][j + 1].
Element at grid[i][n - 1] moves to grid[i + 1][0].
Element at grid[m - 1][n - 1] moves to grid[0][0].
Return the 2D grid after applying shift operation k times.

 

Example 1:


Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
Output: [[9,1,2],[3,4,5],[6,7,8]]
Example 2:


Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
Example 3:

Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
Output: [[1,2,3],[4,5,6],[7,8,9]]

*/
var shiftGrid = function (grid, k) {
  let M = grid.length;
  let N = grid[0].length;
  let totalCells = M * N;
  let tempMatrix = Array.from({ length: M }, () => Array(N).fill(0));

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      let posToVal = i * N + j; // calculation of 1D position
      let shiftedPos = (posToVal + k) % totalCells; //  calculation of shifted position

      let valToPosRow = Math.floor(shiftedPos / N); //  calculation of new row index
      let valToPosCol = shiftedPos % N; // calculation of new column index

      // Fill those in new Matrix
      tempMatrix[valToPosRow][valToPosCol] = grid[i][j];
    }
  }
  return tempMatrix;
};

// Example usage:
let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let k = 1;
console.log(shiftGrid(grid, k));
// Output should be:
// [
//   [9, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8]
// ]
