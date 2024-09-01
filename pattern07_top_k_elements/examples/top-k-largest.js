const MinHeap = require('./min-heap.js');

function kLargest(arr, k) {
    const minHeap = new MinHeap();
    for (let num of arr) {
        minHeap.add(num);
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }
    return minHeap.getHeap();
}

// Usage Example
const arr1 = [3, 1, 5, 12, 2, 11];
const k1 = 3;
console.log(kLargest(arr1, k1)); // Output: [5, 11, 12]
