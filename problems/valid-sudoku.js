// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

const { set } = require("mongoose");

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

const isValidSudoku = function(board) {
    // const isUsedInRow = new Array(9).fill(0).map(_ => new Array());
    // const isUsedInCol = new Array(9).fill(0).map(_ => new Array());
    // const isUsedInSub = new Array(9).fill(0).map(_ => new Array());

    // for (let i = 0; i< 9; i++) {
    //     for (let j = 0; j < 9; j++) {
    //         const num = board[i][j]

    //         if (num === '.') continue;
    //         const subBoxIndex = Math.floor(i / 3) + Math.floor(j / 3) * 3;
    //         if (isUsedInRow[i][num] || isUsedInCol[j][num] || isUsedInSub[subBoxIndex][num]) {
    //             return false;
    //         }
    //         isUsedInRow[i][num] = true;
    //         isUsedInCol[j][num] = true;
    //         isUsedInSub[subBoxIndex][num] = true;
    //         console.log(isUsedInRow, isUsedInCol, isUsedInSub);

    //     }
    // }
    // return true;

    const rowSet = new Set();
    const columnSet = new Set();
    const boxSet = new Set();

    for (let i = 0; i < board.length; i++) {
        const row = board[i];

        for (let j = 0; j < board.length; j++) {
            const rowNumber = row[j];
            const columnNumber = board[j][i];
            const boxCharacter = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][((i * 3) % 9) + (j % 3)];

            if (rowNumber !== ".") {
                if (rowSet.has(rowNumber)) return false;
                rowSet.add(rowNumber);
            }

            if (columnNumber !== ".") {
                if (columnSet.has(columnNumber)) return false;
                columnSet.add(columnNumber);
            }

            if (boxCharacter !== ".") {
                if (boxSet.has(boxCharacter)) return false;
                boxSet.add(boxCharacter);
            }
        }

        rowSet.clear();
        columnSet.clear();
        boxSet.clear();
    }
    return true;
};

const board1 = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

const board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board1)); //true
console.log(isValidSudoku(board2)); //false