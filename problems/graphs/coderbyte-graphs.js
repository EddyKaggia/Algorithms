/*
How do we represent a graph in code?
*/

// Vertex list + Edge list

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

console.log(findAdjacentNodes("E"));

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

console.log(isConnected("C", "A"));

// Adjacency Matrix

const vertices2 = ["A", "B", "C", "D", "E"];

const adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];
