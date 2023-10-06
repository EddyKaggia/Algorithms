/*
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

 

Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
*/

const firstMissingPositive = (nums) => {
    const n = nums.length;
    const numSet = new Set(nums);
    console.log(numSet)

  for (let i = 1; i <= n + 1; i++) {
    if (!numSet.has(i)) {
      return i;
    }
  }

  //A default value if all values are present
  return 1;
}

console.log(firstMissingPositive([1,2,0])); //3
console.log(firstMissingPositive([3,4,-1,1])); //2
console.log(firstMissingPositive([7,8,9,11,12])); //1
console.log(firstMissingPositive([2,3,4,5]))