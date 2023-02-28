// "Write a function that takes three arguments, two strings and an alphabet. Write a function that returns the word that comes first in the alphabet. What data structure would you use to store the alphabet?
// For example: a given 4 letter ordered alphabet “zgac” how do you decide what word comes alphabetically first “aggd” vs. “aggz”"		

function getFirstWord(str1, str2, alphabet) {
    // loop through each character in the strings until a difference is found
    for (let i = 0; i < str1.length && i < str2.length; i++) {
      if (str1[i] !== str2[i]) {
        // check which word comes first based on the index of the differing character in the alphabet
        const index1 = alphabet.indexOf(str1[i]);
        const index2 = alphabet.indexOf(str2[i]);
        if (index1 < index2) {
          return str1;
        } else {
          return str2;
        }
      }
    }
    // if one word is a substring of the other, the shorter word comes first
    if (str1.length < str2.length) {
      return str1;
    } else {
      return str2;
    }
  }
  
  // Example usage:
  const alphabet = "zgac";
  const word1 = "aggd";
  const word2 = "aggz";
  const firstWord = getFirstWord(word1, word2, alphabet);
  console.log(firstWord); // Output: "aggd"
  