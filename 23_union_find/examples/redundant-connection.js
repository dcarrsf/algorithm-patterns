const UnionFind = require('union-find.js');

function findRedundantConnection(edges) {
    let n = edges.length;
    let uf = new UnionFind(n + 1);
    for (let [u, v] of edges) {
        if (uf.find(u) === uf.find(v)) {
            return [u, v];
        }
        uf.union(u, v);
    }
    return [];
}

// Usage Example
console.log(findRedundantConnection([[1,2],[1,3],[2,3]])); // Output: [2,3]
