# Concepts

This pattern finds the median in a data stream. 

## Median vs Average

The median and average (also known as the mean) are both measures of central tendency, but they have distinct characteristics and uses. Here's a brief comparison:

1. Calculation:
    - Median: The middle value when data is ordered.
    - Average: The sum of all values divided by the number of values.

2. Sensitivity to outliers:
    - Median: Less affected by extreme values or outliers.
    - Average: Highly influenced by outliers.

3. Distribution representation:
    - Median: Better represents the typical value in skewed distributions.
    - Average: More suitable for normally distributed data.

4. Data requirements:
    - Median: Works well with ordinal data (can be ordered but not necessarily numeric).
    - Average: Requires numeric data.

5. Computational complexity:
    - Median: Generally O(n log n) due to sorting, but can be O(n) with selection algorithms.
    - Average: O(n) - single pass through the data.

6. Use cases:
    - Median: Often used for income distributions, house prices, or non-normal distributions.
    - Average: Commonly used in many scientific and everyday calculations.

7. Behavior with symmetric distributions:
    - In perfectly symmetric distributions, the median and average are the same.

8. Algebraic properties:
    - Median: Lacks certain algebraic properties, making it less convenient for further calculations.
    - Average: Has useful algebraic properties, making it more versatile in mathematical operations.

9. Sampling stability:
    - Median: Generally more stable across different samples from the same population.
    - Average: Can vary more between samples, especially with the presence of outliers.

10. Interpretability:
    - Median: Represents the "middle" value, which can be more intuitive in some contexts.
    - Average: Represents the "balance point" of the data, which can be useful in other contexts.

In practice, the choice between median and average often depends on the specific characteristics of your data and the insights you're trying to gain. In many cases, it's beneficial to consider both measures to get a more comprehensive understanding of your data's central tendency.

## Heap vs. Priority Queue

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