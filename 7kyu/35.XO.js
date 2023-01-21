function XO(str) {
    //code here
  let newStr = str.toLowerCase()
  let obj = {}
  newStr.split('').forEach(str => {
    obj[str] = (obj[str] ||0)+1
  })
  return obj['x'] == obj['o']// could also have been: obj?.x == obj?.o
  
  }

  //regex way
  function XO_regex(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return  x?.length === o?.length
  }
  console.log(XO_regex("xxooxoxo"))