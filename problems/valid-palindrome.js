/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/

const isPalindrome = (s) => {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length - 1 - i]) 
            return false;
        // }
    }
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("race a car")); //false
console.log(isPalindrome(" ")); //true
console.log(isPalindrome("ab_a")); //true