/*
Given a n x n matrix. The problem is to sort the given matrix in strict order. Here strict order means that the matrix is sorted in a way such that all elements in a row are sorted in increasing order and for row ‘i’, where 1 <= i <= n-1, the first element of row ‘i’ is greater than or equal to the last element of row ‘i-1’.
*/

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let minIndex = i;
      for (let k = i; k < n; k++) {
        if (arr[k][j] < arr[minIndex][j]) {
          minIndex = k;
        }
      }

      // Swap the elements
      const temp = arr[i][j];
      arr[i][j] = arr[minIndex][j];
      arr[minIndex][j] = temp;
    }
  }
}

function sortMatrixInStrictOrder(matrix) {
  const compareFn = (a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return b[0] - a[0];
  };

  matrix.sort(compareFn);

  return matrix;
}

const unsortedMatrix = [
  [5, 4, 7],
  [1, 3, 8],
  [2, 9, 6],
];

console.log(sortMatrixInStrictOrder(unsortedMatrix));
