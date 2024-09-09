class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(2 * this.n).fill(0);
        this.buildTree(arr);
    }

    buildTree(arr) {
        for (let i = 0; i < this.n; i++) {
            this.tree[this.n + i] = arr[i];
        }
        for (let i = this.n - 1; i > 0; i--) {
            this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
        }
    }

    updateNode(index, value) {
        let i = this.n + index;
        this.tree[i] = value;
        while (i > 1) {
            i = Math.floor(i / 2);
            this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
        }
    }

    queryRange(left, right) {
        let sum = 0;
        for (left += this.n, right += this.n; left <= right; left = Math.floor(left / 2), right = Math.floor(right / 2)) {
            if (left % 2 === 1) {
                sum += this.tree[left++];
            }
            if (right % 2 === 0) {
                sum += this.tree[right--];
            }
        }
        return sum;
    }
}

// Usage Example
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const segmentTree = new SegmentTree(arr);
console.log(segmentTree.queryRange(2, 5)); // Output: 34
segmentTree.updateNode(3, 20);
console.log(segmentTree.queryRange(2, 5)); // Output: 48
