function checkPangrams(strings) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function isPangram(str) {
    const lowerStr = str.toLowerCase();

    for (let char of alphabet) {
      if (lowerStr.indexOf(char) === -1) {
        return "0";
      }
    }

    return "1";
  }

  return strings.map(isPangram).join("");
}

// Example usage
const strings = [
  "pack my box with five dozen liquor jugs",
  "this is not a pangram",
];
const result = checkPangrams(strings);
console.log(result); // Output: '10'
