// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// const twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             };
//     };
// };
// //Time cmplexity = O(N^2)
// //Space complexity = O(1)
// };

//Using a Hashmap

// const twoSum = function (nums, target) {
//     let map = {};
//         for (let i = 0; i < nums.length; i++) {
//             let value = nums[i];
//             let complementPair = target - value;
//             if (map[complementPair]!== undefined) {
//                 return [map[complementPair], i];
//             } else {
//                 map[value] = i;
//             }
//     };
//     // Time complexity -> O(N)
//     // Space complexity -> O(N)
// };

//SOLUTION EXPLANATION
// Here's how it works:
// We create a new Map object to store the indices of the elements we've seen so far.
// We iterate through the array and for each element, we calculate its complement (i.e., the difference between the target and the element).
// If the complement is already in the hash table, we've found a pair of elements that add up to the target, so we return their indices.
// If the complement is not in the hash table, we store the index of the current element in the hash table.
// If we've iterated through the entire array and haven't found a pair of elements that add up to the target, we return null.



// Define the twoSum function that takes an array of integers nums and a target integer target as inputs.
function twoSum(nums, target) {
    // Create a new Map object to store the indices of the elements we've seen so far. Let's call this object map.
    const map = new Map(); // Create a new hash table

    // Iterate through the array using a for loop. For each element at index i, do the following:
    for (let i = 0; i < nums.length; i++) {

        // Calculate its complement by subtracting it from the target. Let's call this value complement.
      const complement = target - nums[i];
      console.log(complement)
      // Check if the complement is already in the map object by calling the has method. If it is, we've found a pair of elements that add up to the target, so we return their indices as an array.
      if (map.has(complement)) {
        return [map.get(complement), i]; // Return the indices of the two elements
      }

      // If the complement is not in the map object, store the index of the current element (nums[i]) in the map object by calling the set method.
      map.set(nums[i], i); // Store the index of the current element in the hash table
    }

    // If we've iterated through the entire array and haven't found a pair of elements that add up to the target, return null.
    return null; // Return null if no two elements add up to the target
  }
  //TC: The time complexity of the JavaScript solution I provided is O(n), where n is the length of the input array nums.

    // This is because we iterate through the array once using a for loop, which takes O(n) time in the worst case. For each element in the array, we perform a constant amount of work: calculating the complement and checking if it's in the hash table takes O(1) time, and adding the current element to the hash table also takes O(1) time on average. Therefore, the total time complexity of the algorithm is O(n) * O(1) = O(n).

    //SC: The space complexity of the JavaScript solution I provided is O(n), where n is the length of the input array nums.

    // This is because we use a Map object to store the indices of the elements we've seen so far. In the worst case, we might need to store all n elements of the input array in the hash table, which would take O(n) space. We also need to store the complement variable and the loop counter i, but these take a constant amount of space and don't affect the overall space complexity.

    // Therefore, the total space complexity of the algorithm is O(n) + O(1) = O(n). In other words, the amount of space required by the algorithm increases linearly with the size of the input array. This is also very efficient, especially compared to a brute-force approach that would take O(1) space but O(n^2) time.

  console.log(twoSum([2,7,11,15],9))
 //  twosum => use cache and sort the array  sc => O(n)