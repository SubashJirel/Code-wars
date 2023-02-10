/*
Task
Yesterday you found some shoes in your room. Each shoe is described by two values:

type indicates if it's a left or a right shoe;
size is the size of the shoe.
Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

Example
For:

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [0, 23]]
the output should be true;

For:

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [1, 23]]
the output should be false.

Input/Output
[input] 2D integer array shoes
Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.

Constraints: 2 ≤ shoes.length ≤ 50,  1 ≤ shoes[i][1] ≤ 100.

[output] a boolean value

true if it is possible to pair the shoes, false otherwise.
*/

function pairOfShoes(shoes) {
    //making an object having shoes number that has an object of 0 and 1 to count the pair
    //like this { '21': { '0': 1, '1': 1 }, '23': { '0': 1, '1': 1 } } 
    let obj = {}
    shoes.forEach(arr => {
        obj[arr[1]] = obj[arr[1]] || {};
        obj[arr[1]][arr[0]] = (obj[arr[1]][arr[0]] || 0) + 1;
    });

    //checking if 0 and 1 has occured equally
    for(x in obj) {
        if(obj[x]['0'] != obj[x]['1']) return false
    }
	return true;  
}

console.log(pairOfShoes([[0, 21], [1, 23], [1, 21], [0, 23]]))//true
console.log(pairOfShoes([[0, 23], [1, 23], [1, 23], [0, 23], [0, 23], [0, 23]])) //false

//another
function pairOfShoes(shoes) {
    const left = shoes.filter(e => e[0] === 0).length;
    const right = shoes.length - left;
    if (left !== right) return false;
    return new Set(shoes.map(e => e[1])).size <= left;
  }