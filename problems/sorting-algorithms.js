/*
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessarily unique.
*/

// 1. INSERTION SORT

const insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        let currentElement = nums[i];
        let j = i - 1;
    
        // Move elements of nums[0..i-1] that are greater than currentElement
        // to one position ahead of their current position
        while (j >= 0 && nums[j] > currentElement) {
          nums[j + 1] = nums[j];
          j--;
        }
        nums[j + 1] = currentElement;
      }
      
      return nums;


}

console.log(insertionSort([5,2,3,1])); //[1,2,3,5]
console.log(insertionSort([5,1,1,2,0,0])); //[0,0,1,1,2,5]

// 2. SELECTION SORT

const selectionSort = (nums) => {
    const n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the unsorted portion of the array
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the current element (i)
    if (minIndex !== i) {
      const temp = nums[i];

      nums[i] = nums[minIndex];
      nums[minIndex] = temp;
    }
    
  }
  return nums;
}

console.log(selectionSort([5,2,3,1])); //[1,2,3,5]
// console.log(selectionSort([5,1,1,2,0,0])); //[0,0,1,1,2,5]

// 3. HEAP SORT

const heapSort = (nums) => {
    
}

console.log(heapSort([5,2,3,1])); //[1,2,3,5]
console.log(heapSort([5,1,1,2,0,0])); //[0,0,1,1,2,5]

// 4. QUICK SORT

const quickSort = (nums) => {
    
}

console.log(quickSort([5,2,3,1])); //[1,2,3,5]
console.log(quickSort([5,1,1,2,0,0])); //[0,0,1,1,2,5]

// 5. MERGE SORT

const mergeSort = (nums) => {
    
}

console.log(mergeSort([5,2,3,1])); //[1,2,3,5]
console.log(mergeSort([5,1,1,2,0,0])); //[0,0,1,1,2,5]