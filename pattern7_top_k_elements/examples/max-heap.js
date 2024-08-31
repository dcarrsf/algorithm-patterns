class MaxHeap {
    constructor(compareFunc = (a, b) => a - b) {
        this.heap = [];
        this.compare = compareFunc;
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
        while (i > 0 && this.compare(this.heap[parentIndex], this.heap[i]) < 0) {
            this.swap(i, parentIndex);
            i = parentIndex;
            parentIndex = this.getParentIndex(i);
        }
    }

    poll() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return max;
    }

    bubbleDown(i) {
        const maxIndex = this.getMaxIndex(i);
        if (maxIndex !== i) {
            this.swap(i, maxIndex);
            this.bubbleDown(maxIndex);
        }
    }

    getMaxIndex(i) {
        let maxIndex = i;
        const leftChildIndex = this.getLeftChildIndex(i);
        const rightChildIndex = this.getRightChildIndex(i);

        if (leftChildIndex < this.heap.length && this.compare(this.heap[leftChildIndex], this.heap[maxIndex]) > 0) {
            maxIndex = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.compare(this.heap[rightChildIndex], this.heap[maxIndex]) > 0) {
            maxIndex = rightChildIndex;
        }

        return maxIndex;
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

exports.MaxHeap = MaxHeap;
