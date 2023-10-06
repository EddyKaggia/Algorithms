/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


                          1
                        1  1
                       1  2  1
                      1  3  3  1
                     1  4  6  4  1
 

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 

Constraints:

0 <= rowIndex <= 33
 

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?
*/

const getRow = (rowIndex) => {
    //Output array
    const row = [];
    
    //Return empty array if rowIndex is negative
    if (rowIndex < 0) return row;

    //Add 1 to array
    row.push(1);

    //Loop until we get to 3rd index/ 4th level of triangle
    for (let i = 1; i <= rowIndex; i++) {
        //Loop 
        for (let j = row.length - 1; j > 0; j--) {
            row[j] = row[j - 1] + row [j];
        }

        //
        row.push(1);
    }

    //return output array
    return row;
}

console.log(getRow(3)); //[1,3,3,1]