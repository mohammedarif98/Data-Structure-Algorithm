

class Graph {
    constructor() {
      this.list = new Map();
    }
  
    addVertex(v) {
      this.list.set(v, []);
    }
  
    addEdge(v, e) {
      this.list.get(v).push(e);
      this.list.get(e).push(v);
    }
    hasEdge(v, e) {
      const vEdges = this.list.get(v);
      if (vEdges) {
        return vEdges.includes(e);
      }
      return false;
    }
    dfsTraversal(startingVertex) {
      let visited = {};
      this.dfsHelper(startingVertex, visited);
    }
    dfsHelper(vertex, visited) {
      visited[vertex] = true;
      console.log(vertex);
      const neighbors = this.list.get(vertex);
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        if (!visited[neighbor]) {
          this.dfsHelper(neighbor, visited);
        }
      }
    }
    bfsTraversal(startingVertex) {
      let visited = {};
      let queue = [];
      visited[startingVertex] = true;
      queue.push(startingVertex);
      while (queue.length > 0) {
        let vertex = queue.shift();
        console.log(vertex);
        let neighbors = this.list.get(vertex);
        for (let i = 0; i < neighbors.length; i++) {
          let neighbor = neighbors[i];
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        }
      }
    }
    printGraph() {
      let key = this.list.keys();
      for (var i of key) {
        let val = this.list.get(i);
        let out = "";
        for (var j of val) {
          out += j + " ";
        }
        console.log(i + " : " + out);
      }
    }
    removeEdge(v, e) {
      const vEdges = this.list.get(v);
      const eEdges = this.list.get(e);
      if (vEdges && eEdges) {
        const vIndex = vEdges.indexOf(e);
        const eIndex = eEdges.indexOf(v);
        if (vIndex !== -1) {
          vEdges.splice(vIndex, 1);
        }
        if (eIndex !== -1) {
          eEdges.splice(eIndex, 1);
        }
      }
    }
    removeVertex(v) {
      const edges = this.list.get(v);
      if (edges) {
        for (const vertex of edges) {
          const vertexEdges = this.list.get(vertex);
          const index = vertexEdges.indexOf(v);
          if (index !== -1) {
            vertexEdges.splice(index, 1);
          }
        }
        this.list.delete(v);
      }
    }
    hasEdge(v, e) {
      const vEdges = this.list.get(v);
      if (vEdges) {
        return vEdges.includes(e);
      }
      return false;
    }
    findShortestDistance(startVertex, endVertex) {
      let visited = {};
      let queue = [];
      let distance = {};
      visited[startVertex] = true;
      queue.push(startVertex);
      distance[startVertex] = 0;
      while (queue.length > 0) {
        let vertex = queue.shift();
        if (vertex === endVertex) {
          return distance[vertex];
        }
        let neighbors = this.list.get(vertex);
        for (let i = 0; i < neighbors.length; i++) {
          let neighbor = neighbors[i];
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
            distance[neighbor] = distance[vertex] + 1;
          }
        }
      }
      return -1; // No path found
    }
  }
  
  const obj = new Graph();
  let vert = ["A", "B", "C", "D"];
  for (let i = 0; i < vert.length; i++)
  obj.addVertex(vert[i]);
  obj.addEdge("A", "B");
  obj.addEdge("A", "C");
  obj.addEdge("A", "D");
  obj.addEdge("D", "B");
  obj.addEdge("D", "C");
  const shortestDistance = obj.findShortestDistance("A", "B");
console.log("Shortest distance between A and B:", shortestDistance);
//  console.log( obj.hasEdge("A","B"));
//   console.log("does have edge between: "+obj.hasEdge("A","B"));
// obj.removeEdge("A","B")
// obj.hasEdge("A","B")
// console.log("after remove vertex");
// obj.removeVertex("A")
//   obj.printGraph();
  console.log("BFS Traversal:");
  obj.bfsTraversal("A");
console.log("dfs traversal")
obj.dfsTraversal("A");