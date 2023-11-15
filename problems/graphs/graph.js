class Graph {
  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node) {
    this.adjList[node.value] = {
      node: node,
      edges: [],
    };
  }

  addEdge(node1, node2) {
    this.adjList[node1.value].edges.push(node2);
    this.adjList[node2.value].edges.push(node1);
  }

  removeNode(node) {
    delete this.adjList[node.value];
    const keys = Object.keys(this.adjList);

    nodes.forEach((currNode) => {
      this.adjList;
    });
  }

  removeEdge(node1, node2) {}

  depthFirstTraversal(startingNode, func = console.log) {}

  breadthFirstTraversal(startingNode, func = console.log) {}
}

const adjList = new Graph();
const node1 = { value: 1 };
const node2 = { value: 2 };
adjList.addNode(node1);
adjList.addNode(node2);
adjList.addEdge(node1, node2);

console.log(adjList);
