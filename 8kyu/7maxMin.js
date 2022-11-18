/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
*/

//My solution

var min = function(list){
    let min = list[0]
    for(x of list){
      if(x<min)
        min = x
    }
    return min;
}

var max = function(list){
    let max = list[0]
    for(x of list){
      if(x>max)
        max = x
    }
    return max;
}


//some good solutions
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);