/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */

// complete the function
function solution(string) {
    let strArr = string.split('')
    let newArr = strArr.map(elem => {
        if(elem === elem.toUpperCase()) {
            elem = ' ' + elem
        }
        return elem
    })

    return newArr.join('')
}

console.log(solution('camelCaseBack'))

//other code
function solution2(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }