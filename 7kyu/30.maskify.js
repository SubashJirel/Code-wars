/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
 */
// return masked string
function maskify(cc) {
    let strArr = cc.split('')
    let length = strArr.length-4
    let maskedArr =  strArr.map((val,index) => {
     if(index<length) {
       return '#'
     }
     else return val
    })
    return maskedArr.join('')
 }
 
 console.log(maskify(""))
 
 //using regex and replace and slice
 function maskify(cc) {
   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
 }