class MinHeap {
    constructor() {
        this.heap = [];
    }

    parent(i) { return Math.floor((i - 1) / 2); }
    leftChild(i) { return 2 * i + 1; }
    rightChild(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(key) {
        this.heap.push(key);
        this.heapifyUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyUp(i) {
        while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }

    heapifyDown(i) {
        let minIndex = i;
        const left = this.leftChild(i);
        const right = this.rightChild(i);

        if (left < this.heap.length && this.heap[left] < this.heap[minIndex]) {
            minIndex = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[minIndex]) {
            minIndex = right;
        }

        if (minIndex !== i) {
            this.swap(i, minIndex);
            this.heapifyDown(minIndex);
        }
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}

function topKElements(arr, k) {
    const minHeap = new MinHeap();

    // Process the first k elements
    for (let i = 0; i < k; i++) {
        minHeap.insert(arr[i]);
    }

    // Process the remaining elements
    for (let i = k; i < arr.length; i++) {
        if (arr[i] > minHeap.peek()) {
            minHeap.extractMin();
            minHeap.insert(arr[i]);
        }
    }

    // Extract the k largest elements
    const result = [];
    while (minHeap.size() > 0) {
        result.unshift(minHeap.extractMin());
    }

    return result;
}

// Example usage
const arr = [3, 1, 5, 12, 2, 11];
const k = 3;
console.log(topKElements(arr, k)); // Output: [5, 11, 12]
