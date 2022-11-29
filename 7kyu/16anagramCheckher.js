//Write a function that accepts two strings and checks whether the first string is an anagram of the second string. 
//If yes, the function returns true

function anagramChecker(p1,p2) {
    let str1 = p1.toUpperCase()
    let str2 = p2.toUpperCase()
    
    if(str1.length != str2.length)  // to check if they are of same length
        return false

   let arrOfStr = str2.split('') // to use the splice method
   for(x of str1) {
        for(let j =0; j<arrOfStr.length;j++) {
            if(x == arrOfStr[j]) {
               arrOfStr.splice(arrOfStr.indexOf(arrOfStr[j]),1) // if found the letter then remove from the array of str
               break
            }
        }
   }

   if(arrOfStr.length == 0)
    return true
   else
    return false

}
let str1 = "Showowow";
let str2 = "Showomom";

console.log(anagramChecker('Angered', 'enraged'))
console.log(anagramChecker(str1, str2))

