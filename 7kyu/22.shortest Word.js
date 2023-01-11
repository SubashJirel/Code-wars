function findShort(s){
    let newArr = []
    s.split(' ').forEach(val => { // could've used .map method to shorten the code
      newArr.push(val.length)
    })
    return Math.min(...newArr)
  }

  console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

  //other code
  function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}