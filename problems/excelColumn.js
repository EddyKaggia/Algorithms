// "Given a column title as appear in an Excel sheet, return its corresponding column number.
// Example: (A -> 1, B -> 2, AA -> 27, AB -> 28)"		

function titleToNumber(title) {
    let result = 0;
    for (let i = 0; i < title.length; i++) {
      let charCode = title.charCodeAt(i) - 64; // subtract 64 to convert from ASCII code to alphabetical position
      result += charCode * Math.pow(26, title.length - 1 - i); // add the value of the current character multiplied by the appropriate power of 26
    }
    return result;
  }

  console.log(titleToNumber('BB'))