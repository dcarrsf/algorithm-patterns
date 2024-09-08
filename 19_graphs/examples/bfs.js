class Graph {
    // ... (same constructor, addVertex, and addEdge methods as above)

    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (queue.length) {
            let vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
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
console.log(g.bfs('A')); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
