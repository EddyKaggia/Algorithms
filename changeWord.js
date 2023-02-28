//Also called wordLadder
// "Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:
// 1.Only one letter can be changed at a time
// 2.Each intermediate word must exist in the word list"									

function ladderLength(beginWord, endWord, wordList) {
    // Create a set of words from wordList for faster lookup
    const wordSet = new Set(wordList);
    
    // If the endWord is not in the wordSet, transformation is not possible
    if (!wordSet.has(endWord)) {
      return 0;
    }
    
    // Initialize queue with the beginWord and its level
    const queue = [[beginWord, 1]];
    
    // Loop through the queue until it is empty
    while (queue.length > 0) {
      // Dequeue the first word and its level
      const [currentWord, level] = queue.shift();
      
      // Check if the currentWord is equal to endWord
      if (currentWord === endWord) {
        return level;
      }
      
      // Loop through each character of the currentWord
      for (let i = 0; i < currentWord.length; i++) {
        // Replace the current character with a to z and check if it exists in the wordSet
        for (let j = 97; j <= 122; j++) {
          const newWord = currentWord.slice(0, i) + String.fromCharCode(j) + currentWord.slice(i + 1);
          
          if (wordSet.has(newWord)) {
            // Add the newWord and its level to the queue
            queue.push([newWord, level + 1]);
            
            // Remove the newWord from the wordSet to avoid revisiting it
            wordSet.delete(newWord);
          }
        }
      }
    }
    
    // If transformation is not possible, return 0
    return 0;
  }
  