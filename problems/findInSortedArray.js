//You are given a sorted array and you want to find the number N. How do you do the search as quickly as possible		

function binarySearch(array, N) {
    let start = 0;
    let end = array.length - 1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      if (array[mid] === N) {
        return mid; // Found the target value at index mid
      } else if (array[mid] < N) {
        start = mid + 1; // Target value must be in the right half
      } else {
        end = mid - 1; // Target value must be in the left half
      }
    }
  
    return -1; // Target value not found in the array
  }

  const sortedArray = [1, 3, 5, 7, 9];
const targetValue = 7;

const index = binarySearch(sortedArray, targetValue);
console.log(index);