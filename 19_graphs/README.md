# Graphs

The 'Graphs" pattern involves problems that can be modeled using graph data structures. A graph consists of nodes (or vertices) connected by edges. This pattern is useful for solving problems related to networks, relationships, or any scenario where entities are interconnected. Graphs can be directed or undirected, weighted or unweighted, and may contain cycles or be acyclic. Common graph algorithms include depth-first search (DFS), breadth-first search (BFS), shortest path algorithms (like Dijkstra's or Bellman-Ford), and minimum spanning tree algorithms (like Kruskal's or Prim's).

[Practice Questions](QUESTIONS.md) | [Examples](examples/)

## **Examples**:
1. **[Depth-First Search (DFS)](examples/dfs.js)**: Explores as far as possible along each branch before backtracking.
2. **[Breadth-First Search (BFS)](examples/bfs.js)**: Explores all neighbors at present depth before moving to next level.
3. **[Dijkstra's Shortest Path Algorithm](examples/shortest-path.js)**: Finds shortest paths between nodes in a weighted graph.
4. **[Detect Cycle in an Undirected Graph](examples/detect-cycle.js)**: Identifies presence of cycles in a graph using modified traversal.

### **Key observations**:

Consistencies:

1. All examples use a Graph class with an adjacency list representation.
2. They all involve traversing or analyzing the structure of the graph.
3. Each algorithm visits vertices and explores their neighbors.
4. All examples can be applied to both directed and undirected graphs (with minor modifications).

Differences:

1. DFS uses a stack (recursive call stack) while BFS uses a queue.
2. Dijkstra's algorithm uses a priority queue and is specifically for weighted graphs.
3. The cycle detection algorithm uses a modified DFS with a parent-tracking mechanism.
4. DFS and BFS focus on traversal, Dijkstra's on finding shortest paths, and cycle detection on graph structure.

These examples demonstrate different aspects of graph problems, from simple traversal to more complex path-finding and structural analysis. The choice of algorithm depends on the specific requirements of the problem, such as whether you need to explore depth-first, find shortest paths, or analyze the graph's structure.

## Time Complexity



## Ways to Identify

Real-World Applications:

1. **Social Networks** (Facebook, LinkedIn): Friend relationships, connection suggestions
2. **Navigation Systems** (Google Maps, Waze): Finding shortest routes, traffic analysis
3. **Recommendation Systems** (Netflix, Amazon): Product or content suggestions based on user preferences
4. **Computer Networks**: Routing protocols, network topology analysis
5. **Dependency Resolution** (npm, pip): Managing software package dependencies

Keywords:

- "Network"
- "Connections"
- "Relationships"
- "Routes"
- "Paths"
- "Traverse"
- "Nodes"
- "Vertices"
- "Edges"
- "Directed/Undirected"
- "Cyclic/Acyclic"
- "Weighted/Unweighted"

Ways to Identify:

1. The problem involves relationships between entities
2. You need to find a path or connection between two points
3. The question mentions vertices, edges, or nodes
4. You're asked to traverse or explore a structure
5. The problem involves finding the shortest path or minimum cost path
6. You need to detect cycles or find strongly connected components
7. The question asks about dependencies or hierarchies
8. You're dealing with a maze or grid-like structure that can be represented as a graph


[Practice Questions](QUESTIONS.md) | [Examples](examples/)