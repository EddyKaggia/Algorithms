// BREADTH-FIRST TRAVERSAL/ BREADTH-FIRST SEARCH

// Traverses BROADLY into the data structure by visiting neighbor nodes before children nodes
// Uses a QUEUE data structure

// BIG O
// TC: O(v + e) -> v is the number of vertices and e is the number of edges
// SC: O(v)

// Node Class

class Node {
  constructor(value) {
    this.value = value;
    this.edgesList = [];
  }

  connected(node) {
    this.edgesList.push(node);
    node.edgesList.push(this);
  }

  adjacentNodes() {
    return this.edgesList.map((edge) => edge.value);
  }

  isConnected(node) {
    return this.edgesList.includes(node);
  }
}

// Graph Class

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  addToGraph(node) {
    this.nodes.push(node);
  }

  bfs(startNode, endNode) {
    const queue = [startNode];
    const visitedNodes = new Set();
    visitedNodes.add(startNode);

    while (queue.length > 0) {
      // pull node queue (to visit)
      // add adjacencies to queue

      const node = queue.shift();

      if (node.value === endNode.value) {
        console.log("Found It!");
      }

      for (const adjacency of node.edgesList) {
        if (!visitedNodes.has(adjacency)) {
          queue.push(adjacency);
          visitedNodes.add(adjacency);
        }
      }
      console.log(node.value);
    }
  }
}

/*
       A----B
       |   /
       |  C
       | / \  
       D----E  
*/

const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");

nodeA.connected(nodeB);
nodeA.connected(nodeD);
nodeC.connected(nodeB);
nodeC.connected(nodeD);
nodeC.connected(nodeE);
nodeE.connected(nodeD);

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);

console.log(nodeA.adjacentNodes());

console.log(graph.bfs(nodeA, nodeC));
