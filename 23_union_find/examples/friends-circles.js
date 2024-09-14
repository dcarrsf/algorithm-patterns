const UnionFind = require('union-find.js');

function findCircleNum(M) {
    let n = M.length;
    let uf = new UnionFind(n);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (M[i][j] === 1) {
                uf.union(i, j);
            }
        }
    }
    return uf.getCount();
}

// Usage Example
console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])); // Output: 2
