# Two Heaps Examples

Description of the examples helper files.

## PriorityQueue

In practice, JavaScript doesn't have built-in priority queue implementation, so we would need to create these ourselves. Here's a [simple implementation](helpers/priority-queue.js) using a binary heap.

### **Key observations**:

This implementation provides a generic PriorityQueue class that can be used to create both MaxPriorityQueue and MinPriorityQueue. Here's a breakdown of the implementation:

1. The [PriorityQueue class uses a binary heap](CLARIFICATION.md) implemented as an array.
2. It takes a comparator function in its constructor, which determines the ordering of elements.
3. The enqueue method adds an element and then sifts it up to maintain the heap property.
4. The dequeue method removes and returns the top element, then sifts down the new top element.
5. The _siftUp and _siftDown methods are used to maintain the heap property after insertion and deletion.
6. MaxPriorityQueue and MinPriorityQueue extend PriorityQueue with appropriate comparator functions.

You can use these classes in the example questions like this:

```javascript
let maxHeap = new MaxPriorityQueue();
maxHeap.enqueue(5);
maxHeap.enqueue(3);
console.log(maxHeap.peek()); // 5

let minHeap = new MinPriorityQueue();
minHeap.enqueue(5);
minHeap.enqueue(3);
console.log(minHeap.peek()); // 3
```

### **Time Complexity**:

This implementation provides all the necessary operations for the Two Heaps pattern with the following time complexities:

- Enqueue (insertion): O(log n)
- Dequeue (removal of top element): O(log n)
- Peek (get top element): O(1)
- Size: O(1)

The space complexity is O(n) where n is the number of elements in the queue.

## MedianFinder

This implementation of the[ MedianFinder](helpers/median-finder.js) class that supports both adding and removing numbers, which is necessary for the sliding window median problem.

### **Key observations**:

Here's the details of the implementation:

1. We use two heaps: a max heap for the lower half of the numbers and a min heap for the upper half.
2. We also use a Map (numMap) to keep track of the frequency of each number. This is crucial for efficient removal.
3. The addNum method adds a number to the appropriate heap and then balances the heaps.
4. The remove method first updates the frequency in numMap, then removes the number from the appropriate heap.
5. The removeFromHeap method efficiently removes a specific number from a heap.
6. The balance method ensures that the max heap always has either the same number of elements as the min heap, or one more.
7. The findMedian method calculates the median based on the top elements of both heaps.

This implementation allows for both adding and removing numbers, which is necessary for the sliding window median problem. Here's how you would use it in the sliding window median example:

```javascript
function medianSlidingWindow(nums, k) {
    let result = [];
    let finder = new MedianFinder();
    
    for (let i = 0; i < nums.length; i++) {
        finder.addNum(nums[i]);
        if (i >= k) {
            finder.remove(nums[i - k]);
        }
        if (i >= k - 1) {
            result.push(finder.findMedian());
        }
    }
    
    return result;
}
```

### **Time Complexity**:

This implementation maintains the efficient time complexity for the sliding window median problem:

- Adding a number: O(log k)
- Removing a number: O(k) in the worst case, but typically much faster
- Finding the median: O(1)

The space complexity is O(k) as we store at most k elements in the heaps and the frequency map.

This MedianFinder class provides a robust solution for problems involving dynamic datasets where both insertion and removal operations are required, while still maintaining quick access to the median.

[Practice Questions](../QUESTIONS.md) | [Examples](helpers/))