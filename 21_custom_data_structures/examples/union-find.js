class UnionFind {
    constructor(size) {
        this.parent = Array(size).fill().map((_, i) => i);
        this.rank = Array(size).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX !== rootY) {
            if (this.rank[rootX] < this.rank[rootY]) {
                [rootX, rootY] = [rootY, rootX];
            }
            this.parent[rootY] = rootX;
            if (this.rank[rootX] === this.rank[rootY]) {
                this.rank[rootX]++;
            }
        }
    }

    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}

// Usage Example
const uf = new UnionFind(5);
uf.union(0, 1);
uf.union(2, 3);
console.log(uf.connected(0, 1));  // Output: true
console.log(uf.connected(0, 2));  // Output: false
uf.union(1, 2);
console.log(uf.connected(0, 2));  // Output: true
