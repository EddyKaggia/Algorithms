/*
Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

 

Example 1:

Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:

Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
*/

const topKFrequent = (words, k) => {
  const frequencyMap = new Map();

  for (const word of words) {
    frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
  }

  const sorted = [...frequencyMap.keys()].sort((a, b) => {
    const freqComparison = frequencyMap.get(b) - frequencyMap.get(a);

    if (freqComparison === 0) {
      return a.localeCompare(b);
    }
    return freqComparison;
  });

  return sorted.slice(0, k);
};

// console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2)); // ["i", "love"]
console.log(
  topKFrequent(
    ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
    4
  )
); // ["the","is","sunny","day"]
