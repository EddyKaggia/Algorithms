/*
A swap is defined as taking two distinct positions in an array and swapping the values in them.

A circular array is defined as an array where we consider the first element and the last element to be adjacent.

Given a binary circular array nums, return the minimum number of swaps required to group all 1's present in the array together at any location.

 

Example 1:

Input: nums = [0,1,0,1,1,0,0]
Output: 1
Explanation: Here are a few of the ways to group all the 1's together:
[0,0,1,1,1,0,0] using 1 swap.
[0,1,1,1,0,0,0] using 1 swap.
[1,1,0,0,0,0,1] using 2 swaps (using the circular property of the array).
There is no way to group all 1's together with 0 swaps.
Thus, the minimum number of swaps required is 1.

Example 2:

Input: nums = [0,1,1,1,0,0,1,1,0]
Output: 2
Explanation: Here are a few of the ways to group all the 1's together:
[1,1,1,0,0,0,0,1,1] using 2 swaps (using the circular property of the array).
[1,1,1,1,1,0,0,0,0] using 2 swaps.
There is no way to group all 1's together with 0 or 1 swaps.
Thus, the minimum number of swaps required is 2.

Example 3:

Input: nums = [1,1,0,0,1]
Output: 0
Explanation: All the 1's are already grouped together due to the circular property of the array.
Thus, the minimum number of swaps required is 0.
*/

const minSwaps = (nums) => {
  // 1: find out how many ones are there in circular array (allOnesCount)
  const allOnesCount = nums.filter((n) => n === 1).length;
  console.log(allOnesCount);

  // 2: if there are no ones or only 1, there is no need to move anything (all ones are grouped)
  if (allOnesCount < 2) return 0;

  // 3: first we create window of size allOnesCount
  const window = nums.slice(0, allOnesCount);
  console.log(window);

  // 4: we calculate number of ones in this window;
  let currentOnesCount = window.reduce((acc, n) => acc + n);
  console.log(currentOnesCount);

  // 5: we save it as a max number of ones seen in our window so far
  let maxOnesCount = currentOnesCount;

  for (let i = 0; i < nums.length; i++) {
    // 6: we check what numbers will leave and enter our window if we move the window by 1 step
    const nextToLeaveWindow = nums[i];
    const nextToEnterWindow = nums[(i + allOnesCount) % nums.length];
    currentOnesCount = currentOnesCount - nextToLeaveWindow + nextToEnterWindow;

    console.log((i + allOnesCount) % nums.length);

    console.log(nextToLeaveWindow);
    console.log(nextToEnterWindow);
    console.log(currentOnesCount);

    // 7: now the maxOnesCount is compared with currentOnesCount and can be updated
    if (currentOnesCount > maxOnesCount) maxOnesCount = currentOnesCount;
  }

  console.log(allOnesCount);
  console.log(maxOnesCount);

  // 8: now that we know maxOnesCount, we know what's the maximum of ones within our window, all we have to do is swap out remaining (allOnesCount - maxOnesCount) zeros for ones (each will require 1 swap)
  return allOnesCount - maxOnesCount;
};

// console.log(minSwaps([0, 1, 0, 1, 1, 0, 0])); // 1
console.log(minSwaps([0, 1, 1, 1, 0, 0, 1, 1, 0])); // 2
// console.log(minSwaps([1, 1, 0, 0, 1])); //0
