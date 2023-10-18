/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"

Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
*/

// const reverseWords = (s) => {
//   const words = s.trim().split(/\s+/);
//   console.log(words);

//   const reverseWords = words.reverse();

//   const reversedString = reverseWords.join(" ");

//   return reversedString;
// };

//without methods
const reverseWords2 = (s) => {
  let reversedString = "";
  let currentWord = "";
  let wordStarted = false;

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    if (char !== " ") {
      currentWord = char + currentWord;
      console.log(currentWord);
      wordStarted = true;
    } else if (wordStarted) {
      reversedString += currentWord + " ";
      currentWord = "";
      wordStarted = false;
    }
  }

  if (currentWord) {
    reversedString += currentWord;
  }

  return reversedString;
};

console.log(reverseWords2("the sky is blue")); //"blue is sky the"
// console.log(reverseWords2("  hello world  ")); //"world hello"
// console.log(reverseWords2("a good   example")); //"example good a"
