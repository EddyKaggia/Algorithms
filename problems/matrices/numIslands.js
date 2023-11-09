/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 
*/

//DFS

const numIslandsDFS = (grid) => {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count += dfs(grid, i, j);
      }
    }
  }

  function dfs(grid, row, col) {
    //base cases
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[row].length ||
      grid[row][col] === "0"
    )
      return;

    grid[row][col] = "0";

    dfs(grid, row + 1, col);
    dfs(grid, row - 1, col);
    dfs(grid, row, col + 1);
    dfs(grid, row, col - 1);

    return 1;
  }

  return count;
};

const numIslandsBFS = (grid) => {
  if (!grid || grid.length === 0) return 0;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
); // 1
console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
); // 3
