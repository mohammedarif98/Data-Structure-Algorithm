
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
        // this.edges[vertex2].push(vertex1)
    }

    hasVertex(vertex){
        return this.vertices.includes(vertex);
    }

    hasEdge(vertex1,vertex2){
        const v1edges = this.edges[vertex1];
        if(v1edges){
            return v1edges.includes(vertex2)
        }
        return false;
    }

    hasCyle(){
        const visited = [];
        for(const vertex of this.vertices){
            if(!visited[vertex] && this.isCylic(vertex,visited,-1)){
                return true;
            }
        }
        return false;
    }

    isCylic(vertex,visited,parent){
        visited[vertex]=true;
        const neighbors = this.edges[vertex];
        for(let n of neighbors){
            if(!visited[n]){
                if(this.isCylic(n,visited,vertex)){
                    return true;
                }
            }else if(n!==parent){
                return true;
            }
        }
        return false
    }


}

let g = new Graph()
const ver = [1,2,3,4]
for(let v of ver){
    g.addVertex(v);
}

g.addEdges(1,2)
g.addEdges(1,3)
g.addEdges(3,4)
g.addEdges(2,4)

console.log(g.hasEdge(1,2));

if(g.hasCyle()){
    console.log(`grap is contain cyclic`);
}else{
    console.log(`grap is contain not cyclic`);
}