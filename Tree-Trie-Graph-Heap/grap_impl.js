
class Graph{
    constructor(){
        this.vertices = [];
        this.edges = [];
    }
    
    addVertex(vertex){
        this.vertices.push(vertex);
        this.edges[vertex] = [];
    }
    
    addEdges(vertex1,vertex2){
        this.edges[vertex1].push(vertex2);
        this.edges[vertex2].push(vertex1);
    }

    hasVertex(vertex) {
        return this.vertices.includes(vertex);
    }

    hasEdge(vertex1,vertex2){
        const v1edges = this.edges[vertex1];
        if(v1edges){
            return v1edges.includes(vertex2)
        }
        return false;
    }

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

    removeVertices(vertex1){
        const edges  = this.edges[vertex1];
        if(edges){
            for(const neighbor of edges){
                const neighborEdges = this.edges[neighbor];
                const index = neighborEdges.indexOf(vertex1);
                if(index !== -1){
                    neighborEdges.splice(index,1);
                }
            }
            delete this.edges[vertex1];
            const vertexindex = this.vertices.indexOf(vertex1);
            if (vertexindex !== -1) {
                this.vertices.splice(vertexindex, 1);
            }
        } 
    }

    shortestPath(svertex,evertex){
        const visited = [];
        const queue = [];
        const distance = {};
        visited[svertex] = true;
        queue.push(svertex);
        distance[svertex] = 0;
        while(queue.length>0){
            const vertex  = queue.shift();
            if(vertex === evertex){
                return distance[vertex]
            }
            const neighbors = this.edges[vertex];
            for(const neighbor of neighbors){
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                    distance[neighbor] = distance[vertex]+1
                }
            }
        }
        return -1
    }

    hasCycle(){
        const visited = [];
        for (const vertex of this.vertices) {
            if (!visited[vertex] && this.isCyclic(vertex, visited,-1)){
                return true;
            }
        }
        return false;
    }

    isCyclic(vertex, visited, parent) {
        visited[vertex] = true;
        const neighbors = this.edges[vertex];
        for (const neighbor of neighbors) {
            if (!visited[neighbor]) {
                if (this.isCyclic(neighbor, visited, vertex)) {
                    return true;
                }
            } else if (neighbor !== parent) {
                return true;
            }
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

    printgraph(){
        for(const vertex of this.vertices){
            const neighbors = this.edges[vertex];
            let out = "";
            for(const neighbor of neighbors){
                out+=neighbor+" ";
            }
            console.log(vertex+" : "+out)
        }
    }

    hasedge(vertex1,vertex2){
        const vedges = this.edges[vertex1];
        if(vedges){
            return vedges.includes(vertex2)
        }
        return false
    }

}

const graph = new Graph();

const  vertices = [1,2,3,4,5,6];
for(const vertex of vertices){
    graph.addVertex(vertex);
}

graph.addEdges(1,2);
graph.addEdges(1,3);
// graph.addEdges(1,4);
graph.addEdges(4,2);
graph.addEdges(4,3);
graph.addEdges(4,5);
graph.addEdges(5,6);

// graph.printgraph();

console.log("BFS Traversal:");
graph.bfsTraversal(1);

console.log("DFS Traversal:");
graph.dfsTraversal(1);

// console.log("shortest path : ",graph.shortestPath(1,5));

// console.log("vertex have edges : ",graph.hasEdge(1,2));
// graph.removeEdge(1,2)
// console.log("vertex have edges : ",graph.hasEdge(1,2));

// graph.printgraph();

// console.log(`graph have  vertices : `,graph.hasVertex(2));
// graph.removeVertices(2)
// console.log(`graph have  vertices : `,graph.hasVertex(2));

graph.printgraph();

//* cycle checking
// if(graph.hasCycle()){
// console.log("The graph contains a cycle.");
// }else{
// console.log("The graph does not contain a cycle.");
// }