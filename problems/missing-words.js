function missingWords(s, t) {
  const originalWords = s.split(" ");
  const targetWords = t.split(" ");

  let result = [];

  let originalIndex = 0;
  let targetIndex = 0;

  while (
    originalIndex < originalWords.length &&
    targetIndex < targetWords.length
  ) {
    if (originalWords[originalIndex] === targetWords[targetIndex]) {
      targetIndex++;
    } else {
      result.push(originalWords[originalIndex]);
    }

    originalIndex++;
  }

  // Add the remaining words from the original sentence
  result = result.concat(originalWords.slice(originalIndex));

  return result.join(" ");
}

const inputSentence =
  "Python is an easy to learn powerful programming language It has efficient high-level data structures and a simple but effective approach to objectoriented programming Python elegant syntax and dynamic typing";
const targetSentence =
  "Python is an easy to learn powerful programming language";

const output = missingWords(inputSentence, targetSentence);
console.log(output);
