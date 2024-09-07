class MedianFinder {
    constructor() {
        this.maxHeap = new MaxPriorityQueue();
        this.minHeap = new MinPriorityQueue();
    }

    addNum(num) {
        if (this.maxHeap.size() === 0 || num < this.maxHeap.front().element) {
            this.maxHeap.enqueue(num);
        } else {
            this.minHeap.enqueue(num);
        }
        
        // Balance heaps
        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.enqueue(this.maxHeap.dequeue().element);
        } else if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.enqueue(this.minHeap.dequeue().element);
        }
    }

    findMedian() {
        if (this.maxHeap.size() === this.minHeap.size()) {
            return (this.maxHeap.front().element + this.minHeap.front().element) / 2;
        } else {
            return this.maxHeap.front().element;
        }
    }
}

// Usage Example
let medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian()); // Output: 1.5
medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // Output: 2
