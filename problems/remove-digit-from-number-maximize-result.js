/* You are given a string number representing a positive integer and a character digit.

Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized. The test cases are generated such that digit occurs at least once in number.

Example 1:
----------
Input: number = "123", digit = "3"
Output: "12"
Explanation: There is only one '3' in "123". After removing '3', the result is "12".

Example 2:
----------
Input: number = "1231", digit = "1"
Output: "231"
Explanation: We can remove the first '1' to get "231" or remove the second '1' to get "123".
Since 231 > 123, we return "231".

Example 3:
----------
Input: number = "551", digit = "5"
Output: "51"
Explanation: We can remove either the first or second '5' from "551".
Both result in the string "51".
*/

//Create a function labelled removeDigit
//Inputs: 2 strings -> Number and Digit
const removeDigit = function (number, digit) {
  let max = "";
  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      let temp = number.slice(0, i) + number.slice(i + 1);
      if (temp > max) {
        max = temp;
      }
    }
  }
  return max;
};

console.log(removeDigit("3123", "3"));
console.log(removeDigit("1231", "1"));
console.log(removeDigit("551", "5"));
console.log(removeDigit("5515515", "5"));
