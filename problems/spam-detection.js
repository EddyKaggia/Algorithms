function detectSpam(subjects, spam_words) {
  // Initialize an array to store the results
  // Write your code here
  const output = [];
  const lowerCaseCompare = [];

  for (let i = 0; i < spam_words.length; i++) {
    console.log(spam_words[i].toLowerCase());
    lowerCaseCompare.push(spam_words[i].toLowerCase());
  }

  for (const subject of subjects) {
    let count = 0;
    for (const word of subject.split(" ")) {
      if (lowerCaseCompare.includes(word.toLowerCase())) {
        count++;
      }
    }

    if (count >= 2) {
      output.push("spam");
    } else {
      output.push("not_spam");
    }
  }

  return output;
}

// Example usage:
const subjects = ["I paid him paid", "Summertime Sadness"];
const spam = ["I", "Sadness", "paid"];

const result = detectSpam(subjects, spam);
console.log(result); // Output: ["spam", "not_spam"]
