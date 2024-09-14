class UnionFind {
    constructor(n) {
        this.parent = Array(n).fill().map((_, i) => i);
        this.rank = Array(n).fill(0);
        this.count = n;
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
        if (rootX === rootY) return;

        if (this.rank[rootX] < this.rank[rootY]) {
            [rootX, rootY] = [rootY, rootX];
        }
        this.parent[rootY] = rootX;
        if (this.rank[rootX] === this.rank[rootY]) {
            this.rank[rootX]++;
        }
        this.count--;
    }

    getCount() {
        return this.count;
    }
}

exports.UnionFind = UnionFind;
