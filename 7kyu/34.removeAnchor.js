/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url){
    // TODO: complete
    let lastIndex = 0
    if(url.includes('#')) {
      lastIndex = url.indexOf('#')
    }
    else {
      lastIndex = url.length
    }
    return url.slice(0,lastIndex)
  }
console.log(removeUrlAnchor('www.codewars.com#about'))
//other 
function removeUrlAnchor(url){
    return url.split('#')[0];
  }