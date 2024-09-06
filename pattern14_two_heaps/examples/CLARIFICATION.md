# Heap vs. Priority Queue

Overview of the relationship between priority queue and heap concepts:

1. Heap vs. Priority Queue:
    - A heap is a data structure, specifically a type of binary tree with specific properties.
    - A priority queue is an abstract data type (ADT) that defines a set of operations, regardless of the underlying implementation.

2. MaxHeap and MinHeap:
    - These are specific implementations of the heap data structure.
    - A MaxHeap is a binary heap where the parent node is always greater than or equal to its children.
    - A MinHeap is a binary heap where the parent node is always less than or equal to its children.

3. MaxPriorityQueue and MinPriorityQueue:
    - These are implementations of the priority queue ADT.
    - They can be implemented using various data structures, but heaps are often the most efficient choice.

4. Relationship:
    - MaxPriorityQueue is often implemented using a MaxHeap.
    - MinPriorityQueue is often implemented using a MinHeap.

So, while not exactly synonymous, in practice:
- MaxPriorityQueue and MaxHeap are often used interchangeably because a MaxHeap is the most common and efficient implementation of a MaxPriorityQueue.
- Similarly, MinPriorityQueue and MinHeap are often used interchangeably.

The key difference is in the level of abstraction:

- Heaps (MaxHeap/MinHeap) refer to the specific data structure.
- Priority Queues (MaxPriorityQueue/MinPriorityQueue) refer to the abstract data type, which defines the operations (like enqueue, dequeue, peek) without specifying the underlying implementation.