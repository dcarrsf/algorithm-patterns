class FenwickTree {
    constructor(n) {
        this.n = n;
        this.tree = new Array(n + 1).fill(0);
    }

    update(index, delta) {
        for (let i = index + 1; i <= this.n; i += i & -i) {
            this.tree[i] += delta;
        }
    }

    query(index) {
        let sum = 0;
        for (let i = index + 1; i > 0; i -= i & -i) {
            sum += this.tree[i];
        }
        return sum;
    }

    rangeQuery(left, right) {
        return this.query(right) - this.query(left - 1);
    }
}

// Usage Example
const fenwickTree = new FenwickTree(8);
fenwickTree.update(0, 1);
fenwickTree.update(2, 2);
fenwickTree.update(4, 3);
fenwickTree.update(6, 4);
console.log(fenwickTree.rangeQuery(2, 6)); // Output: 9
