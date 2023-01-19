function findLeader(nums){
    // write your code here
    let leaders = []
    for(let i =1;i<nums.length;i++) {
        if(nums[i]>nums[i-1]) {
            leaders.push(nums[i])
        }
    }
    leaders.unshift(nums[0])
    return leaders
    }
    console.log(findLeader([2, 3, 20, 15, 8, 3]));// [2, 3, 20]
    // 2 is the first element so its leader by default
    // Note that 3 is greater than all the elements to it's
    // left side, similarly 20.
    
    console.log(findLeader([2, 3, 20, 15, 8, 25, 3]));// [2, 3, 20, 25]
    console.log(findLeader([1, 2, 3, 4, 5]));// [1, 2, 3, 4, 5]