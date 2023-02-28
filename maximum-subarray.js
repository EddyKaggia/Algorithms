// "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6."	

function maxSubarraySum(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
  
    return maxSoFar;
  }
  
  const nums = [-2,1,-3,4,-1,2,1,-5,4];
  const maxSum = maxSubarraySum(nums);
  console.log(maxSum); // 6
  