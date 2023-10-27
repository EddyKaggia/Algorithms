/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique positive integer identifier.

For example, in this diagram, the earliest ancestor of 6 is 14, and the earliest ancestor of 15 is 2. 

         14
         |
  2      4
  |    / | \
  3   5  8  9
 / \ / \     \
15  6   7    11

Write a function that, for a given individual in our dataset, returns their earliest known ancestor -- the one at the farthest distance from the input individual. If there is more than one ancestor tied for "earliest", return any one of them. If the input individual has no parents, the function should return null (or -1).

Sample input and output:

pairs1 = [
    (2, 3), (3, 15), (3, 6), (5, 6), (5, 7),
    (4, 5), (4, 8), (4, 9), (9, 11), (14, 4),
]


Additional example:

  14
  |
  2      4    1
  |    / | \ /
  3   5  8  9
 / \ / \     \
15  6   7    11

pairs2 = [
    (2, 3), (3, 15), (3, 6), (5, 6), (5, 7),
    (4, 5), (4, 8), (4, 9), (9, 11), (14, 2), (1, 9)
]


n: number of pairs in the input
*/

const pairs1 = [
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

const pairs2 = [
  [2, 3],
  [3, 15],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [9, 11],
  [14, 2],
  [1, 9],
];

const q3 = (pairs, start) => {
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

    for (const nextParent of parents.get(node)) {
      if (fn(node, nextParent)) {
        return true;
      }
      if (dfs(nextParent, fn)) {
        return true;
      }
    }

    return false;
  };

  const heights = new Map(); // node -> "height"

  heights.set(start, 0);
  let bestNode = -1;
  let bestHeight = 0;

  dfs(start, (child, parent) => {
    const curHeight = heights.get(child) + 1;
    heights.set(parent, curHeight);

    if (bestHeight < curHeight) {
      bestNode = parent;
      bestHeight = curHeight;
    }
  });

  return bestNode;
};

console.log(q3(pairs1, 8)); // => 14
console.log(q3(pairs1, 7)); // => 14
console.log(q3(pairs1, 6)); // => 14
console.log(q3(pairs1, 15)); // => 2
console.log(q3(pairs1, 14)); // => null or -1
console.log(q3(pairs1, 11)); // => 14
console.log(q3(pairs2, 8)); // => 4
console.log(q3(pairs2, 7)); // => 4
console.log(q3(pairs2, 6)); // => 14
console.log(q3(pairs2, 15)); // => 14
console.log(q3(pairs2, 14)); // => null or -1
console.log(q3(pairs2, 11)); // => 4 or 1

const q2 = (pairs, a, b) => {
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

  dfs(a, (node) => {
    ancestorsOfA.add(node);
    return false;
  });

  // console.log(ancestorsOfA);
  return dfs(b, (node) => {
    return ancestorsOfA.has(node);
  });
};

const q1 = (pairs) => {
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
    if (count == 0) {
      zeroParents.push(node);
    }
    if (count == 1) {
      oneParent.push(node);
    }
  }

  return [zeroParents, oneParent];
};

const parent_child_pairs = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [9, 11],
];

const is_parent_of = (arr, val1, val2) => {
  //Iterate over the 2d array
  // for(const [parent, child] of arr) {}

  for (const [parent, child] of arr) {
    if (parent === val1 && child === val2) {
      return true;
    }
    return false;
  }
};

//Input: arra
//output: arr of unique values
const uniqueVals = (arr) => {
  const output = new Set();

  for (const val of arr) {
    for (const element of val) {
      if (!output.has(element)) {
        output.add(element);
      }
    }
  }

  return output;
};

//Input: array
//Output: 2 arrays=> 1 containing parent elems & 1 containing child elements
const reunionDinner = (arr) => {
  //Iterate over the input array
  const parents = new Set();
  const children = new Set();
  const checkList = uniqueVals(arr);

  for (const [parent, child] of arr) {
    // console.log(checkList);

    for (const element of checkList) {
      if (element === parent) {
        parents.add(element);
      }
    }
  }

  for (const element of checkList) {
    if (!parents.has(element)) {
      children.add(element);
    }
  }

  console.log(children);

  // return parents, children;
};
