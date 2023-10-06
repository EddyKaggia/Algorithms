/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

const strStr = (haystack, needle) => {
      // Use indexOf to find the first occurrence of needle in haystack
  const index = haystack.indexOf(needle);

  // Check if the index is -1 (not found) or a positive integer (found)
  if (index === -1) {
    return -1; // Needle is not part of haystack
  } else {
    return index; // Found needle at the given index
  }
}

function strStr2(haystack, needle) {
    const haystackLength = haystack.length;
    const needleLength = needle.length;
  
    // If needle is an empty string, return 0
    if (needleLength === 0) {
      return 0;
    }
  
    for (let i = 0; i <= haystackLength - needleLength; i++) {
      // Check if the current substring of haystack matches needle
      let match = true;
      for (let j = 0; j < needleLength; j++) {
        if (haystack[i + j] !== needle[j]) {
          match = false;
          break;
        }
      }
  
      // If a match is found, return the starting index
      if (match) {
        return i;
      }
    }
  
    // If no match is found, return -1
    return -1;
  }

console.log(strStr2("sadbutsad", "sad"));// 0
console.log(strStr2("leetcode", "leeto"));// -1
console.log(strStr2("egwene", "wen"));