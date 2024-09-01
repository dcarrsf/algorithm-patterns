const MinHeap = require('./min-heap.js');

function findKthLargest(arr, k) {
    const minHeap = new MinHeap();
    for (let num of arr) {
        minHeap.add(num);
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }
    return minHeap.peek();
}

// Usage Example
const arr3 = [3, 2, 1, 5, 6, 4];
const k3 = 2;
console.log(findKthLargest(arr3, k3)); // Output: 5
