/*
Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm (sheep returned on Friday stay and don't leave for a weekend).

Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.

Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.

Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5

Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6
*/

function lostSheep(friday,saturday,total){
    //your code here
    let returnedSheepFri = friday.reduce((acc,curr) =>{return acc+= curr},0)
    let returnedSheepSat = saturday.reduce((acc,curr) => {return acc+=curr},0)
    return total-returnedSheepFri-returnedSheepSat
  }
  
  console.log(lostSheep([5,1,4],[5,4],29))

  //Other code
  const lostSheep2 = (friday, saturday, total) =>
  [...friday, ...saturday].reduce((acc, n) => acc - n, total); //here acc has total values and we are subtracting each returned sheep