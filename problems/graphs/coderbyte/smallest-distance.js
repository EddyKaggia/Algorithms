/*
Given a  graph of users and their connections, find the smallest distance between two users

* -> NEED TO KEEP TRACK OF PATHS
*/

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

//Graph Class

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  addToGraph(node) {
    this.nodes.push(node);
  }

  recontructPath(visitedNodes, startNode, endNode) {
    let currNode = endNode;

    const shortestPath = [];
    while (currNode !== null) {
      shortestPath.push(currNode);
      currNode = visitedNodes[currNode.value];
    }

    return shortestPath.reverse();
  }

  bfs(start, end) {
    const queue = [start];
    const visitedNodes = {};
    visitedNodes[start.value] = null;

    while (queue.length > 0) {
      const node = queue.shift();

      if (node.value === end.value) {
        console.log("Found it!");
        return this.recontructPath(visitedNodes, start, end);
      }

      // add neighbors to queue
      // track where we are coming from

      for (const adjacency of node.edgesList) {
        if (!visitedNodes.hasOwnProperty(adjacency.value)) {
          visitedNodes[adjacency.value] = node;
          queue.push(adjacency);
          //   console.log(adjacency.value);
        }
      }
    }
  }
}

const Hannah = new Node("Hannah");
const Mary = new Node("Mary");
const Mel = new Node("Mel");
const Max = new Node("Max");
const Dan = new Node("Dan");
const Nis = new Node("Nis");
const Chris = new Node("Chris");
const Nicolette = new Node("Nicolette");
const Yair = new Node("Yair");
const Mabel = new Node("Mabel");
const Liz = new Node("Liz");

Hannah.connected(Mary);
Hannah.connected(Nis);
Hannah.connected(Liz);
Hannah.connected(Max);
Hannah.connected(Mel);
Mel.connected(Max);
Nis.connected(Dan);
Nis.connected(Yair);
Nis.connected(Chris);
Liz.connected(Yair);
Liz.connected(Mabel);
Chris.connected(Yair);
Chris.connected(Nicolette);
Yair.connected(Mabel);

const graph = new Graph([
  Hannah,
  Mary,
  Mel,
  Max,
  Dan,
  Nis,
  Chris,
  Nicolette,
  Yair,
  Mabel,
  Liz,
]);

console.log(graph.bfs(Hannah, Mabel));
