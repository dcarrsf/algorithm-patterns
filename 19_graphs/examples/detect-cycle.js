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

    hasCycle() {
        const visited = {};
        for (let vertex in this.adjacencyList) {
            if (!visited[vertex]) {
                if (this.hasCycleUtil(vertex, visited, null)) return true;
            }
        }
        return false;
    }

    hasCycleUtil(vertex, visited, parent) {
        visited[vertex] = true;
        for (let neighbor of this.adjacencyList[vertex]) {
            if (!visited[neighbor]) {
                if (this.hasCycleUtil(neighbor, visited, vertex)) return true;
            } else if (neighbor !== parent) {
                return true;
            }
        }
        return false;
    }
}

// Usage Example
const g = new Graph();
['A', 'B', 'C', 'D'].forEach(v => g.addVertex(v));
g.addEdge('A', 'B');
g.addEdge('B', 'C');
g.addEdge('C', 'D');
console.log(g.hasCycle()); // Output: false

g.addEdge('D', 'A');
console.log(g.hasCycle()); // Output: true
