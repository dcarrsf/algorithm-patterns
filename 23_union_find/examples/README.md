# Examples: Union Find

Key characteristics:

1. Efficient operations for merging sets and determining if elements belong to the same set
2. Uses tree-like structures to represent sets
3. Employs optimization techniques like path compression and union by rank

Union Find is useful because it offers near-constant time complexity for its operations, making it highly efficient for large datasets and dynamic connectivity problems.

## UnionFind Class

The [UnionFind data structure](union-find.js), also known as a disjoint set data structure, typically includes the following main methods:

- [Constructor](#1-constructor)
- [find](#2-find): Path compression ensures that future finds on the same element will be faster.
- [union](#3-union): Union by rank keeps the trees balanced, preventing long chains.
- [getCount](#4-getcount) (in some implementations)

Together, these optimizations make the amortized time complexity for these operations nearly constant.

Here's the breakdown:

### 1. Constructor:

```javascript
constructor(n) {
    this.parent = Array(n).fill().map((_, i) => i);
    this.rank = Array(n).fill(0);
    this.count = n;
}
```

The constructor initializes the UnionFind structure:

- It creates a parent array where each element initially points to itself, representing n separate sets.
- A rank array is initialized to keep track of the "height" of each tree for optimization.
- count keeps track of the number of disjoint sets, initially equal to n.


### 2. find method:

```javascript
find(x) {
    if (this.parent[x] !== x) {
        this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
}
```

The find method does two things:

- It finds the root (representative) of the set that x belongs to.
- It performs path compression: as it traverses up the tree, it updates each node to point directly to the root, flattening the structure for future operations.


### 3. union method:

```javascript
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
```

The union method merges two sets:

- It first finds the roots of both elements.
- If the roots are the same, the elements are already in the same set, so it does nothing.
- It uses union by rank: the tree with smaller rank is attached to the root of the tree with larger rank.
- If ranks are equal, it arbitrarily chooses one as the new root and increases its rank.
- It decreases the count of disjoint sets.


### 4. getCount method:

```javascript
getCount() {
    return this.count;
}
```
This method simply returns the current number of disjoint sets.



[Practice Questions](../QUESTIONS.md)
