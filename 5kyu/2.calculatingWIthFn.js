/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

//the backbone // in six(dividedBy(two())); if dividedBy(two()) is passed as a parameter then this code is run
//if only six() is passed then number the corresponding number is returned
function performTheOperation(int,param) {
    let ans = 0
    switch(param[0]) {
      case '+':
       ans = int+param[1]
        break;
      case '-':
        ans = int-param[1]
        break;
      case '*':
        ans = int*param[1]
          break;
      case '/':
        ans = Math.floor(int/param[1])
        break;
      default:
        console.log('error in switch case')
    } 
    
    return ans
  }
  function zero(param) {
  // Ex: if zero() ; if there is no parameter 
    if(param == undefined) {
      return 0
    } 
  // Ex: if zero(dividedBy(two())) ; if param is dividedBy(two())
     else {
      return  performTheOperation(0, param)
     } 
     
  }
  
  function one(param) {
    if(param == undefined) {
      return 1
    } 
    else {
      return  performTheOperation(1, param)
     }
   
  }
  function two(param) {
    if(param == undefined) {
      return 2
    } 
    else {
      return  performTheOperation(2, param)
     }
   
  }
  function three(param) {
    if(param == undefined) {
      return 3
    } 
    else {
      return  performTheOperation(3, param)
     }
  
  }
  function four(param) {
    if(param == undefined) {
      return 4
    } 
    else {
      return  performTheOperation(4, param)
     }
  
  }
  function five(param) {
    if(param == undefined) {
      return 5
    } 
    else {
      return  performTheOperation(5, param)
     }
  
  }
  function six(param) {
    if(param == undefined) {
      return 6
    } 
    else {
      return  performTheOperation(6, param)
     }
  
  }
  function seven(param) {
    if(param == undefined) {
      return 7
    } 
    else {
      return  performTheOperation(7, param)
     }
  
  }
  function eight(param) {
    if(param == undefined) {
      return 8
    } 
    else {
      return  performTheOperation(8, param)
     }
  
  }
  function nine(param) {
    if(param == undefined) {
      return 9
    } 
    else {
      return  performTheOperation(9, param)
     }
   
  }
  
  function plus(param) {
   // plus(param) will alway have a paramter that is an integer inside it
      return ['+',param]
  }
  function minus(param) {
      return ['-',param] 
  }
  function times(param) {
      return ['*',param] 
  }
  function dividedBy(param) {
      return ['/',param] 
  }
  
  console.log(seven(times(five())))
  console.log(four(plus(nine())))
  console.log(eight(minus(three())))
  console.log(six(dividedBy(two())))
  console.log(eight(dividedBy(three())))
  
  //other code
  function zero(fn) {return fn ? fn(0) : 0}
  function one(fn) {return fn ? fn(1) : 1}
  function two(fn) {return fn ? fn(2) : 2}
  function three(fn) {return fn ? fn(3) : 3}
  function four(fn) {return fn ? fn(4) : 4}
  function five(fn) {return fn ? fn(5) : 5}
  function six(fn) {return fn ? fn(6) : 6}
  function seven(fn) {return fn ? fn(7) : 7}
  function eight(fn) {return fn ? fn(8) : 8}
  function nine(fn) {return fn ? fn(9) : 9}
  
  function plus(n) {return function(v) {return v + n}}
  function minus(n) {return function(v) {return v - n}}
  function times(n) {return function(v) {return v * n}}
  function dividedBy(n) {return function(v) {return v / n}}
  /*
  The function call console.log(seven(times(five()))) in the given program would output 35.
  
  Here's how the function calls are executed:
  
  five() is called first and since it doesn't have any function argument, it returns 5.
  times(5) is called next, which returns a function that takes a single argument and multiplies it by 5.
  seven(times(5)) is called next, which takes the function returned from the previous step and calls it with 7 as the argument, so the returned function will compute 7 * 5 = 35 and return the value.
  so the final output is 35.
  */
  
  //another similar code using arrow function
  
  const zero  = (func) => func ? func(0) : 0;
  const one   = (func) => func ? func(1) : 1;
  const two   = (func) => func ? func(2) : 2;
  const three = (func) => func ? func(3) : 3;
  const four  = (func) => func ? func(4) : 4;
  const five  = (func) => func ? func(5) : 5;
  const six   = (func) => func ? func(6) : 6;
  const seven = (func) => func ? func(7) : 7;
  const eight = (func) => func ? func(8) : 8;
  const nine  = (func) => func ? func(9) : 9;
  
  const plus      = (x) => (num) => num + x;
  const minus     = (x) => (num) => num - x;
  const times     = (x) => (num) => num * x;
  const dividedBy = (x) => (num) => ~~(num / x);
  // the times function : const times     = (x) => (num) => num * x; is same as the function down below
  // function times(x) { 
  //   return function(num) {
  //     return num * x;
  //   }
  // }
  /*
  This function times(x) takes in a single argument x and returns another function. This inner function takes a single argument num and returns the result of the multiplication of num and x. This inner function has access to the variable x defined in the outer scope, which is passed as an argument when calling the outer function.
   */