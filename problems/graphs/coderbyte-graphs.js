/*
How do we represent a graph in code?
*/

// VERTEX LIST list + EDGE LIST

//TC to find adjacent nodes -> O(e) where e is teh number of edges
//TC to check if two nodes are connected -> O(e)
//SC -> O(v+e) where v is number of vertices and e is number of edges

/*
       A----B
       |   /
       |  C
       | / \  
       D----E  
*/
const vertices = ["A", "B", "C", "D", "E"];

const edges = [
  ["A", "B"],
  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];

// 1) FIND ADJACENT NODES

const findAdjacentNodes = function (node) {
  // Output array
  const adjacentNodes = [];

  // Loop through edges array
  for (const [first, second] of edges) {
    // If first elem in subarray push second into output array
    if (first === node) {
      adjacentNodes.push(second);
      // If second elem in subarray push first into output array
    } else if (second === node) {
      adjacentNodes.push(first);
    }
  }

  return adjacentNodes;
};

console.log(findAdjacentNodes("A"));

// 2) ARE NODES CONNECTED

const isConnected = function (node1, node2) {
  for (const [first, second] of edges) {
    if (
      (first === node1 && second === node2) ||
      (first === node2 && second === node1)
    ) {
      return true;
    }
  }
  return false;
};

console.log(isConnected("D", "B"));

// ADJACENCY MATRIX

// TC to find adjacent nodes: O(v) where v is the number of vertices
// TC to check if two nodes are connected: O(1)
// SC: O(V^2) where v is the number of vertices

const vertices2 = ["A", "B", "C", "D", "E"];

const verticesIdx = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};

const adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

// 1) FIND ADJACENT NODES

const findAdjacentNodes2 = (node) => {
  const adjacentNodes = [];

  // Iterate through vertices array
  for (let i = 0; i < vertices2.length; i++) {
    nodeVertex = verticesIdx[node];

    if (adjacencyMatrix[nodeVertex][i] === 1) {
      adjacentNodes.push(vertices2[i]);
    }
  }

  //Iterate through row, and check if any node = 1, if yes, push into output array

  return adjacentNodes;
};

console.log(findAdjacentNodes2("A")); // ["B", "D"]
console.log(findAdjacentNodes2("C")); // ["B", "D", "E"]

// 2) ARE NODES CONNECTED

const isConnected2 = (node1, node2) => {
  const nodeIdx1 = verticesIdx[node1];
  const nodeIdx2 = verticesIdx[node2];

  return !!adjacencyMatrix[nodeIdx1][nodeIdx2];
};

console.log(isConnected2("A", "B")); //True
console.log(isConnected2("A", "E")); //False
console.log(isConnected2("C", "D")); //True
console.log(isConnected2("C", "A")); //False
