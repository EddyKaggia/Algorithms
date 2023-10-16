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
    //count the 1s
    let oneCount = 0;

    for (const one of nums) oneCount += one;

    //If there are no 1s or only one 1 no need to swap
    if (oneCount <= 1) return 0;

    let right = 0;
    let left = 0;
    let maxOnes = 0;
    let windowOnes = 0;

    //Window within which ones fit: maxOnes
    while (right < oneCount) {
        if (nums[right] === 1) {
            windowOnes++;
        }
        right++
    }

    maxOnes = windowOnes;

    //
    while (right < nums.length) {
        if (nums[left] === 1) {
            windowOnes--; 
        }
        if (nums[right] === 1) {
            windowOnes++;
        }

        maxOnes = Math.max(maxOnes, windowOnes);

        left++;
        right++;
    }

    console.log(left)

    return oneCount - maxOnes;
}

console.log(minSwaps([0,1,0,1,1,0,0])); // 1
console.log(minSwaps([0,1,1,1,0,0,1,1,0])); // 2
console.log(minSwaps([1,1,0,0,1])); //0