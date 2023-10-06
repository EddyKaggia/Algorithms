/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
*/

const longestPalindrome = (s) => {
     // Initialize a hash map to count character frequencies
     const charCount = new Map();

     // Count the frequency of each character in the input string
     for (const char of s) {
         if (charCount.has(char)) {
             charCount.set(char, charCount.get(char) + 1);
         } else {
             charCount.set(char, 1);
         }
     }
 
     let length = 0; // Initialize the length of the longest palindrome
     let hasOdd = false; // Flag to check if there is a character with an odd count

    for (const count of charCount.keys()) {
        length += Math.floor(charCount.get(count)/2) * 2;

        if (charCount.get(count) % 2 === 1) hasOdd = true;
    }
 
     return length + (hasOdd ? 1: 0);
}

console.log(longestPalindrome("abccccdd")); //7
console.log(longestPalindrome("a")); //1
console.log(longestPalindrome("ccc")); //1