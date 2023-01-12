/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) { //3
    // build here
    let newArr = []
    
    for(let r = 1; r<=nFloors; r++) {
      let space = ''
      let symbol = ""
      for(let i =r; i<nFloors;i++) { //1. i =1; i<4 => 1 2 3 //2. i=2; 2<4 => 2 3 // 3. i=3 3<4 =>3
          space = space + ' '
      }
      for(let j=1; j<=2*r-1; j++ ) {
          symbol = symbol + '*'
      }
      newArr.push(space+symbol+space)
  }
    return newArr
  }
  
  console.log(towerBuilder(3))