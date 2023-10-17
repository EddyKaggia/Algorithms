/*
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
*/

const minWindow = (s, t) => {
  const freqMap = new Map();

  for (const letter of t) {
    if (!freqMap.has(letter)) {
      freqMap.set(letter, 1);
    } else {
      freqMap.set(letter, freqMap.get(letter) + 1);
    }
  }

  let left = 0;
  let right = 0;
  let count = freqMap.size;
  let len = Infinity;
  let minWindow = "";

  while (right < s.length) {
    let rLetter = s[right];

    if (freqMap.has(rLetter)) {
      freqMap.set(rLetter, freqMap.get(rLetter) - 1);
      if (freqMap.get(rLetter) === 0) count--;
    }

    right++;

    while (count === 0) {
      if (right - left < len) {
        len = right - left;
        minWindow = s.slice(left, right);
      }

      let lLetter = s[left];
      if (freqMap.has(lLetter)) {
        freqMap.set(lLetter, freqMap.get(lLetter) + 1);
        if (freqMap.get(lLetter) > 0) count++;
      }
      left++;
    }
  }

  return minWindow;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));
