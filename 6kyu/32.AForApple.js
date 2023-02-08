/*
https://www.codewars.com/kata/55de3f83e92c3e521a00002a/train/javascript
Input: Integer n
Output: String
Example:

a(4) prints as

   A   
  A A  
 A A A 
A     A
a(8) prints as

       A       
      A A      
     A   A     
    A     A    
   A A A A A   
  A         A  
 A           A 
A             A
a(12) prints as

           A           
          A A          
         A   A         
        A     A        
       A       A       
      A         A      
     A A A A A A A     
    A             A    
   A               A   
  A                 A  
 A                   A 
A                     A
Note:

Each line's length is 2n - 1
Each line should be concatenate by line break "\n"
If n is less than 4, it should return ""
If n is odd, a(n) = a(n - 1), eg a(5) == a(4); a(9) == a(8)
 */


function a(n){ //n=8
    //your code here
    if(n<4) {
      return ""
    }
  	if(n%2 !=0) {
        n = n-1
    }
    let spaceFB = n-1 //spaceFB =7
    let spaceMiddle = 1
    //initially
    let str = " ".repeat(spaceFB) +"A"+" ".repeat(spaceFB)+ "\n"
    
    for(let i=spaceFB-1;i>=0;i--) {
        if(spaceMiddle == n-1) { // this special case occurs for  A A A A A in th middle
            let specialCase = n/2
            str+= " ".repeat(i)+ "A ".repeat(specialCase) + "A" +" ".repeat(i) + "\n"
            spaceMiddle+=2
        }
        else {
            str+= " ".repeat(i) + "A" + " ".repeat(spaceMiddle) +"A" + " ".repeat(i) + "\n"
            spaceMiddle+=2
        }
    }

     //to remove the last occurence of \n, to pass the test case only we do .slice(0,str.length -1)
    return str.slice(0,str.length -1)
  }


console.log(a(6))
console.log(a(8))

// a=4 '   A   \n  A A  \n A A A \nA     A'

//a =6 '     A     \n    A A    \n   A   A   \n  A A A A  \n A       A \nA         A'

