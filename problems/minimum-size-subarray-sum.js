/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/

const minSubArrayLen = (target, nums) => {
  let minLength = Infinity;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      console.log(minLength);
      console.log(right);
      console.log(left);
      console.log(right - left + 1);

      sum -= nums[left];
      left++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};

// console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // 2
console.log(minSubArrayLen(4, [1, 4, 4])); // 1
// console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1])); // 0
