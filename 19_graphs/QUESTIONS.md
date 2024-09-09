# Practice Questions: Graphs

Overview:

1. **[Depth First Search (DFS)](#1-depth-first-search-dfs)**: "Find all possible paths from node A to node B" or "Explore all branches of a tree-like structure"
2. **[Breadth First Search (BFS)](#2-breadth-first-search-bfs)**: "Find the shortest path in an unweighted graph" or "Find all nodes at a distance k from a given node"
3. **[Dijkstra's Algorithm](#3-dijkstras-algorithm)**: "Find the cheapest flight route between two cities" or "Determine the fastest way to reach a destination given road distances"
4. **[Cycle Detection](#4-cycle-detection)**: "Determine if a graph contains a cycle" or "Check if a set of tasks can be completed without circular dependencies"

Details:

## 1. **Depth First Search (DFS)**

**Question**: "Given a binary tree, write a function to find the deepest leaf node."

A binary tree represented as:

```javascript
    1
   / \
  2   3
 / \
4   5
```

Input: 

```javascript
function findDeepestLeaf(root) {
    // Implement this function
}
```

Expected Output: Node with value 4 or 5 (as they are at the same depth)

```javascript
4 or 5
```

Additional Information:

You can assume each node has a value, and left and right child pointers. The root node will be given as input to your function.

## 2. **Breadth First Search (BFS)**

**Question**: "Implement a function to find the shortest path between two words in a dictionary, changing only one letter at a time."

Input:

```javascript
const startWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

function findShortestPath(startWord, endWord, wordList) {
    // Implement this function
}
```

Expected Output:

```javascript
["hit", "hot", "dot", "dog", "cog"]
```

Additional Information:

Each intermediate word must exist in the dictionary. The words all have the same length. Return an empty list if no such sequence exists.

## 3. **Dijkstra's Algorithm**

**Question**: "Given a network of cities and the flight costs between them, find the cheapest route from one city to another."

Input:

```javascript
const cities = ["NYC", "LAX", "CHI", "HOU", "SFO"];
const flights = [
    ["NYC", "LAX", 200],
    ["NYC", "CHI", 100],
    ["LAX", "SFO", 150],
    ["CHI", "HOU", 300],
    ["HOU", "SFO", 250]
];
const start = "NYC";
const end = "SFO";

function findCheapestRoute(cities, flights, start, end) {
    // Implement this function
}
```

Expected Output:

```javascript
{ path: ["NYC", "LAX", "SFO"], cost: 350 }
```


## 4. **Cycle Detection**

**Question**: "You're given a list of tasks and their dependencies. Determine if it's possible to complete all tasks or if there's a circular dependency."

Input:

```javascript
const tasks = ["A", "B", "C", "D"];
const dependencies = [["A", "B"], ["B", "C"], ["C", "D"]];

function canCompleteTasks(tasks, dependencies) {
    // Implement this function
}
```

Expected Output:

```javascript
true
```
Additional Input to test circular dependency:

```javascript
const tasks = ["A", "B", "C", "D"];
const dependencies = [["A", "B"], ["B", "C"], ["C", "D"]];

function canCompleteTasks(tasks, dependencies) {
    // Implement this function
}
```

Expected Output:

```javascript
false
```
