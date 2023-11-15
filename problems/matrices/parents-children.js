/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique positive integer identifier.

For example, in this diagram, 6 and 8 have common ancestors of 4 and 14.

          15
          /\
      14 13 21
      |  |
1 2   4  12
\ /  /|\ /
 3  5 8 9
  \/ \   \
   6  7   11

pairs = [
    (1,3), (2,3), (3,6), (5,6), (5,7), (4,5),
    (15,21), (4,8), (4,9), (9,11), (14,4), (13, 12),
    (12,9), (15,13)
]

Write a function that takes this data and teh identifiers of two individuals as inputs and returns true if and only if they share at least one ancestor.

Sample input and output:

hasCommonAncestor(pairs, 3, 8) => false
hasCommonAncestor(pairs, 5, 8) => true
hasCommonAncestor(pairs, 6, 8) => true
hasCommonAncestor(pairs, 6, 9) => true
hasCommonAncestor(pairs, 1, 3) => false
hasCommonAncestor(pairs, 3, 1) => false
hasCommonAncestor(pairs, 7, 11) => true
hasCommonAncestor(pairs, 6, 5) => true
hasCommonAncestor(pairs, 5, 6) => true
hasCommonAncestor(pairs, 3, 6) => true
hasCommonAncestor(pairs, 21, 11) => true

n: number of pairs in the input
*/

function haveCommonAncestor(pairs, individual1, individual2) {
  // Create an adjacency list to represent the graph
  const parents = new Map();

  for (const [parent, child] of pairs) {
    if (!parents.has(parent)) {
      parents.set(parent, new Set());
    }

    if (!parents.has(child)) {
      parents.set(child, new Set());
    }

    parents.get(child).add(parent);
  }

  const dfs = (node, fn) => {
    if (!node) {
      return false;
    }

    if (fn(node)) {
      return true;
    }

    for (const nextParent of parents.get(node)) {
      if (fn(nextParent)) {
        return true;
      }
      if (dfs(nextParent, fn)) {
        return true;
      }
    }

    return false;
  };

  const ancestorsOfA = new Set();

  dfs(individual1, (node) => {
    ancestorsOfA.add(node);
    return false;
  });

  return dfs(individual2, (node) => {
    return ancestorsOfA.has(node);
  });
}

const pairs = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [15, 21],
  [4, 8],
  [4, 9],
  [9, 11],
  [14, 4],
  [13, 12],
  [12, 9],
  [15, 13],
];

console.log(haveCommonAncestor(pairs, 3, 8)); //=> false
console.log(haveCommonAncestor(pairs, 5, 8)); //=> true
console.log(haveCommonAncestor(pairs, 6, 8)); //=> true
console.log(haveCommonAncestor(pairs, 6, 9)); //=> true
console.log(haveCommonAncestor(pairs, 1, 3)); //=> false
console.log(haveCommonAncestor(pairs, 3, 1)); //=> false
console.log(haveCommonAncestor(pairs, 7, 11)); //=> true
console.log(haveCommonAncestor(pairs, 6, 5)); //=> true
console.log(haveCommonAncestor(pairs, 21, 11)); //=> true

/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique positive integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

1   2   4           30
 \ /   / \           \
  3   5   9   15     16
   \ / \    \ /
    6   7    12

Sample input/output (pseudodata):

pairs = [
    (5,6), (1,3), (2,3), (3,6), (15,12),
    (5,7), (4,5), (4,9), (9,12), (30, 16)
]

Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.

Output may be in any order:

findNodesWithZeroAndOneParents(pairs) => {
    [1, 2, 4, 15, 30], // Individuals with zero known parents
    [5, 7, 9, 16]      // Individuals with exactly one parent
}

Complexity Analysis variables:

n: number of pairs in the input
*/

const findNodesWithZeroAndOneParents = (pairs) => {
  const parentCount = new Map();

  for (const [parent, child] of pairs) {
    if (!parentCount.has(parent)) {
      parentCount.set(parent, 0);
    }

    if (!parentCount.has(child)) {
      parentCount.set(child, 0);
    }

    parentCount.set(child, parentCount.get(child) + 1);
  }

  const zeroParents = [];
  const oneParent = [];

  for (const [node, count] of parentCount) {
    if (count === 0) {
      zeroParents.push(node);
    }

    if (count === 1) {
      oneParent.push(node);
    }
  }

  return [zeroParents, oneParent];
};

