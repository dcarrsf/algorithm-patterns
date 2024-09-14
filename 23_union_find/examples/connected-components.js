const UnionFind = require('union-find.js');

function countComponents(n, edges) {
    let uf = new UnionFind(n);
    for (let [u, v] of edges) {
        uf.union(u, v);
    }
    return uf.getCount();
}

// Usage Example
console.log(countComponents(5, [[0,1],[1,2],[3,4]])); // Output: 2
