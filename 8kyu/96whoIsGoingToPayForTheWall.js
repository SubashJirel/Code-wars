/*
function whoIsPaying(name){
  //your code here
   if (name.length <= 2) {
    return [name];
  } else {
    const truncatedName = name.substring(0, 2);
    return [name, truncatedName];
  }
}
*/
function whoIsPaying(name) {
  //your code here
  if (name.length <= 2) {
    return [name];
  } else {
    const truncatedName = name.substring(0, 2);
    return [name, truncatedName];
  }
}
