# Tree Depth-First Search

Tree Depth-First Search is a pattern used to explore or search tree data structures by going as deep as possible along each branch before backtracking. This pattern is particularly useful for problems involving tree traversal, finding paths, or searching for specific nodes or values within a tree. DFS can be implemented recursively or iteratively using a stack, and it has three main variants: pre-order, in-order, and post-order traversal.

[Practice Questions](QUESTIONS.md)

## **Examples**

1. **[Pre-order Traversal](examples/pre-order.js)**: This is useful for problems that need to process a node before its children.
2. **[Path Sum](examples/path_sum.js)**: This is used for problems involving path-specific conditions or cumulative values along paths.
3. **[Max Depth](examples/max_depth.js)**: This is applicable to problems about tree properties like height, depth, or level-related queries.
4. **[All Paths](examples/all_paths.js)**: This is useful for problems that require collecting or processing all possible paths in a tree.

### **Key observations**:

Consistencies:

- All examples use recursive DFS to traverse the tree.
- They all handle the base case of an empty tree (null node).
- Each function processes nodes as it traverses the tree.
- The overall time complexity for all examples is O(n), where n is the number of nodes in the tree.

Differences:

- Traversal Order:
  - Example 1 uses pre-order traversal (node, left, right).
  - Examples 2, 3, and 4 use a more general DFS approach, adapting the order to the specific problem.
- Return Value:
  - Pre-order traversal returns an array of node values.
  - Path sum returns a boolean.
  - Max depth returns a number (depth).
  - Max depth returns an array of strings (paths).
- Problem-Specific Logic:
  - Path sum subtracts from the target sum as it traverses.
  - Max depth compares depths of left and right subtrees.
  - Max depth builds paths as it traverses and only adds complete root-to-leaf paths.
- Backtracking:
  - Max depth explicitly uses backtracking by creating new path arrays for each recursive call.

**[Post-order Traversal](examples/post-order.js)**: To round out the concept, here is an example that processes a node after its children. 

Post-order traversal is particularly useful in scenarios where you need to process children before their parent, such as:

1. Deleting nodes in a tree (to delete child nodes before parent nodes).
2. Evaluating postfix expressions.
3. Computing the size of a directory (need to compute sizes of subdirectories first).
4. In some tree balancing algorithms where you need information from subtrees before processing the current node.

The choice between pre-order, in-order, and post-order traversal depends on the specific requirements of the problem you're solving and the order in which you need to process the nodes in the tree.

**[Iteration with a Stack](examples/iteration.js)**: This example uses a while loop instead of recursion.

When to use iterative DFS with a stack:

1. When dealing with very deep trees where recursive calls might lead to stack overflow.
2. In languages or environments with limited recursion depth.
3. When you need more control over the traversal process, like the ability to pause and resume.
4. In interviews, to demonstrate knowledge of both recursive and iterative approaches.

The iterative approach using a stack mimics the behavior of the call stack in the recursive approach. It provides the same functionality but with explicit control over the stack, which can be advantageous in certain situations, especially when dealing with memory constraints or when fine-grained control over the traversal process is required.

## **Space Complexity O(h)**

Space complexity O(h) means that the extra space used by the algorithm grows linearly with the height of the tree (h), not with the total number of nodes (n).

In tree traversal algorithms using recursion:

1. **Definition of h**:  h is the height of the tree, which is the length of the path from the root to the deepest leaf node.
2. **Recursive Call Stack**:
    - Each recursive call adds a new frame to the call stack.
    - The maximum number of frames on the call stack at any time is equal to the depth of the current path being explored.
    - The deepest path is equal to the height of the tree.
3. **Best Case**:
    - In a balanced binary tree, h ≈ log(n), where n is the number of nodes. This gives a space complexity of O(log n) in the best case.
4. **Worst Case**:
    - In a completely unbalanced tree (essentially a linked list), h = n.
    - This results in a worst-case space complexity of O(n).
  
Why it's not always O(n)? While the tree has n nodes, we don't need stack space for all nodes simultaneously. We only need space for the current path from root to leaf.

```javascript
     1
    / \
   2   3
  / \
 4   5
 ```

In this tree, h = 3. The deepest recursive call stack will occur when exploring the path 1 -> 2 -> 4 or 1 -> 2 -> 5, using 3 stack frames.

Contrast with Iterative Approaches:

- Iterative DFS using a stack explicitly would have the same O(h) space complexity.
- Iterative BFS using a queue could use O(w) space, where w is the maximum width of the tree.

Practical Implications:

- For balanced trees, recursive DFS is space-efficient (O(log n)).
- For highly unbalanced trees, consider iterative approaches if space is a concern.

Understanding space complexity in terms of tree height (h) rather than total nodes (n) gives a more precise description of the algorithm's space usage, especially when tree shape can vary significantly.

## **Real-World Applications**:

1. **File System Navigation**: Operating systems use DFS to search for files in directory structures.
2. **Web Crawling**: Search engines employ DFS to explore and index web pages.
3. **Solving Puzzles**: Games and puzzle solvers often use DFS to explore possible moves or solutions.
4. **Network Routing**: DFS is used in routing algorithms to find paths in network topologies.

## **Keywords**:

- "tree"
- "binary tree"
- "root"
- "leaf"
- "path"
- "depth"
- "recursive"
- "traversal"
- "pre-order"
- "in-order"
- "post-order"

## **Ways to Identify**:

1. The problem involves traversing or searching a tree structure.
2. You need to find a specific path from the root to a leaf node.
3. The question asks about the depth or height of a tree.
4. You need to perform an operation on every node in the tree.
5. The problem requires exploring all possible paths in a tree.
6. You need to find the deepest nodes or leaves in a tree.

Tree DFS is highly versatile and can be adapted to solve a wide range of tree-related problems. Its effectiveness comes from its ability to explore deep paths quickly and its relatively simple implementation, especially when using recursion. The choice between DFS and other tree traversal methods (like BFS) often depends on the specific requirements of the problem and the structure of the tree.

[Practice Questions](QUESTIONS.md) | [Examples](examples/)