let arr = [3, 8, 7, 5, 3, 9, 8]

let uniqueSet = new Set(arr)
let duplicateValues = arr.filter(val => {
  if(uniqueSet.has(val)) {
    uniqueSet.delete(val)
  }
  else return val
})

console.log(duplicateValues)