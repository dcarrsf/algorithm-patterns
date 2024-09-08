# K-Way Merge

The K-Way Merge pattern is an algorithmic technique used to efficiently merge K sorted arrays or lists into a single sorted array. It's particularly useful when dealing with large datasets that are already partially sorted. The pattern leverages the fact that the input lists are pre-sorted to achieve better time complexity compared to sorting all elements from scratch.

[Practice Questions](QUESTIONS.md) | [Examples](examples/)

## **Examples**:
1. **[Merge K Sorted Arrays](examples/merge_k_sorted_arrays.js)**: Efficiently combines multiple sorted arrays into one sorted array.
2. **[Merge K Sorted Linked Lists](examples/merge_k_sorted_linked_lists.js)**: Merges multiple sorted linked lists into a single sorted list.
3. **[Merge K Sorted Streams](examples/merge_k_sorted_linked_lists.js)**: Continuously merges multiple sorted data streams into one output stream. 
4. **[K-Way External Sort](examples/k-way-external-sort.js)**: Sorts large datasets by merging smaller sorted chunks from disk.

### **Key observations**:

Consistencies:

1. All examples use a min-heap (priority queue) to efficiently select the next smallest element.
2. They all handle multiple sorted input sources (arrays, linked lists, or streams).
3. The core logic involves repeatedly extracting the minimum element and adding the next element from the same source.
4. Time complexity for all is O(N log K), where N is the total number of elements and K is the number of input sources.

Differences:

1. Data structure of input: Arrays vs. Linked Lists vs. Streams vs. Disk chunks.
2. Memory usage: The external sort example simulates writing to disk to handle large datasets that don't fit in memory.
3. Continuous vs. Finite data: The stream merging can potentially handle infinite streams, while others work with finite data.
4. Output format: Some return a new data structure, while others modify in place or simulate writing to external storage.

Each of these examples demonstrates the versatility of the K-Way Merge pattern in handling different data structures and scenarios, from in-memory operations to disk-based sorting, and from finite lists to potentially infinite streams.

## Time Complexity

(N log K), where N is the total number of elements across all input sources, and K is the number of input sources (arrays, lists, or streams).

This complexity arises because:
- We process each of the N elements once: O(N)
- For each element, we perform heap operations (insertion or extraction) on a heap of size K: O(log K)

**Space Complexity**:

O(K) in most cases, where K is the number of input sources.

This is because:
- We typically maintain a min-heap (priority queue) with at most K elements
- The heap stores one element from each of the K input sources

In some variations, like the external sort, additional space might be used for buffering or temporary storage, but the core algorithm still maintains O(K) space complexity for the merge operation itself.

It's worth noting that the space complexity doesn't include the space needed for the input or output, as these are typically considered part of the problem constraints. The O(K) space refers to the additional space required by the algorithm beyond the input and output.

This combination of time and space complexity makes the K-Way Merge pattern particularly efficient for scenarios where K is significantly smaller than N, as it allows for merging large amounts of sorted data with relatively little additional memory overhead.

## Ways to Identify

Real-World Applications:

1. **Database Systems**: MongoDB uses a k-way merge sort for efficiently merging results from multiple shards in a distributed database system.
2. **External Sorting**: When dealing with datasets too large to fit in memory, systems like Apache Hadoop use k-way merging as part of their external sorting algorithms.
3. **Log Processing**: Companies like Splunk use k-way merge techniques to consolidate and analyze logs from multiple sources.
4. **Distributed File Systems**: Google's GFS (Google File System) uses k-way merging to combine results from multiple chunks of data stored across different machines.

Keywords:

- "Merge K sorted..."
- "Combine multiple sorted..."
- "Consolidate K ordered..."
- "Heap"
- "Priority Queue"
- "Distributed sorting"
- "External sorting"

Ways to Identify:

1. The problem involves multiple (more than 2) sorted input arrays or lists.
2. You're asked to produce a single sorted output from these inputs.
3. The input size is large, making it inefficient to simply concatenate and sort.
4. The question mentions limitations on memory usage, suggesting that you can't load all data at once.
5. Terms like "stream" or "online algorithm" are used, indicating that you need to process data as it comes in.

When you encounter a problem with these characteristics, the K-Way Merge pattern could be an efficient solution. Remember to consider using a min-heap to keep track of the current smallest elements from each input list, as this is a key component of implementing this pattern efficiently.


[Practice Questions](QUESTIONS.md) | [Examples](examples/)