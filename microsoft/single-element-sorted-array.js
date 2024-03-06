/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

 

Example 1:
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:
Input: nums = [3,3,7,7,10,11,11]
Output: 10
 

Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105
*/

// Non-optimal solution
const singleNonDuplicate = (nums) => {
  const tracker = {};

  for (let num of nums) {
    if (!tracker[num]) {
      tracker[num] = 1;
    } else {
      tracker[num]++;
    }
  }

  for (const count in tracker) {
    if (tracker[count] === 1) {
      return count;
    }
  }
};

// console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])); // 2
// console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])); // 10

// Optimal solution -> Binary search coz array is sorted
const singleNonDuplicate2 = (nums) => {
  //Split array down the middle and compare
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (mid % 2 === 1) {
      mid--;
    }

    if (nums[mid] !== nums[mid + 1]) {
      high = mid;
    } else {
      low = mid + 2;
    }
  }

  return nums[low];
};

console.log(singleNonDuplicate2([1, 1, 2, 3, 3, 4, 4, 8, 8])); // 2
console.log(singleNonDuplicate2([3, 3, 7, 7, 10, 11, 11])); // 10
