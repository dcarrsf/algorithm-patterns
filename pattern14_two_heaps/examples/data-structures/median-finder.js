class MedianFinder {
    constructor() {
        this.maxHeap = new MaxPriorityQueue();
        this.minHeap = new MinPriorityQueue();
        this.numMap = new Map();
    }

    addNum(num) {
        if (this.maxHeap.size() === 0 || num < this.maxHeap.peek()) {
            this.maxHeap.enqueue(num);
        } else {
            this.minHeap.enqueue(num);
        }
        
        this.balance();
        this.numMap.set(num, (this.numMap.get(num) || 0) + 1);
    }

    remove(num) {
        this.numMap.set(num, this.numMap.get(num) - 1);
        if (this.numMap.get(num) === 0) {
            this.numMap.delete(num);
        }

        if (num <= this.maxHeap.peek()) {
            this.removeFromHeap(this.maxHeap, num);
        } else {
            this.removeFromHeap(this.minHeap, num);
        }

        this.balance();
    }

    removeFromHeap(heap, num) {
        let temp = [];
        while (heap.peek() !== num) {
            temp.push(heap.dequeue());
        }
        heap.dequeue(); // Remove the target number
        temp.forEach(n => heap.enqueue(n));
    }

    balance() {
        while (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.enqueue(this.maxHeap.dequeue());
        }
        while (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.enqueue(this.minHeap.dequeue());
        }
    }

    findMedian() {
        if (this.maxHeap.size() === this.minHeap.size()) {
            return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
        } else {
            return this.maxHeap.peek();
        }
    }
}
