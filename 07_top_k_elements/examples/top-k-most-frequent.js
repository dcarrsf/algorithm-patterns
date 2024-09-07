const MaxHeap = require('./max-heap.js');

function kMostFrequent(arr, k) {
    const freqMap = new Map();
    for (let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    const maxHeap = new MaxHeap((a, b) => a[1] - b[1]);
    for (let [num, freq] of freqMap) {
        maxHeap.add([num, freq]);
    }
    
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(maxHeap.poll()[0]);
    }
    return result;
}

// Usage Example
const arr2 = [1, 1, 1, 2, 2, 3];
const k2 = 2;
console.log(kMostFrequent(arr2, k2)); // Output: [1, 2]
