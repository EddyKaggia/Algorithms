/*
Imagine we are building an AI to play a computer game in which a player moves around a two-dimensional grid filled with stationary monsters. 

Monsters look very scary, and if a player looks vertically or horizontally and sees a monster, they become scared.

Write a function that takes a board, and returns the following information:
 - Player's location, such as the row and column indexes
 - Number of spaces between the player and the closest scary monster they can see vertically or horizontally.

Board constraints:
 - The board is a two-dimensional grid of characters
 - An empty space on the board is represented by a dash '-'
 - The player is denoted by the letter 'P'
 - Monsters are denoted by the letter 'M'

Sample input and output:
board1 = [
  ['-', '-', '-', 'M', '-', '-'],
  ['-', '-', '-', '-', 'M', '-'],
  ['-', 'M', '-', 'P', '-', '-'],
  ['M', '-', '-', '-', '-', '-'],
  ['-', 'M', '-', '-', '-', '-'],
]
Expected Output (in any format): 
(2,3), 1

board2 = [
  ['P', '-', '-', '-', '-', '-'],
  ['-', '-', 'M', '-', 'M', '-'],
  ['-', '-', '-', '-', '-', '-'],
  ['M', '-', '-', 'M', '-', '-'],
  ['-', 'M', '-', '-', '-', '-'],
]
Expected Output (in any format): 
(0,0), 2

board3 = [
  ['M', 'M', 'M'],
  ['-', '-', 'P'],
]
Expected Output (in any format): 
(1,2), 0

You may return the player's location in whatever form you'd like. A standard approach that you are welcome to use is to define the top-left corner of the board as (0,0), and give coordinates in (row,column) order.

detect(board1) => (2,3), 1
detect(board2) => (0,0), 2
detect(board3) => (1,2), 0

Complexity Analysis variables:
r = number of rows
c = number of columns
*/

"use strict";

//Input: array of strings
//Output: Integer (represent the number of elements between the two indices)

// function playerPosition (arrayOfStrs) {
//   //Iterate over the array
//   for (let i = 0; i < arrayOfStrs.length; i++) {
//     //Conditional to check if the current element is the string 'P'
//     if (arrayOfStrs[i] === 'P') {
//       return i;
//     }
//   }
// }

// function distance (arrayOfMonsters) {
//   let p;
//   let m;
//   //Iterate over teh array identifying teh indices of each monster
//   for (let i = 0; i < arrayOfMonsters.length; i++) {
//     if (arrayOfMonsters[i] === 'P') {
//       p = i;
//     } else if (arrayOfMonsters[i] === 'M') {
//       m = i;
//     }
//   }
//   return Math.abs(p - m) - 1;
// }

const player_position = (board) => {
  //Use two variables to hold teh position of the element
  let row = 0;
  let column = 0;

  //Iterate over the input array
  for (let i = 0; i < board.length; i++) {
    //Iterate over each individual array
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "P") {
        row = i;
        column = j;
      }
    }
  }
  return [row, column];
};

function detect(board) {
  // Variables to store the player's location
  let playerRow = -1;
  let playerCol = -1;

  // Find the player's location
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "P") {
        playerRow = i;
        playerCol = j;
        break;
      }
    }
    if (playerRow !== -1) {
      break;
    }
  }

  // Variables to store the minimum distance to a scary monster
  let minDistance = Infinity;

  // Check horizontally for scary monsters
  for (let i = 0; i < board.length; i++) {
    if (board[i][playerCol] === "M") {
      minDistance = Math.min(minDistance, Math.abs(playerRow - i));
    }
  }

  // Check vertically for scary monsters
  for (let j = 0; j < board[playerRow].length; j++) {
    if (board[playerRow][j] === "M") {
      minDistance = Math.min(minDistance, Math.abs(playerCol - j));
    }
  }

  // Return the player's location and the minimum distance
  return {
    playerLocation: { row: playerRow, col: playerCol },
    minDistance: minDistance - 1,
  };
}

const board1 = [
  ["-", "-", "-", "M", "-", "-"],
  ["-", "-", "-", "-", "M", "-"],
  ["-", "M", "-", "P", "-", "-"],
  ["M", "-", "-", "-", "-", "-"],
  ["-", "M", "-", "-", "-", "-"],
];
// returns (2,3), 1

console.log(detect(board1));

const board2 = [
  ["P", "-", "-", "-", "-", "-"],
  ["-", "-", "M", "-", "M", "-"],
  ["-", "-", "-", "-", "-", "-"],
  ["M", "-", "-", "M", "-", "-"],
  ["-", "M", "-", "-", "-", "-"],
];
// returns (0,0), 2
console.log(detect(board2));

const board3 = [
  ["M", "M", "M"],
  ["-", "-", "P"],
];
// returns (1,2), 0
console.log(detect(board3));
