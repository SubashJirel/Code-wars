/*

*/
var subsets = function (nums) {
  let result = [];
  let subset = [];

  const backtrack = (start) => {
    // Push a copy of the current subset to the result
    result.push([...subset]);

    // Iterate over the numbers starting from 'start' index
    for (let i = start; i < nums.length; i++) {
      // Include nums[i] in the current subset
      subset.push(nums[i]);

      // Continue building the subset from the next number
      backtrack(i + 1);

      // Backtrack: remove nums[i] from the current subset
      subset.pop();
    }
  };

  // Start backtracking from index 0
  backtrack(0);

  return result;
};
let nums = [1, 2, 3];
console.log(subsets(nums));
