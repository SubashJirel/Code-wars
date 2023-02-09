/*

A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
*/
function solution(list){
    let str = ""
    let condition = 0
    let i =0
    while(condition<list.length) {
        let frontNum = list[i] ////checking with an array starting with 7 //frontNum =7  // frontNum = 14
        let span =0

        let a= list[i] //7 // a=14
        let b= list[i+1] //8 //b=15
        let checker = a+1
        while(b==checker) {
            i++ //i =1 //i=2 // i=3 // i=4 // next i=6
            a = list[i] //8 //9 //10
            b=list[i+1] // 9//10//11 //12
            //i++ //1//2//3
            span++ //span =1 // span = 2
            checker = a+1
            condition++
        }

        if(span ==0) { //notsingle digit not having any consecutive digit above or below like 69 in 10, 11,69, 14,
            str+=frontNum + ','
        }
        else if(span >=2) {
            str+= `${frontNum}-${a},`
        }
        else {
            str+= `${frontNum},${a},`
        }
        
        condition++
        i++// i=5

    }
    return str.slice(0,str.length-1)
 }
    // TODO: complete solution 
   

  console.log(solution([7, 8, 9, 10, 11,69, 14, 15, 17, 18, 19, 20]));
  console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
   // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
   // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

   //some other solutions
   function solution(nums){
    nums = nums.map((v, i) => nums[i - 1] == v - 1 && nums[i + 1] == v + 1 ? '-' : v);
       return nums.filter((v, i) => v != '-' || nums[i - 1] != '-').join(',').replace(/,-,/g, '-');
   }

   //other
   function solution(list){
    for(var i = 0; i < list.length; i++){
       var j = i;
       while(list[j] - list[j+1] == -1) j++;
       if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
   }
   return list.join();
 }