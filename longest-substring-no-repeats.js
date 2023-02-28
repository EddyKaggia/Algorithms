// "Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: ""abcabcbb""
// Output: 3 
// Explanation: The answer is ""abc"", with the length of 3. 
// Example 2:

// Input: ""bbbbb""
// Output: 1
// Explanation: The answer is ""b"", with the length of 1.
// Example 3:

// Input: ""pwwkew""
// Output: 3
// Explanation: The answer is ""wke"", with the length of 3. 
//              Note that the answer must be a substring, ""pwke"" is a subsequence and not a substring."			

function lengthOfLongestSubstring(s) {
    const map = new Map(); // map characters to their last seen index
    let start = 0; // start index of current substring
    let maxLength = 0; // maximum length so far
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (map.has(char) && map.get(char) >= start) {
        // char repeats in current substring, shrink substring from left
        start = map.get(char) + 1;
      }
      map.set(char, i); // update last seen index of char
      maxLength = Math.max(maxLength, i - start + 1); // update max length
    }
  
    return maxLength;
  }

  console.log(lengthOfLongestSubstring("pwwkew"));