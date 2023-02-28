//" given an array of positive intergers, 
// each integer represents how many times to the left or right
// you can move in the array, no out of bound moves. 
// Given a starting index, return true if you can reach 0 
// in the array, otherwise return false.

// ex: 
//  input: arr = [1, 3, 2, 0, 4, 2, 1]
//         startIdx = 1
//  output: false"		


function canReachZero(arr, startIdx) {
    // Create a set to store visited indices
    const visited = new Set();
  
    // Check if the starting index is already 0
    if (arr[startIdx] === 0) {
      return true;
    }
  
    // Add the starting index to the visited set
    visited.add(startIdx);
  
    // Iterate until we have visited all reachable indices
    while (visited.size > 0) {
      // Get the next index to visit
      const idx = visited.values().next().value;
      visited.delete(idx);
  
      // Check if we have reached 0
      if (arr[idx] === 0) {
        return true;
      }
  
      // Check if we can move left or right from the current index
      const leftIdx = idx - arr[idx];
      const rightIdx = idx + arr[idx];
  
      if (leftIdx >= 0 && !visited.has(leftIdx)) {
        visited.add(leftIdx);
      }
  
      if (rightIdx < arr.length && !visited.has(rightIdx)) {
        visited.add(rightIdx);
      }
    }
  
    // We have visited all reachable indices and haven't found 0
    return false;
  }
  
  // Example usage:
  const arr = [1, 3, 2, 0, 4, 2, 1];
  const startIdx = 1;
  console.log(canReachZero(arr, startIdx));
//   console.log(result); // false