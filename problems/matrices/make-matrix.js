/*
Write a function `makeMatrix(m, n, value)` that accepts three arguments. The function should return a 2D array of height `m` and width`n` that contains the `value` as every element.
*/

const makeMatrix = (m, n, value) => {
  const output = [];

  for (let i = 0; i < m; i++) {
    const row = new Array(n).fill(value);
    output.push(row);
  }

  return output;
};

console.log(makeMatrix(3, 5, null)); // [[null, null, null, null, null],[null, null, null, null, null],[null, null, null, null, null],[null, null, null, null, null],[null, null, null, null, null]]
console.log(makeMatrix(4, 2, "x")); // [['x','x'], ['x','x'], ['x','x'], ['x','x']]
console.log(makeMatrix(2, 2, 0)); // [[0,0], [0,0]]
