class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];
    }

    addEdge(vertex1,vertex2) {
        this.edges[vertex1].push(vertex2);
        this.edges[vertex2].push(vertex1);
    }

    hasEdge(vertex1,vertex2) {
        const vEdges = this.edges[vertex1];
        if (vEdges) {
            return vEdges.includes(vertex2);
        }
        return false;
    }

    dfsTraversal(startingVertex) {
        const visited = {};
        this.dfsHelper(startingVertex, visited);
    }

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

    removeEdge(vertex1, vertex2) {
        const vEdges = this.edges[vertex1];
        const eEdges = this.edges[vertex2];
        if (vEdges && eEdges) {
            const vIndex = vEdges.indexOf(vertex2);
            const eIndex = eEdges.indexOf(vertex1);
            if (vIndex !== -1) {
                vEdges.splice(vIndex, 1);
            }
            if (eIndex !== -1) {
                eEdges.splice(eIndex, 1);
            }
        }
    }

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
const vertices = ["A", "B", "C", "D"];
for (const vertex of vertices) {
    graph.addVertex(vertex);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("D", "B");
graph.addEdge("D", "C");

console.log("BFS Traversal:");
graph.bfsTraversal("A");

console.log("DFS Traversal:");
graph.dfsTraversal("A");

console.log("Shortest distance between A and B:", graph.findShortestDistance("A", "B"));
console.log("Does have edge between A and B:", graph.hasEdge("A", "B"));

graph.removeEdge("A", "B");
console.log("After removing edge A-B:", graph.hasEdge("A", "B"));

console.log("After removing vertex A:");
graph.removeVertex("A");
graph.printGraph();
