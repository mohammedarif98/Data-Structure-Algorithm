
class Graph {
    constructor(vertices) {
      this.vertices = vertices;
      this.adjList = new Array(vertices);   //*> This line initializes the this.adjList property to a new array with a length of vertices.
                                            //*> The adjList property will store the adjacency lists for each vertex in the graph.
      for(let i = 0; i < vertices; i++) {   //*> This loop initializes each element of the this.adjList array with an empty array.
                                            //*> It iterates through each vertex (from 0 to vertices - 1)and assigns an empty array to store the neighbors of that vertex.
        this.adjList[i] = [];               //*> After this loop, the adjList property is fully initialized as an array of empty array 
       }                                    // representing an adjacency list representation for an initially empty graph.
    }

    addEdge(u, v) {                    //*> The method is intended to add an edge between two vertices in the grap
      this.adjList[u].push(v);         //*> This step essentially indicates that there is an edge from vertex u to vertex v.
      this.adjList[v].push(u);         //*> ince this is an undirected graph, this step ensures that there is an edge from vertex v to vertex u as well.
    }

    hasCycle() {
      const visited = new Array(this.vertices);            //*> The array's length is set to this.vertices, which represents the number of vertices in the graph.
      for(let i = 0; i < this.vertices; i++) {
        if(!visited[i] && this.isCyclic(i, visited, -1)){  //*> This line checks if the current vertex i has not been visited (!visited[i]) and whether a cycle is
                                                           // detected starting from this vertex by calling the isCyclic() method.
          return true;
        }
      }
      return false;
    }

    isCyclic(vertex, visited, parent) {
      visited[vertex] = true;                               //*> It ensures that the vertex is not visited again while traversing through the graph.
      for(const neighbor of this.adjList[vertex]) {         //*> This line starts a loop that iterates over each neighbor of the current vertex in the graph.
        if(!visited[neighbor]) {                            //*> This line checks if the current neighbor has not been visited (!visited[neighbor]).
          if(this.isCyclic(neighbor, visited, vertex)) {    //*> This line calls the isCyclic() method recursively on the current neighbor.
                                                            //*> It passes the arguments neighbor as the new starting vertex, visited to keep track of visited
                                                            // vertices, and vertex as the parent vertex.
                                                            //*> The purpose of passing the vertex as the parent is to keep track of the path being taken through
            return true;                                    // the graph.
                                                            //*> If a cycle is detected starting from the current neighbor, the recursive call will return true,
                                                            // and the method will immediately return true.
          }
        }else if(neighbor !== parent) {     //*> this line checks if the current neighbor is not the parent vertex.
                                            //*> If the neighbor is not the parent, it means that there's an edge between the current vertex and
                                            // the neighbor that is not part of the current path being explored.
          return true;
        }
      }
      return false;
    }
  }
  
  // Example usage
const graph = new Graph(4);
//   graph.addEdge(0, 1);
//   graph.addEdge(1, 2);
//   graph.addEdge(2, 3);
//   graph.addEdge(0, 3);

graph.addEdge(0, 1);
graph.addEdge(1, 3);
graph.addEdge(3, 2);
graph.addEdge(0, 2);
  
if(graph.hasCycle()){
console.log("The graph contains a cycle.");
}else{
console.log("The graph does not contain a cycle.");
}
  




//! -----------------------directed graph----------------------------------

// class Graph {
//   constructor(vertices) {
//     this.vertices = vertices;
//     this.adjList = new Array(vertices);
//     for (let i = 0; i < vertices; i++) {
//       this.adjList[i] = [];
//     }
//   }

//   addEdge(u, v) {
//     this.adjList[u].push(v);
//   }

//   hasCycle() {
//     const visited = new Array(this.vertices);
//     for (let i = 0; i < this.vertices; i++) {
//       if (!visited[i] && this.isCyclic(i, visited, new Set())) {
//         return true;
//       }
//     }
//     return false;
//   }

//   isCyclic(vertex, visited, recursionStack) {
//     visited[vertex] = true;
//     recursionStack.add(vertex);

//     for (const neighbor of this.adjList[vertex]) {
//       if (!visited[neighbor]) {
//         if (this.isCyclic(neighbor, visited, recursionStack)) {
//           return true;
//         }
//       } else if (recursionStack.has(neighbor)) {
//         return true;
//       }
//     }

//     recursionStack.delete(vertex);
//     return false;
//   }
// }

// // Example usage
// const graph = new Graph(4);
// graph.addEdge(0, 1);
// graph.addEdge(1, 3);
// graph.addEdge(3, 2);
// graph.addEdge(2, 0);

// if (graph.hasCycle()) {
//   console.log("The graph contains a cycle.");
// } else {
//   console.log("The graph does not contain a cycle.");
// }
