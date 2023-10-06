/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

const isValid = (s) => {
const stack = [];
const bracketPairs = {
  '(': ')',
  '{': '}',
  '[': ']',
};

for (let i = 0; i < s.length; i++) {
  const char = s[i];

  if (bracketPairs[char]) {
    // If the character is an open bracket, push it onto the stack.
    stack.push(char);
  } else {
    // If the character is a close bracket, check if it matches the last open bracket on the stack.
    const lastOpenBracket = stack.pop();
    if (bracketPairs[lastOpenBracket] !== char) {
      // If it doesn't match, return false.
      return false;
    }
  }
}

// After processing all characters, the stack should be empty for a valid string.
return stack.length === 0;
};

console.log(isValid("()")); //true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); //false