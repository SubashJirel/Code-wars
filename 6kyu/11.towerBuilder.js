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

  //easy way using Array.from() method
  function towerBuilder_other(n) {
    return Array.from({length: n}, function(v, k) {
      const spaces = ' '.repeat(n - k - 1);
      return spaces + '*'.repeat(k + k + 1) + spaces;
    });
  }
//another one
function towerBuilder_anotherOne(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}
//using spread operator
function towerBuilder_nextone(n) {
  return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}
  // a different logic by me
let christmasPattern = num =>{
  let newArr = []
for(let i=1;i<=num;i++) { //i<=3
  let symbol = ''
  let space = ""
  for( r=1;r<=num-i;r++) { //r<2
    space+=' '
  }
  for(j = 1; j<=2*r-1; j++) {
    symbol+= "*"
  }
  newArr.unshift(space+symbol+space)
}
return newArr
}
console.log(christmasPattern(3))