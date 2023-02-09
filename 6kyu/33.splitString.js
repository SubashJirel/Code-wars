/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/
function solution(str){
    // if null
    if(!str) return [] // could've used Nullish coalescing operator (??), return str.match(regex)??[]
    
     //if odd
     if(str.length%2!=0) str= str + '_'
  
     let regex = /\w{2}/g
     return str.match(regex)
  }
  
console.log(solution("abcdefg"))

//another regex
function solution(s){
    return (s+"_").match(/.{2}/g)??[] // here if string is odd then adding "_" is useful. If it is even then the added "_" will not have any even match so it will not show
 }
 