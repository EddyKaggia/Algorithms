/*
You are tasked with splitting the 7th grade class into two teams for a soccer game. Given a list of students and their "enemies" aka the kids they can't be on the same team with, determine whether it is possible to split the class in two in such a way that no child is on teh same team as any of their enemies. If possible, return two teams.

David: [Lucy, Jose, Chris]
Lucy; [David, Brian, Emily]
Emily: [Lucy, Jack]
Jose: [David, Paul]
Paul: [Jose, Chris]
Chris: [Paul, David, Brian]
Brian: [Lucy, Chris, Jack]
Jack: [Brian, Emily]
*/

/*

 BIPARTITE GRAPH
-----------------

A graph whose vertices can be divided into TWO DISJOINT and INDEPENDENT sets such that every edge connects a vertex in the first set to one in the second set
* CANNOT HAVE AN ODD CYCLE

 GRAPH COLORING
----------------

A way of labeling nodes or edges in a graph
Legal Coloring - a graph coloring such that no neighboring nodes share the same color

*/

// Node Class

class Node {
  constructor(value) {
    this.color = null;
    this.value = value;
    this.edgesList = [];
  }

  connected(node) {
    this.edgesList.push(node);
    node.edgesList.push(this);
  }

  adjacentNodes() {
    return this.edgesList;
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
    node.edgesList.push(this);
  }

  isBipartite() {
    const visited = new Set();
    for (const node of this.nodes) {
      if (!visited.has(node)) {
        if (this.assignLegalColoring(node, visited)) {
          console.log("Graph is Bipartite");
          const redTeam = this.nodes.filter((node) => node.color === "red");
          const blueTeam = this.nodes.filter((node) => node.color === "blue");
          console.log(redTeam.map((e) => e.value));
          console.log(blueTeam.map((e) => e.value));
        } else {
          console.log("Graph is not Bipartite");
        }
      }
    }
  }

  assignLegalColoring(start, visited) {
    console.log(`Visiting node ${start.value}`);
    visited.add(start);

    if (!start.color) {
      start.color = "red";
      console.log(`Assigned color ${start.color} to ${start.value}`);
    }

    for (const adjacency of start.edgesList) {
      if (!visited.has(adjacency)) {
        adjacency.color = start.color === "red" ? "blue" : "red";
        console.log(`Assigned color ${adjacency.color} to ${adjacency.value}`);
        if (!this.assignLegalColoring(adjacency, visited)) {
          return false;
        }
      } else {
        if (start.color === adjacency.color) {
          return false;
        }
      }
    }
    return true;
  }
}

const Jack = new Node("Jack");
const Emily = new Node("Emily");
const Lucy = new Node("Lucy");
const David = new Node("David");
const Brian = new Node("Brian");
const Chris = new Node("Chris");
const Jose = new Node("Jose");
const Paul = new Node("Paul");

const graph = new Graph([Jack, Emily, Lucy, David, Brian, Chris, Jose, Paul]);

David.connected(Lucy);
David.connected(Chris);
David.connected(Jose);
Lucy.connected(Brian);
Lucy.connected(Emily);
Emily.connected(Jack);
Brian.connected(Jack);
Brian.connected(Chris);
Chris.connected(Paul);
Jose.connected(Paul);

console.log(graph.isBipartite());
