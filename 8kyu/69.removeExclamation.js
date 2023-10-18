/*
Remove all exclamation marks from the end of sentence.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

*/
function remove(string) {
  let reg = /!+$/;
  return string.replace(reg, '');
}

console.log(remove('hii!!sdfooisda!!!'));
