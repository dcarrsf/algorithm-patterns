# Tree Breadth-First Search

Tree Breadth-First Search is a pattern used to explore or search tree data structures by visiting all nodes at the current depth before moving to nodes at the next depth level. This pattern is particularly useful for problems involving level-by-level traversal, finding the shortest path, or searching for nodes closest to the root. BFS is typically implemented iteratively using a queue.

[Practice Questions](QUESTIONS.md)

## **Examples**:
1. **[Level Order](examples/level-order.js)**: This is useful for problems requiring level-by-level processing of tree nodes.
2. **[Min Depth](examples/min_depth.js.js)**: This is applicable to problems involving finding the shortest path or minimum distance in a tree.
3. **[Zigzag Level Order](examples/zigzag-level-order.js)**: This is useful for problems requiring alternating direction traversal or when the order within levels needs to be manipulated.
4. **[Nearest Right Node](examples/nearest_right_node.js)**: This is applicable to problems involving finding relationships between nodes at the same level or nearest neighbor queries in a tree.

### **Key observations**:

Consistencies:

- All examples use a queue to implement BFS.
- They all process nodes level by level.
- Each example has a time complexity of O(n), where n is the number of nodes in the tree.
- All handle the case of an empty tree (null root).

Differences:

- Return Value:
  - Example 1 returns a 2D array of level-wise node values.
  - Example 2 returns a single number (the minimum depth).
  - Example 3 returns a 2D array with zigzag ordering.
  - Example 4 returns a node or null.
- Queue Content:
  - Examples 1, 3, and 4 store only nodes in the queue.
  - Example 2 stores nodes along with their depths.
- Level Processing:
  - Examples 1 and 3 explicitly process each level.
  - Examples 2 and 4 don't necessarily process entire levels.
- Termination Condition:
  - Examples 1 and 3 process the entire tree.
  - Example 2 stops at the first leaf node encountered.
  - Example 4 stops when the target node is found.

These examples demonstrate how the Tree BFS pattern can be adapted to solve various tree-related problems, particularly those involving level-wise processing or finding the shortest paths in a tree structure.

## **Real-World Applications**:

1. **Social Network Analysis**: Finding all friends within a certain degree of connection.
2. **Web Crawling**: Exploring websites level by level.
3. **GPS Navigation**: Finding the shortest route in terms of stops.
4. **Garbage Collection**: Identifying unreachable objects in memory management.

## **Keywords**:

- "level order"
- "queue"
- "breadth"
- "width"
- "level-by-level"
- "shortest path"
- "nearest neighbor"

## **Ways to Identify**:

1. The problem asks for level-order traversal of a tree.
2. You need to find the minimum depth or shortest path in a tree.
3. The question involves finding all nodes at a certain distance from the root.
4. You need to connect nodes at the same level (e.g., connecting cousins in a family tree).
5. The problem requires processing nodes in order of their distance from the root.
6. You need to find the closest or nearest nodes to a given node.

Tree BFS is effective for problems where the solution is likely to be found in the upper levels of the tree or when you need to process nodes level by level. It's often contrasted with Depth-First Search (DFS), and the choice between them depends on the specific problem requirements and tree structure.

The key characteristic of BFS is its use of a queue data structure to keep track of nodes to be processed, ensuring that nodes are visited in order of their distance from the root.

[Practice Questions](QUESTIONS.md) | [Examples](examples/)