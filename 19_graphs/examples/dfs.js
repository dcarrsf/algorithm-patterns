class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    dfs(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfsHelper(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfsHelper(neighbor);
                }
            });
        })(start);

        return result;
    }
}

// Usage Example
const g = new Graph();
['A', 'B', 'C', 'D', 'E', 'F'].forEach(v => g.addVertex(v));
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
console.log(g.dfs('A')); // Output: ['A', 'B', 'D', 'E', 'C', 'F']
