function getMiddle(s)
{
  //Code goes here!
  let length = s.length
  if(length%2 !=0) {
    return s[(length+1)/2-1]
  }
  else {
    return s[(length/2)-1] + s[length/2]
  }
}
console.log(getMiddle("middle"))
console.log(getMiddle("tests"))
