# Extras: Custom Data Structures

### Key Concepts:

### 1. **Priority Queue**:

- A Priority Queue is a specialized data structure that stores elements with associated priorities, allowing you to efficiently retrieve the element with the highest (or lowest) priority.
- It's commonly used in various algorithms and applications that require processing elements in order of importance, such as in Dijkstra's algorithm for finding the shortest path, task scheduling, and event-driven simulations.

### 2. **Segment Tree**:

- A Segment Tree is a tree-based data structure that efficiently stores and queries information about segments or intervals in an array.
- It's particularly useful for tasks that involve range queries, such as finding the minimum, maximum, or sum of elements in a given range of an array.
- Segment Trees are commonly used in competitive programming, data processing, and real-time applications that require fast range-based computations.

### 3. **Fenwick Tree (Binary Indexed Tree)**:

- A Fenwick Tree, also known as a Binary Indexed Tree, is a data structure that efficiently supports range queries and updates over an array.
- It's commonly used in problems that require frequent range updates and range queries, such as in counting inversions, range frequency queries, and prefix sums.
- Fenwick Trees provide a trade-off between update and query times, allowing for efficient operations in both directions.

### 4. **AVL Tree**:

- An AVL Tree is a self-balancing binary search tree, where the heights of the left and right subtrees of any node differ by at most one.
- AVL Trees maintain a balance factor for each node, ensuring that the tree remains balanced, which leads to efficient search, insertion, and deletion operations.
- AVL Trees are commonly used in scenarios where maintaining a balanced binary search tree is essential, such as in databases, file systems, and other applications that require efficient sorting and searching.


### 5. **Bloom Filter**:

- A Bloom Filter is a space-efficient probabilistic data structure used to test whether an element is a member of a set.
- It's particularly useful when you need to quickly check if an item exists in a large set of data, with a trade-off of allowing some false positives but no false negatives.
- Bloom Filters are commonly used in caching systems, database query optimization, and network routers to filter packet destinations.

### 6. **Skip List**:

- A Skip List is a probabilistic data structure that allows for fast search, insertion, and deletion operations.
- It maintains multiple layers of linked lists, with each higher layer acting as an "express lane" for the layer below, allowing for O(log n) average time complexity for these operations.
- Skip Lists are often used as an alternative to balanced trees and are particularly useful in situations where quick insertion and deletion are required alongside efficient searching.

### 7. **Disjoint Set (Union-Find with Path Compression)**:

- A Disjoint Set data structure, also known as Union-Find, efficiently maintains a collection of disjoint sets and supports two primary operations: union (merging two sets) and find (determining which set an element belongs to).
- This implementation includes path compression, which optimizes the find operation by flattening the structure of the tree.
- Disjoint Sets are commonly used in algorithms for finding connected components in graphs, detecting cycles, and in Kruskal's algorithm for finding minimum spanning trees.

### 8. **Suffix Array**:

- A Suffix Array is a sorted array of all suffixes of a given string. It allows for efficient string matching and is particularly useful in text processing and computational biology.
- While not a tree-like structure, it's a powerful tool for tasks such as finding the longest common substring, string matching, and data compression.
- Suffix Arrays are often used in conjunction with the LCP (Longest Common Prefix) array for even more powerful string processing capabilities.
