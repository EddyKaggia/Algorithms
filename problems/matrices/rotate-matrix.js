/*
Given an image represented by an N X N matrix, where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

/*
I: nxn matrix | Square matrix
O: rotated matrix 90 deg clockwise
C: rotate matrix in place, optimize
E: Empty matrix, even and odd values of n
*/

function rotateMatrix(matrix) {
  const n = matrix.length;

  //Layer reps each layer/level/ROWS of teh matrix. Only halfway iteration to prevent 360deg rotation
  for (let layer = 0; layer < Math.floor(n / 2); layer++) {
    //First and last indices
    const first = layer;
    const last = n - 1 - layer;

    //Iterate through each layer COLUMNS
    for (let i = first; i < last; i++) {
      //The offset identifies the corresponding elements that need to be swapped
      const offset = i - first;
      console.log(offset);

      // Save the top element
      const top = matrix[first][i];
      console.log(top);

      // Move left to top
      matrix[first][i] = matrix[last - offset][first];

      // Move bottom to left
      matrix[last - offset][first] = matrix[last][last - offset];

      // Move right to bottom
      matrix[last][last - offset] = matrix[i][last];

      // Move top to right
      matrix[i][last] = top;
    }
  }
}

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotateMatrix(matrix);

console.log(matrix);
