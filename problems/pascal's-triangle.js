/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

                         1
                        1 1
                       1 2 1
                      1 3 3 1
                     1 4 6 4 1

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
*/

const generate = (numRows) => {
    const output = [];

    if (numRows >= 1) output.push([1]);
    if (numRows >= 2) output.push([ 1, 1 ]);

    for (let i = 2;  i < numRows; i++) {
        // const prevArr = output[i - 1];

        if (output[i - 1].length === 2) {
            output.push([1, 2, 1]);
        } else {
            let left = 0;
            let right = 1;
            let add = [];

            while ( right < output[i - 1].length) {
                add.push(output[i - 1][left] + output[i - 1][right]);
                left++;
                right++;
            }
            output.push([1, ...add, 1]);
        }
    }

    return output;
}

console.log(generate(3)); //[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]