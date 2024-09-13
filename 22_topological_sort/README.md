# Topological Sort

Topological Sort is an algorithm for ordering the vertices of a directed acyclic graph (DAG) such that for every directed edge (u, v), vertex u comes before v in the ordering. It's particularly useful for scheduling tasks with dependencies, as it ensures that all prerequisites are completed before dependent tasks.

[Practice Questions](QUESTIONS.md) | [Examples](examples/)

## **Examples**:
1. **[Course Schedule Problem](examples/course-schedule.js)**: Given a list of courses and their prerequisites, determine if it's possible to take all courses.
2. **[Alien Dictionary Problem](examples/.js)**: Given a sorted dictionary of an alien language, find the order of characters in the alphabet.
3. **[Build Order Problem](examples/build-order.js)**: Given a list of projects and dependencies, find a valid build order.
4. **[Task Schedluing Problem](examples/task-scheduling.js)**: Given a set of tasks and their dependencies, find the minimum time to complete all tasks if you have unlimited parallel processors.

### **Key observations**:

Consistencies:

1. All examples use a graph representation of dependencies.
2. They all implement some form of topological sorting.
3. Each solution checks for cycles implicitly or explicitly.
4. In-degree counting is used in all examples to track dependencies.
5. A queue is used to process nodes with no incoming edges.

Differences:

1. Course Schedule focuses on detecting if a valid order exists, not on producing the order.
2. Alien Dictionary deals with inferring order from partial information.
3. Build Order produces a full ordering of all projects.
4. Task Scheduling incorporates weights (time) for each task and calculates the critical path.

In summary, while all these examples utilize the Topological Sort pattern, they each apply it to solve slightly different problems, ranging from simple feasibility checks to complex scheduling optimizations. The core concept remains the same, but the implementation details and output vary based on the specific requirements of each problem.

## Time Complexity

The time and space complexity of algorithms using the Topological Sort pattern typically depends on the specific implementation and the nature of the graph. Here's a general summary:

Time Complexity:

- O(V + E), where V is the number of vertices and E is the number of edges in the graph.

This complexity applies to both the common implementations:

1. Kahn's algorithm (BFS-based)
2. DFS-based topological sort

The reasoning behind this complexity is:

- We need to visit each vertex once: O(V)
- We also process each edge once: O(E)

Space Complexity:

- O(V), where V is the number of vertices.

This space is typically used for:

- The adjacency list representation of the graph
- A queue or stack for processing vertices
- An array to store the in-degree of each vertex (for Kahn's algorithm)
- The output array to store the topological order

In some implementations, particularly those using DFS, we might also use:

- A visited array: O(V)
- A recursion stack (in the case of recursive DFS): O(V) in the worst case

It's worth noting that in dense graphs where E is close to V^2, the time complexity could approach O(V^2). However, in many practical applications, graphs tend to be sparse (E is much less than V^2), making the O(V + E) complexity more relevant.

For specific variations of topological sort problems (like the Task Scheduling example with weights), additional data structures might be used, potentially increasing the space complexity, but the core topological sort operation typically maintains these complexities.


## Ways to Identify

Real-World Applications:

1. **Build systems (Make, Gradle)**: Determining the order of compiling source files based on their dependencies.
2. **Package managers (npm, pip)**: Resolving and installing dependencies in the correct order.
3. **Task schedulers (Apache Airflow)**: Scheduling jobs or workflows with interdependencies.
4. **Course scheduling in universities**: Ensuring prerequisites are taken before advanced courses.
5. **Data processing pipelines (Apache Spark)**: Organizing data transformations in the correct sequence.

Keywords:

- "Dependency"
- "Prerequisite"
- "Order"
- "Schedule"
- "Directed Acyclic Graph (DAG)"
- "Task sequencing"
- "Build order"
- "Course schedule"

Characteristics:

1. The problem involves ordering items or tasks with dependencies.
2. There's a clear directional relationship between elements (e.g., A must come before B).
3. The question mentions a directed graph without cycles.
4. You need to find a valid sequence or check if a valid sequence exists.
5. The problem involves scheduling or determining build order.
6. Terms like "prerequisites," "dependencies," or "before/after relationships" are used.
7. The input is given as a list of pairs representing edges in a graph.

When you encounter a problem with these characteristics, consider using the Topological Sort pattern to develop your solution.

[Practice Questions](QUESTIONS.md) | [Examples](examples/)