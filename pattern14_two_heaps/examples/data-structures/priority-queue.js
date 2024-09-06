class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this.heap = [];
        this.comparator = comparator;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        return this.heap[0];
    }

    enqueue(value) {
        this.heap.push(value);
        this._siftUp();
        return this.size();
    }

    dequeue() {
        if (this.size() > 1) {
            this._swap(0, this.size() - 1);
        }
        const poppedValue = this.heap.pop();
        this._siftDown();
        return poppedValue;
    }

    _parent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    _leftChild(idx) {
        return idx * 2 + 1;
    }

    _rightChild(idx) {
        return idx * 2 + 2;
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    _siftUp() {
        let nodeIdx = this.size() - 1;
        while (nodeIdx > 0 && this.comparator(this.heap[nodeIdx], this.heap[this._parent(nodeIdx)])) {
            this._swap(nodeIdx, this._parent(nodeIdx));
            nodeIdx = this._parent(nodeIdx);
        }
    }

    _siftDown() {
        let nodeIdx = 0;
        while (
            (this._leftChild(nodeIdx) < this.size() && this.comparator(this.heap[this._leftChild(nodeIdx)], this.heap[nodeIdx])) ||
            (this._rightChild(nodeIdx) < this.size() && this.comparator(this.heap[this._rightChild(nodeIdx)], this.heap[nodeIdx]))
        ) {
            const greaterChildIdx = this._rightChild(nodeIdx) < this.size()
                && this.comparator(this.heap[this._rightChild(nodeIdx)], this.heap[this._leftChild(nodeIdx)])
                ? this._rightChild(nodeIdx)
                : this._leftChild(nodeIdx);
            this._swap(greaterChildIdx, nodeIdx);
            nodeIdx = greaterChildIdx;
        }
    }
}

class MaxPriorityQueue extends PriorityQueue {
    constructor() {
        super((a, b) => a > b);
    }
}

class MinPriorityQueue extends PriorityQueue {
    constructor() {
        super((a, b) => a < b);
    }
}
