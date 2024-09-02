# Greedy Algorithms

The Greedy Algorithms pattern is a problem-solving technique where the goal is to find the locally optimal choice at each stage with the hope of finding a global optimum. [Greedy algorithms](examples/README.md) make decisions based on the information available at the current moment, without considering the long-term consequences of those decisions.

[Practice Questions](QUESTIONS.md)

## **Examples**:
1. **[Coin Change](examples/coin-change.js)**: Find the minimum number of coins needed to make up that amount.
2. **[Activity Selection Problem](examples/activity-selection.js)**: Find the maximum number of non-overlapping activities that can be performed.
3. **[Fractional Knapsack Problem](examples/fractional-knapsack-problem.js)**: Find the maximum value that can be put into the knapsack.
4. **[Huffman Coding](examples/huffman-coding.js)**: Construct a binary tree that represents the optimal prefix code for compressing the data.

### **Key Observations**:

These examples demonstrate how the Greedy Algorithms pattern can be applied to various optimization problems, each with its unique constraints and objectives.

Consistencies

1. **Greedy Choice**: All examples make locally optimal choices at each step.
2. **Optimization**: Each example aims to optimize a specific objective (minimizing coins, maximizing activities, maximizing value, minimizing encoding length).
3. **Sorting**: Most examples involve sorting data as a preliminary step to facilitate greedy choices.
4. **Iteration**: All solutions involve iterating through the input data once.

Differences

1. **Problem Domain**: Each example addresses a different type of problem (change-making, scheduling, resource allocation, data compression).
2. **Input Structure**: The input data structures vary (array of integers, array of objects, tree structure).
3. **Outpu**t: The outputs differ in type and structure (integer, array, float, tree).
4. **Complexity**: While all are efficient, the time complexities may vary slightly due to sorting steps or data structures used.

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

General Observations:

1. **Time Complexity**: Greedy algorithms often have a time complexity of O(n log n) due to an initial sorting step, followed by O(n) processing.
2. **Space Complexity**: Space complexity is often O(n) for storing input or output, but can sometimes be optimized to O(1) for in-place operations.
3. **Efficiency**: Greedy algorithms are typically more efficient than dynamic programming or backtracking approaches for problems where they can be applied correctly.
4. **Trade-off**: The efficiency of greedy algorithms comes at the cost of not always guaranteeing the optimal solution for every problem.

These complexities demonstrate why greedy algorithms are favored in many scenarios: they often provide efficient solutions with reasonable space requirements, making them suitable for large-scale problems and real-time applications.

## Ways to Identify

Real-World Applications:

1. **Scheduling and Resource Allocation**: Greedy algorithms are used in task scheduling, job scheduling, and resource allocation problems, where the goal is to maximize the utilization of limited resources.
2. **Network Routing and Optimization**: Greedy algorithms are used in networking protocols, such as Dijkstra's algorithm for finding the shortest path in a network, and the Kruskal's algorithm for finding the minimum spanning tree.
3. **Knapsack Problem**: Greedy algorithms are used to solve the 0/1 Knapsack problem, where the goal is to select a subset of items that maximizes the total value while staying within a weight limit.
4. **Huffman Coding**: Greedy algorithms are used in data compression techniques, such as Huffman coding, where the goal is to minimize the average bit length of the encoded data.

Keywords

- "Maximize/Minimize"
- "Optimizing"
- "Selecting"
- "Sorting"
- "Scheduling"
- "Shortest/Longest Path"
- "Knapsack"
- "Huffman Coding"

Characteristics:

1. **Optimal Substructure**: Can the problem be broken down into smaller, independent subproblems?
2. **Greedy Choice Property**: Does the locally optimal choice at each step also lead to the globally optimal solution?
3. **Time/Space Constraints**: Does the problem require a fast, efficient solution, and can the Greedy Algorithms pattern provide a good balance between simplicity, speed, and acceptable accuracy?
4. **Sorting or Prioritization**: Does the problem involve sorting or prioritizing elements based on certain criteria?
5. **Resource Allocation or Scheduling**: Does the problem involve allocating resources or scheduling tasks in an optimal way?

By identifying these characteristics in the problem statement, you can recognize the Greedy Algorithms pattern and apply the appropriate problem-solving techniques.


[Practice Questions](QUESTIONS.md) | [Examples](examples/)