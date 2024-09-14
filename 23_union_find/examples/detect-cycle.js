const UnionFind = require('union-find.js');

function hasCycle(n, edges) {
    let uf = new UnionFind(n);
    for (let [u, v] of edges) {
        if (uf.find(u) === uf.find(v)) {
            return true;  // Cycle detected
        }
        uf.union(u, v);
    }
    return false;
}

// Usage Example
console.log(hasCycle(4, [[0,1],[1,2],[2,3],[3,0]])); // Output: true
