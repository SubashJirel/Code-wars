https://www.codewars.com/kata/57c7231c484cf9e6ac000090/train/javascript

function addingShifted (arrayOfArrays, shift) {
    let fillLength = shift*(arrayOfArrays.length-1)
    let start =0
    let end = fillLength

    //shifting and making every array of same length by filling with zeros at start and end
    for(let i=0; i<arrayOfArrays.length;i++) {
        arrayOfArrays[i].unshift(... new Array(start).fill(0))
        arrayOfArrays[i].push(...new Array(end).fill(0))
        start+=shift
        end-=shift
    }

    //now adding the values 
    let sumArr = []
    for(let i=0; i<arrayOfArrays[0].length;i++) {
        let sum=0
        for(let j=0; j<arrayOfArrays.length;j++) {
            sum+=arrayOfArrays[j][i]
        }
        sumArr.push(sum)
    }
    return sumArr
  
}
console.log(addingShifted([[1,2,3,4,5,6], [7,7,7,-7,7,7], [1,1,1,1,1,1]], 3))