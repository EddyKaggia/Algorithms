/*
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

 

Example 1:


Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]
Example 2:


Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]

*/

const updateMatrix = function (mat) {
  let dirs = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  let queue = [];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j, 0]);
      } else {
        mat[i][j] = Infinity;
      }
    }
  }

  //bfs

  while (queue.length) {
    let [currX, currY, dist] = queue.shift();

    if (mat[currX][currY] > dist) {
      mat[currX][currY] = dist;
    }

    for (let [x, y] of dirs) {
      let [nextX, nextY, nextVal] = [currX + x, currY + y, dist + 1];

      if (
        nextX < 0 ||
        nextX > mat.length - 1 ||
        nextY < 0 ||
        nextY > mat[0].length - 1
      )
        continue;

      if (mat[nextX][nextY] === Infinity) {
        queue.push([nextX, nextY, nextVal]);
      }
    }
  }
  return mat;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
); // [[0,0,0],[0,1,0],[0,0,0]]
console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
); // [[0,0,0],[0,1,0],[1,2,1]]
