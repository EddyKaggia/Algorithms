//"Given a list of words, write a program to find the longest word made of other words in the list.
//longest word Example: ['dog', 'cat', 'walker', 'dogwalker'] -> 'dogwalker'"		

function longestWord(words) {
    // Create a Set to store the words for O(1) lookup
    const wordSet = new Set(words);
  
    // Sort the words in descending order of length
    words.sort((a, b) => b.length - a.length);
  
    // Create a memoization table to store the maximum length of a valid split
    const memo = new Map();
  
    // Check each word if it can be formed by concatenating other words
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
  
      for (let j = 0; j < word.length; j++) {
        const left = word.slice(0, j + 1);
        const right = word.slice(j + 1);
  
        if (wordSet.has(left)) {
          // The left part is a word in the set
          if (right.length === 0 || memo.has(right)) {
            // The right part is empty or has been computed before
            const splitLength = left.length + (memo.get(right) || 0);
  
            if (!memo.has(word) || splitLength > memo.get(word)) {
              // Update the maximum length of the split if it's longer than the previous maximum
              memo.set(word, splitLength);
            }
          }
        }
      }
  
      if (memo.has(word) && memo.get(word) === word.length) {
        // The word can be formed by other words
        return word;
      }
    }
  
    // No word found
    return null;
  }
  console.log(longestWord(['dog', 'cat', 'walker', 'dogwalker']))