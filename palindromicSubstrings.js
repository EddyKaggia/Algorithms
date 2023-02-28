// "Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:

// Input: ""abc""
// Output: 3
// Explanation: Three palindromic strings: ""a"", ""b"", ""c"".
 

// Example 2:

// Input: ""aaa""
// Output: 6
// Explanation: Six palindromic strings: ""a"", ""a"", ""a"", ""aa"", ""aa"", ""aaa""."							

function countPalindromicSubstrings(s) {
    let count = 0;
    
    // helper function to check if a string is a palindrome
    function isPalindrome(str) {
      for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str.charAt(i) !== str.charAt(j)) {
          return false;
        }
      }
      return true;
    }
    
    // iterate over all substrings of the string and count palindromic ones
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        let substring = s.substring(i, j);
        if (isPalindrome(substring)) {
          count++;
        }
      }
    }
    
    return count;
  }
  