const pairs2 = [
  [5, 6],
  [1, 3],
  [2, 3],
  [3, 6],
  [15, 12],
  [5, 7],
  [4, 5],
  [4, 9],
  [9, 12],
  [30, 16],
];

console.log(findNodesWithZeroAndOneParents(pairs2)); //[1, 2, 4, 15, 30], [5, 7, 9, 16]

/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique positive integer identifier.

For example, in this diagram, the earliest of 6 is 14, and the earliest ancestor of 15 is 2.

          14
          |
  2       4
  |     / | \
  3   5   8  9
 / \ / \      \
15  6   7     11

Write a function that, for a given individual in our dataset, return their earliest known ancestor -- the one at the farthest distance from the input individual. If there is more than one ancestor tied for "earliest", return any one of them. If the input individual has no parents, the function should return null (or -1)

pairs1 = [
    (2,3), (3,15), (3,6), (5,6), (5,7),
    (4,5), (4,8), (4,9), (9,11), (14,4)
]

findEarliestAncestor(pairs1, 8) => 14
findEarliestAncestor(pairs1, 7) => 14
findEarliestAncestor(pairs1, 6) => 14
findEarliestAncestor(pairs1, 15) => 2
findEarliestAncestor(pairs1, 14) => null or -1
findEarliestAncestor(pairs1, 11) => 14

Additional example:

  14
  |
  2       4    1
  |     / | \ /
  3   5   8  9
 / \ / \      \
15  6   7     11

pairs2 = [
    (2,3), (3,15), (3,6), (5,6), (5,7),
    (4,5), (4,8), (4,9), (9,11), (14,2), (1,9)
]

findEarliestAncestor(pairs2, 8) => 4
findEarliestAncestor(pairs2, 7) => 4
findEarliestAncestor(pairs2, 6) => 14
findEarliestAncestor(pairs2, 15) => 14
findEarliestAncestor(pairs2, 14) => null or -1
findEarliestAncestor(pairs2, 11) => 4 or 1

n: number of pairs in the input
*/

const findEarliestAncestor = (pairs, individual) => {
  //   const parentCount = new Map();

  //   for (const [parent, child] of pairs) {
  //     if (!parentCount.has(parent)) {
  //       parentCount.set(parent, 0);
  //     }

  //     if (!parentCount.has(child)) {
  //       parentCount.set(child, 0);
  //     }

  //     parentCount.set(child, parentCount.get(child) + 1);
  //   }

  //   console.log(parentCount);

  const graph = {};
  for (const [parent, child] of pairs) {
    if (!graph[child]) {
      graph[child] = [];
    }
    graph[child].push(parent);
  }

  // Helper function for DFS
  function dfs(node) {
    if (!graph[node]) {
      return [node];
    }

    let earliestAncestors = [];
    for (const parent of graph[node]) {
      const ancestors = dfs(parent);
      earliestAncestors = earliestAncestors.concat(ancestors);
    }

    return earliestAncestors;
  }

  // Perform DFS starting from the given individual
  const result = dfs(individual);

  console.log(graph);
  // If there are no parents, return null
  if (result.length === 1 && result[0] === individual) {
    return null;
  }

  // Return any one of the earliest ancestors
  return result[result.length - 1];
};

pairs1 = [
  [2, 3],
  [3, 15],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [9, 11],
  [14, 4],
];

console.log(findEarliestAncestor(pairs1, 8)); //=> 14
console.log(findEarliestAncestor(pairs1, 7)); //=> 14
console.log(findEarliestAncestor(pairs1, 6)); //=> 14
console.log(findEarliestAncestor(pairs1, 15)); // => 2
console.log(findEarliestAncestor(pairs1, 14)); // => null or -1
console.log(findEarliestAncestor(pairs1, 11)); // => 14
