// "Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]"		

//SOLUTION EXPLANATION
// The threeSum function takes an array nums as input and returns an array of unique triplets that sum up to zero. The function first sorts the input array, which makes it easier to look for pairs that sum up to a target value. Then, the function loops through the array, considering each element as a possible first element in a triplet. The function uses two pointers, one at the next element and one at the end of the array, to look for a pair that sums up to the complement of the first element. If such a pair is found, the function adds the triplet to the result array and moves the pointers towards each other to look for the next triplet. The function skips duplicates to ensure that the solution set does not contain duplicate triplets. Finally, the function returns the result array.

function threeSum(nums) {
    // sort the input array
    nums.sort((a, b) => a - b);
  
    const result = [];
  
    // loop through the array, considering each element as a possible first element in a triplet
    for (let i = 0; i < nums.length - 2; i++) {
      // skip duplicates
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
  
      // initialize two pointers, one at the next element and one at the end of the array
      let j = i + 1;
      let k = nums.length - 1;
  
      // move the pointers towards each other, looking for a pair that sums up to the complement of the first element
      while (j < k) {
        const sum = nums[i] + nums[j] + nums[k];
  
        if (sum === 0) {
          // found a triplet that sums up to zero, add it to the result array
          result.push([nums[i], nums[j], nums[k]]);
  
          // skip duplicates
          while (j < k && nums[j] === nums[j + 1]) {
            j++;
          }
          while (j < k && nums[k] === nums[k - 1]) {
            k--;
          }
  
          // move the pointers towards each other to look for the next triplet
          j++;
          k--;
        } else if (sum < 0) {
          // the sum is too small, move the left pointer to a larger element
          j++;
        } else {
          // the sum is too large, move the right pointer to a smaller element
          k--;
        }
      }
    }
  
    return result;

    //TC: The time complexity of the given solution to the 3Sum problem is O(n^2), where n is the length of the input array. This is because the solution involves a nested loop that goes through each element of the input array, and then, for each element, it uses two pointers to search for pairs that sum up to the complement of that element.

    // The outer loop runs n - 2 times, and the inner loop runs n/2 times on average (due to the two pointers moving towards each other). Therefore, the overall time complexity of the solution is O(n * n/2) = O(n^2).

    // Sorting the array takes O(n log n) time, but since this is dominated by the O(n^2) time complexity of the nested loop, the overall time complexity is still O(n^2).

    // In practice, the actual running time of the solution will depend on the distribution of the input data and the performance of the JavaScript engine used to execute the code. However, the worst-case time complexity of the solution is O(n^2), which is relatively efficient compared to other algorithms that solve the 3Sum problem.

   //SC: The space complexity of the given solution to the 3Sum problem is O(n), where n is the length of the input array. This is because the solution uses an array result to store the triplets that sum up to zero, and the size of this array can be up to O(n) in the worst case (when all elements in the array form distinct triplets that sum up to zero).

    // The solution also uses a few constant-sized variables, such as the loop indices and the pointers, that do not depend on the input size. Therefore, they do not contribute to the space complexity of the solution.

    // Sorting the input array in place does not increase the space complexity, as it does not use any additional memory beyond the input array.

    // In practice, the actual space usage of the solution will depend on the size of the input and the number of triplets that sum up to zero. However, the worst-case space complexity of the solution is O(n), which is relatively efficient compared to other algorithms that solve the 3Sum problem.
  }
  

  console.log(threeSum([-1, 0, 1, 2, -1, -4]));