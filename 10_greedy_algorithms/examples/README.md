# Greedy Algorithms Examples

 Greedy algorithms make decisions based on the information available at the current moment, without considering the long-term consequences of those decisions.
 
The key characteristics of the Greedy Algorithms pattern are:

1. **Local Optimization**: Greedy algorithms focus on making the locally optimal choice at each step, with the hope of finding a global optimum. They do not consider the overall, long-term consequences of their decisions.
2. **Simplicity**: Greedy algorithms are often simple to implement and understand, as they make decisions based on the current state without complex planning or backtracking.
3. **Efficiency**: Greedy algorithms generally have a time complexity of O(n) or O(log n), making them efficient for many problem domains.
4. **Suboptimal Solutions**: While greedy algorithms are often effective, they do not always guarantee the optimal solution, as they may miss out on better global choices due to their myopic, local decision-making.

The Greedy Algorithms pattern is useful when:

1. **Optimal Substructure**: The problem can be broken down into smaller, independent subproblems, and the solution to the overall problem can be constructed from the solutions to these subproblems.
2. **Greedy Choice Property**: At each step, the locally optimal choice is also part of the globally optimal solution.
3. **Time/Space Constraints**: The problem requires a fast, efficient solution, and the Greedy Algorithms pattern can provide a good balance between simplicity, speed, and acceptable accuracy.


## Complexity

Greedy algorithms are generally known for their efficiency. Here's a brief summary of the time and space complexities typically associated with these greedy algorithm examples:

1. **Coin Change Problem**
- Time Complexity: O(n log n + m), where n is the number of coin denominations and m is the target amount.
    - O(n log n) for sorting the coins.
    - O(m) in the worst case for iterating through the amount.
- Space Complexity: O(1) or O(n) depending on whether we sort in-place or use additional space.

2. **Activity Selection Problem**
- Time Complexity: O(n log n), where n is the number of activities.
    - O(n log n) for sorting the activities.
    - O(n) for selecting activities.
- Space Complexity: O(n) for storing the sorted activities and selected activities.

3. **Fractional Knapsack Problem**
- Time Complexity: O(n log n), where n is the number of items.
    - O(n log n) for sorting the items by value-to-weight ratio.
    - O(n) for selecting items.
- Space Complexity: O(1) if we sort in-place, or O(n) if we create a new sorted array.

4. **Huffman Coding**
- Time Complexity: O(n log n), where n is the number of unique characters.
    - Building the priority queue takes O(n).
    - Extracting the two minimum elements and inserting a new element into the queue happens n-1 times, each operation taking O(log n).
- Space Complexity: O(n) for storing the Huffman tree and the priority queue.

These complexities demonstrate why greedy algorithms are favored in many scenarios: they often provide efficient solutions with reasonable space requirements, making them suitable for large-scale problems and real-time applications.

[Practice Questions](../QUESTIONS.md)