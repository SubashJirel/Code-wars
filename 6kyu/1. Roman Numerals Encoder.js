//My solution
function romanPicker(num,one, five, ten) {
    let roman = ''
    switch (num) {
        case 1:     //1
        roman = one  
            break;
        case 2:     //2
        roman = one+one  
            break;
            
        case 3:     //3
        roman = one+one+one 
            break;
        case 4:     //4
        roman = one+five  
            break; 
         case 5:     //5
        roman = five 
            break;
        case 6:     //6
        roman = five+one  
            break;
        case 7:     //7
        roman = five+one+one  
            break;
        case 8:     //8
        roman = five+one+one+one  
            break;
            
        case 9:     //9
        roman = one+ten
            break;
        case 0:     //10
        roman = ten
            break;  
    default:
        break;
}
return roman
}


function solution(number) {
    let finalRoman = ''
    let index = number.toString().length-1
    let length = number.toString().length
    let stringNumRev = number.toString().split('').reverse().join('')

    do {//123
        let rightHandDigit =   Number(stringNumRev[index]) 
        if(rightHandDigit == 0) { // we do this for cases like 1001 or 1020 where 0 is in the num
            do {
                index --
                length--
                rightHandDigit =   Number(stringNumRev[index]) 
            } while (rightHandDigit == 0);
        }
      
        if(length == 1) {
          finalRoman= finalRoman + romanPicker(rightHandDigit, 'I', 'V','X') 
        }
        else if(length ==2 ) {
          finalRoman = finalRoman + romanPicker(rightHandDigit, 'X', 'L','C') 
        }
        else if(length ==3) {
          finalRoman = finalRoman + romanPicker(rightHandDigit, 'C', 'D','M') 
        }
        else if(length ==4) {
            finalRoman = finalRoman + romanPicker(rightHandDigit, 'M', 'M','M') //need to change this for bigger number
        }
        else{
            console.log('enter something less than 4000')
        }
        length--
        index--
        
    } while (length>0);

    return finalRoman
}

console.log(solution(1234)) //MCCXXXIV


//11. other solution : Great use of object
function solution(number){
    // convert the number to a roman numeral
  var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
  
  var ans = '';
  while(number>0){
      for(a in roman){ 
          if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
              
      }
  }
  return ans;
  }