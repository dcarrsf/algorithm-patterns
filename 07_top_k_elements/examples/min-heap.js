class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }

    add(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(i) {
        let parentIndex = this.getParentIndex(i);
        while (i > 0 && this.heap[parentIndex] > this.heap[i]) {
            this.swap(i, parentIndex);
            i = parentIndex;
            parentIndex = this.getParentIndex(i);
        }
    }

    poll() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleDown(i) {
        const minIndex = this.getMinIndex(i);
        if (minIndex !== i) {
            this.swap(i, minIndex);
            this.bubbleDown(minIndex);
        }
    }

    getMinIndex(i) {
        let minIndex = i;
        const leftChildIndex = this.getLeftChildIndex(i);
        const rightChildIndex = this.getRightChildIndex(i);

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
            minIndex = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
            minIndex = rightChildIndex;
        }

        return minIndex;
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }

    getHeap() {
        return [...this.heap];
    }
}

exports.MinHeap = MinHeap;
