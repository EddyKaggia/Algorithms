// "Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping."	
//SOLUTION EXPLANATION
// Here's how the solution works:

// Sort the intervals based on their start time using the sort method and a custom comparator function.

// Initialize the result with the first interval.

// Iterate through the remaining intervals and compare them with the last interval in the result.

// If the current interval overlaps with the last interval in the result, merge them by updating the end time of the last interval with the maximum of the two end times.

// If the current interval does not overlap with the last interval in the result, add the current interval to the result.

// Return the result.		

function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]); // Sort the intervals based on their start time
    const result = [intervals[0]]; // Initialize the result with the first interval
    
    for (let i = 1; i < intervals.length; i++) {
      const currentInterval = intervals[i];
      const lastInterval = result[result.length - 1];
      
      if (currentInterval[0] <= lastInterval[1]) {
        // If the current interval overlaps with the last interval, merge them
        lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
      } else {
        // Otherwise, add the current interval to the result
        result.push(currentInterval);
      }
    }
    
    return result;
  }
 console.log(mergeIntervals([[1,4],[4,5]]));  