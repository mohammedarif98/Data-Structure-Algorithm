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

graph.printgraph();

console.log("DFS Traversal:");
graph.dfsTraversal(1);