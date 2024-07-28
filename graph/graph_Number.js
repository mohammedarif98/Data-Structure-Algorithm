class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
    }

    // Add a vertex to the graph
    // Parameter:
    // - v: The vertex to be added
    addVertex(vertex) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];
    }

    // Add an edge between two vertices
    // Parameters:
    // - v: The first vertex
    // - e: The second vertex
    addEdge(vertex1,vertex2) {
        this.edges[vertex1].push(vertex2);
        this.edges[vertex2].push(vertex1);
    }

    // Check if there is an edge between two vertices
    // Parameters:
    // - v: The first vertex
    // - e: The second vertex
    // Returns:
    // - true if there is an edge between v and e, false otherwise
    hasEdge(vertex1,vertex2) {
        const vEdges = this.edges[vertex1];
        if (vEdges) {
            return vEdges.includes(vertex2);
        }
        return false;
    }

    // Perform Depth-First Search (DFS) traversal
    // Parameter:
    // - startingVertex: The starting vertex for traversal
    dfsTraversal(startingVertex) {
        const visited = {};
        this.dfsHelper(startingVertex, visited);
    }

    // Helper function for DFS traversal
    // Parameters:
    // - vertex: The current vertex
    // - visited: An object to keep track of visited vertices
    dfsHelper(vertex, visited) {
        visited[vertex] = true;
        console.log(vertex);
        const neighbors = this.edges[vertex];
        for (const neighbor of neighbors) {
            if (!visited[neighbor]) {
                this.dfsHelper(neighbor, visited);
            }
        }
    }

    // Perform Breadth-First Search (BFS) traversal
    // Parameter:
    // - startingVertex: The starting vertex for traversal
    bfsTraversal(startingVertex) {
        const visited = {};
        const queue = [];
        visited[startingVertex] = true;
        queue.push(startingVertex);
        while (queue.length > 0) {
            const vertex = queue.shift();
            console.log(vertex);
            const neighbors = this.edges[vertex];
            for (const neighbor of neighbors) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }

    // Print the graph
    printGraph() {
        for (const vertex of this.vertices) {
            const neighbors = this.edges[vertex];
            let out = "";
            for (const neighbor of neighbors) {
                out += neighbor + " ";
            }
            console.log(vertex + " : " + out);
        }
    }

    // Remove an edge between two vertices
    // Parameters:
    // - v: The first vertex
    // - e: The second vertex
    removeEdge(vertex1, vertex2) {
        const v1Edges = this.edges[vertex1];
        const v2Edges = this.edges[vertex2];
        if (v1Edges && v2Edges) {
            const v1Index = v1Edges.indexOf(vertex2);
            const v2Index = v2Edges.indexOf(vertex1);
            if (v1Index !== -1) {
                v1Edges.splice(v1Index, 1);
            }
            if (v2Index !== -1) {
                v2Edges.splice(v2Index, 1);
            }
        }
    }


    // Remove a vertex from the graph
    // Parameter:
    // - v: The vertex to be removed
    removeVertex(vertex1) {
        const edges = this.edges[vertex1];
        if (edges) {
            for (const neighbor of edges) {
                const neighborEdges = this.edges[neighbor];
                const index = neighborEdges.indexOf(vertex1);
                if (index !== -1) {
                    neighborEdges.splice(index, 1);
                }
            }
            delete this.edges[vertex1];
            const vertexIndex = this.vertices.indexOf(vertex1);
            if (vertexIndex !== -1) {
                this.vertices.splice(vertexIndex, 1);
            }
        }
    }

    // Find the shortest distance between two vertices using BFS
    // Parameters:
    // - startVertex: The starting vertex
    // - endVertex: The ending vertex
    // Returns:
    // - The shortest distance between startVertex and endVertex
    findShortestDistance(startVertex, endVertex) {
        const visited = {};
        const queue = [];
        const distance = {};
        visited[startVertex] = true;
        queue.push(startVertex);
        distance[startVertex] = 0;
        while (queue.length > 0) {
            const vertex = queue.shift();
            if (vertex === endVertex) {
                return distance[vertex];
            }
            const neighbors = this.edges[vertex];
            for (const neighbor of neighbors) {
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

const graph = new Graph();

const vertices = [1,2,3,4];
for (const vertex of vertices) {
    graph.addVertex(vertex);
}

graph.addEdge(1,2);
graph.addEdge(1,3);
graph.addEdge(1,4);
graph.addEdge(4,2);
graph.addEdge(4,3);
graph.printGraph();

// console.log("BFS Traversal:");
// graph.bfsTraversal(1);

console.log("DFS Traversal:");
graph.dfsTraversal(1);

// console.log("Shortest distance between 1 and 2:", graph.findShortestDistance(1,2));
// console.log("Does have edge between 1 and 2:", graph.hasEdge(1,2));

// graph.removeEdge(1,2);
// console.log("After removing edge 1-2:", graph.hasEdge(1,2));

// console.log("After removing vertex 1:");
// graph.removeVertex(1);
graph.printGraph();