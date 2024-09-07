class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinPriorityQueue();
        nums.forEach(num => this.add(num));
    }

    add(val) {
        if (this.minHeap.size() < this.k) {
            this.minHeap.enqueue(val);
        } else if (val > this.minHeap.front().element) {
            this.minHeap.dequeue();
            this.minHeap.enqueue(val);
        }
        return this.minHeap.front().element;
    }
}

// Usage Example
let kthLargest = new KthLargest(3, [4,5,8,2]);
console.log(kthLargest.add(3));  // Output: 4
console.log(kthLargest.add(5));  // Output: 5
console.log(kthLargest.add(10)); // Output: 5
console.log(kthLargest.add(9));  // Output: 8
