function pluralize(words){
    // write your code here
    let unique = new Set(words)
    let newArr = [...unique]
    let duplicate2 = words.filter(val => {
        if(unique.has(val)) {
          unique.delete(val)
        }
        else return val
      })
     return  newArr.map(val => {
        if(duplicate2.includes(val)) {
            return val + 's'
        }
        else return val
      })
    }
    console.log(pluralize(["cow", "pig", "cow", "cow"])); // ➞ ["cows", "pig"]
    
    console.log(pluralize(["table", "table", "table"]));// ➞ ["tables"]
    
    console.log(pluralize(["chair", "pencil", "arm", "pencil"]));// ➞ ["chair", "pencils", "arm"]