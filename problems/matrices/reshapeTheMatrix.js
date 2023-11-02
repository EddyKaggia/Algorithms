/*
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

 

Example 1:


Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]
Example 2:


Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]
*/

const matrixReshape = (mat, r, c) => {
    let rows = mat.length;
    let columns = mat[0].length;

    if (rows * columns !== r * c) {
        return mat;
    }

    const long_list = [];
    const output = [];

    for (let row of mat) {
        for (let column of row) {
            long_list.push(column);
        }
    }
    console.log(long_list)


    for (let i = 0; i < long_list.length; i += c) {
        output.push(long_list.slice(i, i + c));
    }

    return output;
}

// console.log(matrixReshape([[1,2],[3,4]], 1, 4)); // Output: [[1,2,3,4]]
// console.log(matrixReshape([[1,2],[3,4]], 2, 4)); // Output: [[1,2],[3,4]]
console.log(matrixReshape([[1,2,3],[4,5,6],[7,8,9], [10,11,12]], 2, 6)); // Output: [[1,2],[3,4]]

