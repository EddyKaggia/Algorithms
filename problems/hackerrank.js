function getSequenceSum(i, j, k) {
  let sum = 0;

  // Sum from i to j
  for (let x = i; x <= j; x++) {
    sum += x;
  }

  // Sum from j-1 down to k
  for (let x = j - 1; x >= k; x--) {
    sum += x;
  }

  return sum;
}

// Example usage:
const i = 0;
const j = 5;
const k = -1;
const result = getSequenceSum(i, j, k);
// console.log(result); // Output: 56

function extract(str) {
  const regex = /(\d+)$/; // Matches one or more digits at the end of the string
  const match = str.match(regex);

  if (match) {
    const value = match[1];
    console.log(value); // This will output "0"
  } else {
    console.log("Value not found in the string.");
  }
}

console.log(
  extract(
    'unicomp6.unicomp.net - - [01/Jul/1995:00:00:06 -0400] "GET /shuttle/countdown/ HTTP/1.0" 200 3985'
  )
);

//Use the `fs` module to read and write files
const fs = require("fs");

function main() {
  // read the string filename
  const filename = readLine();

  //Create the output filename
  const outputFileName = `bytes_${filename}`;

  //Create 2 counters
  let largeResponses = 0;
  let totalSumLargeResponseBytes = 0;

  //Parse the log file
  const lines = fs.readFileSync(filename, "utf-8").split(`\n`);

  //Loop through array of records
  for (const line of lines) {
    //Use regex to extract the bytes at the end of the string
    const match = line.match(/(\d+)$/);
    if (match) {
      const bytes = parseInt(match[1]);
      if (bytes > 5000) {
        largeResponses++;
        totalSumLargeResponseBytes += bytes;
      }
    }
  }

  const output = `${largeResponses}\n${totalSumLargeResponseBytes}`;
  console.log(output);
  fs.writeFileSync(outputFileName, output, "utf-8");
}
