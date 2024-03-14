// DEPTH-FIRST TRAVERSAL/ DEPTH-FIRST SEARCH

// Traverses DEEPLY into the data structure by exploring all nodes on a branch until you reach the node you are searching for or a dead end
// BACKTRACK up the branch until you reach a new branch to explore
// Uses a STACK data structure

// BIG O
// TC: O(v + e) -> v is the number of vertices and e is the number of edges
// SC: O(v)

//Types of problems for DFS?
/*
-> Detecting a CYCLE
-> Discover whether a graph is BIPARTITE
    - A graph whose vertices can be divided into TWO INDEPENDENT SETS such that every edge connects a vertex in the first set to one in the second set
-> Finding a path between two nodes (not necessarily the shortest path)
-> Topological sorting
    - Where every node in a DAG (DIRECTED ACYCLIC GRAPH) appears before all teh nodes it points to
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

  dfs(start, end, visitedNodes) {
    // Keep traversing deeply
    // 1st Base Case: Until you hit leaf node
    // 2nd Base Case: Or you are at end node

    if (!visitedNodes) {
      visitedNodes = new Set();
    }

    if (start.value === end.value) {
      console.log("Found it!");
      return;
    }

    console.log("Visiting node: ", start.value);
    visitedNodes.add(start);

    for (const adjacency of start.edgesList) {
      if (!visitedNodes.has(adjacency)) {
        this.dfs(adjacency, end, visitedNodes);
      }
    }
  }
}

/*
      BOS
        \
DFW ---- JFK ---- MIA ---- MCO
    \                \      |
     \                 \    |
      \                  \  |
        \                 \ |
HNL ---- LAX ---- EWR     PBI
          |
          |
HKG ---- SAN
*/

const DFW = new Node("DFW");
const LAX = new Node("LAX");
const HNL = new Node("HNL");
const EWR = new Node("EWR");
const SAN = new Node("SAN");
const HKG = new Node("HKG");
const JFK = new Node("JFK");
const BOS = new Node("BOS");
const MIA = new Node("MIA");
const MCO = new Node("MCO");
const PBI = new Node("PBI");

DFW.connected(LAX);
DFW.connected(DFW);
JFK.connected(BOS);
JFK.connected(MIA);
MIA.connected(MCO);
MIA.connected(PBI);
PBI.connected(MCO);
LAX.connected(HNL);
LAX.connected(EWR);
LAX.connected(SAN);
SAN.connected(HKG);

const graph = new Graph([
  DFW,
  LAX,
  HNL,
  EWR,
  SAN,
  HKG,
  JFK,
  BOS,
  MIA,
  MCO,
  PBI,
]);

console.log(graph.dfs(DFW, HKG));
