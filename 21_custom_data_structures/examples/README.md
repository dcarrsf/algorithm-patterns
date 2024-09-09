# Examples: Custom Data Structures

## Key Concepts:

### 1. **LRU Cache**:

- Commonly used in scenarios where you need to cache frequently accessed data, but the cache has a limited capacity.
- The LRU (Least Recently Used) eviction policy ensures that the least recently used item is removed when the cache reaches its capacity, making room for new items.
- This is useful in applications that need to quickly retrieve data, such as web browsers, content delivery networks, and database caching systems.

### 2. **Trie (Prefix Tree)**:

- Tries are commonly used for efficient string-based operations, such as autocomplete, spell-checking, and IP routing tables.
- They excel at tasks that involve prefix-based lookups, where you need to quickly determine if a word or prefix exists in a large dataset.
- Tries are particularly useful in applications that deal with a large number of strings, such as search engines, dictionaries, and file systems.

### 3. **MinStack**:

- The MinStack is useful in scenarios where you need to maintain the minimum element in a stack efficiently, such as in stock trading applications, coding interview problems, or any problem that requires tracking the minimum value in a stack-like data structure.
- It's helpful when you need to perform push, pop, top, and getMin operations in constant time, which is not possible with a standard stack.

### 4. **Union-Find (Disjoint Set)**:

- The Union-Find data structure is commonly used in problems that involve grouping or clustering elements, such as in social network connections, image segmentation, and network connectivity problems.
- It allows you to efficiently track and merge disjoint sets of elements, making it useful in graph algorithms, network analysis, and more.
- Union-Find is particularly efficient when you need to quickly determine whether two elements belong to the same set or not, or to merge two sets into a single set.

These custom data structures are designed to solve specific problems more efficiently than standard data structures, making them valuable in a variety of real-world applications and coding challenges.

## More Examples:

### 5. **Priority Queue**:

- A Priority Queue is a specialized data structure that stores elements with associated priorities, allowing you to efficiently retrieve the element with the highest (or lowest) priority.
- It's commonly used in various algorithms and applications that require processing elements in order of importance, such as in Dijkstra's algorithm for finding the shortest path, task scheduling, and event-driven simulations.

### 6. **Segment Tree**:

- A Segment Tree is a tree-based data structure that efficiently stores and queries information about segments or intervals in an array.
- It's particularly useful for tasks that involve range queries, such as finding the minimum, maximum, or sum of elements in a given range of an array.
- Segment Trees are commonly used in competitive programming, data processing, and real-time applications that require fast range-based computations.

### 7. **Fenwick Tree (Binary Indexed Tree)**:

- A Fenwick Tree, also known as a Binary Indexed Tree, is a data structure that efficiently supports range queries and updates over an array.
- It's commonly used in problems that require frequent range updates and range queries, such as in counting inversions, range frequency queries, and prefix sums.
- Fenwick Trees provide a trade-off between update and query times, allowing for efficient operations in both directions.

### 8. **AVL Tree**:

- An AVL Tree is a self-balancing binary search tree, where the heights of the left and right subtrees of any node differ by at most one.
- AVL Trees maintain a balance factor for each node, ensuring that the tree remains balanced, which leads to efficient search, insertion, and deletion operations.
- AVL Trees are commonly used in scenarios where maintaining a balanced binary search tree is essential, such as in databases, file systems, and other applications that require efficient sorting and searching.
