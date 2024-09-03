# Fast and Slow Pointers

The Fast and Slow Pointers pattern, also known as the "Tortoise and Hare" algorithm, is a technique used to solve problems involving linked lists or arrays. It involves two pointers moving through the data structure at different speeds. The fast pointer typically moves twice as fast as the slow pointer. This [pattern](examples/) is particularly useful for detecting cycles, finding middle elements, or solving problems that require comparing elements at different positions.

[Practice Questions](QUESTIONS.md)

## **Examples**:
1. **[Detect Cycle](examples/detect-cycle.js)**: Find loops in linked list structure.
2. **[Find Middle](examples/find-middle.js)**: Locate central node in single pass.
3. **[Array is Circular](examples/array-is-circular.js)**: Check if array repeats its elements.
4. **[Start of Cycle](examples/start-of-cycle.js)**: Identify beginning of loop in list.

### **Key observations**:

The pattern is particularly effective for problems involving cycles or where we need to compare elements at different positions without using extra space.

Consistencies:

1. All examples use two pointers moving at different speeds.
2. They all have a time complexity of O(n) and space complexity of O(1).
3. Each solution involves a loop that continues until a certain condition is met.
4. All examples work with linear data structures (linked lists or arrays).

Differences:

1. The first and fourth examples deal with cycle detection, while the second and third do not.
2. The second example (finding middle) doesn't require the pointers to meet.
3. The third example works with an array instead of a linked list.
4. The fourth example has two phases: cycle detection and finding the start of the cycle.

These examples demonstrate the versatility of the Fast and Slow Pointers pattern. While they all use the core concept of two pointers moving at different speeds, each applies this principle to solve a different problem. 

## Complexity

Time Complexity:

In general, the time complexity of algorithms using the Fast and Slow Pointers pattern is O(n), where n is the number of elements in the data structure (usually a linked list or an array).
This linear time complexity occurs because:

1. The slow pointer traverses the data structure once, visiting each element exactly one time.
2. The fast pointer, moving at twice the speed, will at most traverse the structure twice.
3. In the worst-case scenario (like a linked list with no cycle), both pointers will traverse to the end of the structure.
4. Even in cyclic structures, the pointers will meet after at most n steps, where n is the length of the cycle.

It's worth noting that in some specific applications, like finding the middle element of a linked list, the algorithm might terminate after examining only half of the elements, but this is still considered O(n) in big O notation.

Space Complexity:

One of the main advantages of the Fast and Slow Pointers pattern is its space efficiency. The space complexity is typically O(1), or constant space.

This constant space complexity is achieved because:

1. The algorithm only uses two pointers, regardless of the input size.
2. No additional data structures that grow with input size are required.
3. The solution doesn't need to store any information about visited nodes or elements.

This O(1) space complexity makes the pattern particularly useful for problems where memory usage is a concern, or when working with very large data sets.

Exceptions and Variations:

While O(n) time and O(1) space are typical, there can be variations:
- In some cycle detection problems where we need to find the cycle's length or starting point, we might need an additional traversal, but this doesn't change the overall O(n) time complexity.
- In rare cases, if the pattern is combined with other algorithms or data structures, the space complexity might increase.
- For certain specialized problems, the time complexity might be less than O(n), such as when we can guarantee finding a result within a fixed number of steps regardless of input size.

In summary, the Fast and Slow Pointers pattern generally provides a highly efficient solution with linear time complexity and constant space complexity, making it an excellent choice for many linked list and array problems, especially those involving cycles or where memory usage is a concern.

## Ways to Identify

Real-World Applications:

1. **Spotify**: Could use this pattern in their circular playlist feature to detect when a playlist has looped back to the beginning.
2. **Git Version Control**: Might use this pattern to detect cyclic dependencies in large codebases.
3. **Amazon's Recommendation System**: Could potentially use this to efficiently traverse through related product chains.
4. **Network Routers**: Might implement this pattern to detect routing loops in network topologies.
5. **Social Media Platforms**: Could use it to detect circular references in user connections or content sharing.

Keywords:

- "Cycle detection"
- "Loop finding"
- "Middle of linked list"
- "Circular array"
- "Tortoise and hare"
- "Floyd's cycle-finding algorithm"
- "Linked list problems"
- "Two runners"

Characteristics:

1. The problem involves a linked list or array that might contain a cycle.
2. You're asked to find a specific element (like the middle) in a single pass.
3. The question mentions "circular" or "cyclic" data structures.
4. You need to compare elements at different positions efficiently.
5. The problem constraints mention constant space complexity (O(1) space).
6. You're dealing with a problem where elements are repeated or form a pattern.
7. The question asks about finding a meeting point of two elements moving at different speeds.

[Practice Questions](QUESTIONS.md) | [Examples](examples/)