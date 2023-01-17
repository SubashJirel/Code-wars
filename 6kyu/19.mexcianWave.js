//resu;t should be such wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
function wave(str){
    let mexicanWaveArr =  str.split('').map((val,index) => {
          return str.slice(0,index) + str[index].toUpperCase() + str.slice(index+1,)
    })
    return mexicanWaveArr.filter(val => val!=str) // input maybe two words that is why we are removing an element where space maybe have resulted the same string passed 
  }
  console.log(wave("two words"))

  //another way
  function wave_another(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}