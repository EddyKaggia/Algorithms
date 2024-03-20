/*
There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.
*/

// SOLUTION 1

const validPath = (n, edges, source, destination) => {
  // Create an adjacency list to represent the graph
  const adjacencyList = {};
  for (const [u, v] of edges) {
    if (!adjacencyList[u]) adjacencyList[u] = [];
    if (!adjacencyList[v]) adjacencyList[v] = [];
    adjacencyList[u].push(v);
    adjacencyList[v].push(u);
  }

  // Create a visited array to keep track of visited vertices
  const visited = new Array(n).fill(false);

  // Define DFS function
  const dfs = (vertex) => {
    // Mark the current vertex as visited
    visited[vertex] = true;

    // If the current vertex is the destination, return true
    if (vertex === destination) return true;

    // Explore all adjacent vertices
    if (adjacencyList[vertex]) {
      for (const neighbor of adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          // If the neighbor can reach the destination, return true
          if (dfs(neighbor)) return true;
        }
      }
    }

    // If destination is not found from this vertex, return false
    return false;
  };

  // Start DFS from the source vertex
  return dfs(source);
};

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);
console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);

// SOLUTION 2

const validPath2 = (n, edges, source, destination) => {
  const adjacencyList = {};
  for (const [o, d] of edges) {
    if (!adjacencyList[o]) adjacencyList[o] = [];
    if (!adjacencyList[d]) adjacencyList[d] = [];
    adjacencyList[o].push(d);
    adjacencyList[d].push(o);
  }

  function bfs(source, destination) {
    const queue = [source];

    const visitedNodes = new Set();
    visitedNodes.add(source);

    while (queue.length > 0) {
      const node = queue.shift();

      if (node === destination) {
        return true;
      }

      for (const adjacency of adjacencyList[node]) {
        if (!visitedNodes.has(adjacency)) {
          queue.push(adjacency);
          visitedNodes.add(adjacency);
        }
      }
    }

    return false;
  }

  return bfs(source, destination);
};

console.log(
  validPath2(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);
console.log(
  validPath2(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);
