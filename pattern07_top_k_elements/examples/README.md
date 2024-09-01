# MinHeap and MaxHeap

Simple implementations for both MinHeap and MaxHeap classes include the interface used in the "Top K Largest" examples: **add**, **poll**, **peek**, **size**, and **getHeap**.

## **Examples**:
1. **[MinHeap](min-heap.js)**: A binary heap data structure that maintains the smallest element at the root, allowing for efficient retrieval of the minimum element.
2. **[MaxHeap](max-heap.js)**: A binary heap data structure that keeps the largest element at the root, facilitating quick access to the maximum element.

### **Key observations**:

These implementations provide the necessary functionality for the "Top K Elements" pattern examples we discussed earlier. Here are some key points about these implementations:

1. Both MinHeap and MaxHeap have similar structures, with the main difference being the comparison logic.
2. The MaxHeap constructor accepts an optional compare function, allowing for custom ordering (useful for the K Closest Points example).
3. Both classes implement the core heap operations: add, poll, peek, size, and getHeap.
4. The bubbleUp and bubbleDown methods ensure that the heap property is maintained after insertions and deletions.
5. The getHeap method returns a copy of the internal array to prevent direct modification of the heap structure.

**Time Complexity**:

For most problems using a heap, the time complexity is O(N log K), where N is the number of elements in the input array and K is the number of top elements we're trying to find.

[Practice Questions](../QUESTIONS.md) | [Examples](.))