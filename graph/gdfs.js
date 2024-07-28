


class graph{
    constructor(){
        this.edges = [];
        this.vertices = [];
    }

    addvertex(vertex){
        this.vertices.push(vertex);
        this.edges[vertex]= [];
    }

    addedges(vertex1,vertex2){
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

let g = new graph()

let vertex = [1,2,3,4,5,6];
for(let v of vertex){
    g.addvertex(v)
}

g.addedges(1,2)
g.addedges(1,3)
g.addedges(1,6)
g.addedges(6,3)
g.addedges(3,4)
g.addedges(2,4)
g.addedges(2,5)
g.addedges(5,4)

console.log("DFS Traversal:");
g.dfsTraversal(1);

g.printgraph();