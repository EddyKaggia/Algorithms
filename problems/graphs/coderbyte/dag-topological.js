// Given a DAG (DIRECTED ACYCLIC GRAPH) return the topological ordering

// Return a list so that no node that a node points to is before it in the list

// Some valid answers would be:
// [A,E,B,D,F,C]

/*

A ----> C <---- E
|               |
|               |
|               |
v               v
B ----> D ----> F

*/

// Node Class

class Node {
  constructor(value) {
    this.value = value;
    this.edgesList = [];
  }

  connected(node) {
    this.edgesList.push(node);
  }

  adjacentNodes() {
    return this.edgesList.map((edge) => edge.value);
  }

  isConnected(node) {
    return this.edgesList.includes(node);
  }
}

//Graph Class

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  addToGraph(node) {
    this.nodes.push(node);
  }

  topologicalSort() {
    const visited = new Set();
    const topOrdering = [];
    for (const node of this.nodes) {
      this.dfs(node, visited, topOrdering);
    }
    console.log(topOrdering.reverse());
  }

  dfs(start, visited, topOrdering) {
    if (visited.has(start)) return;
    visited.add(start);

    console.log("Visiting node: ", start.value);

    for (const adjacency of start.edgesList) {
      this.dfs(adjacency, visited, topOrdering);
    }
    topOrdering.push(start.value);
  }
}

const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");
const nodeF = new Node("F");

nodeA.connected(nodeB);
nodeA.connected(nodeC);
nodeE.connected(nodeC);
nodeE.connected(nodeF);
nodeB.connected(nodeD);
nodeD.connected(nodeF);

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE, nodeF]);

graph.topologicalSort();
