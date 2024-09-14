# Practice Questions: Union Find

Overview:

1. **[Connected Components](#1-connected-components)**: "Given n nodes and a list of edges, how many connected components are in the graph?"
2. **[Cycle Detection](#2-cycle-detection)**: "Given an undirected graph represented by edges, determine if the graph contains a cycle."
3. **[Friend Circles](#3-friends-circles)**: "Given a matrix representing friendships, where M[i][j] = 1 if person i and j are friends, find the number of friend circles."
4. **[Redundant Connection](#4-redundant-connection)**: "In a graph that started as a tree, one extra edge was added. Find and return that edge."
Details:

## 1. **Connected Components**

Problem: Network Connectivity

**Question**: "You're working on a system to analyze connectivity in a computer network. 
Given a number of computers and a list of direct connections between them, 
determine the number of separate networks."

Input:

- n: Number of computers (labeled from 0 to n-1)
- connections: Array of arrays, where each sub-array [a, b] represents a 
               direct connection between computer a and computer b

```javascript
const n = 5;
const connections = [[0,1], [1,2], [3,4]];

function countNetworks(n, connections) {
    // Implement your solution here
}
```

Expected Output:

- Number of separate networks

```javascript
2
```

Additional Information:

There are two separate networks: one consisting of computers 0, 1, and 2, 
and another consisting of computers 3 and 4.


## 2. **Cycle Detection**

Problem: Circular Dependencies

**Question**: "You're developing a build system for a software project. Each file in the 
project may depend on other files. You need to detect if there are any 
circular dependencies that would cause the build to fail."

Input:

- n: Number of files (labeled from 0 to n-1)
- dependencies: Array of arrays, where each sub-array [a, b] indicates 
                that file a depends on file b

```javascript
const n = 4;
const dependencies = [[0,1], [1,2], [2,3], [3,1]];

function hasCircularDependency(n, dependencies) {
    // Implement your solution here
}
```

Expected Output:

- Boolean indicating whether there are any circular dependencies

```javascript
true
```

Additional Information:

There is a circular dependency: 1 -> 2 -> 3 -> 1


## 3. **Friend Circles**

Problem: Social Network Analysis

**Question**: "You're analyzing data from a social network. You're given a matrix where 
M[i][j] is 1 if person i and person j are friends, and 0 otherwise. 
Find the number of friend circles in the network. A friend circle is a 
group of people who are directly or indirectly friends."

Input:

- M: n x n matrix representing friendships

```javascript
const M = [
    [1,1,0],
    [1,1,0],
    [0,0,1]
];

function countFriendCircles(M) {
    // Implement your solution here
}
```

Expected Output:

- Number of friend circles

```javascript
2
```

Additional Information:

There are two friend circles: [0,1] and [2].

## 4. **Redundant Connection**

Problem: Network Optimization

**Question**: "You're optimizing a network topology. The network was originally designed 
as a tree structure, but an extra connection was accidentally added, 
creating a cycle. Find this redundant connection."

Input:

- edges: Array of arrays representing the network connections. 
         Each connection is undirected.

```javascript
const edges = [[1,2], [1,3], [2,3]];

function findRedundantConnection(edges) {
    // Implement your solution here
}
```

Expected Output:

- The redundant edge that can be removed to turn the graph back into a tree

```javascript
[2,3]
```

Additional Information:

Removing the connection between nodes 2 and 3 will turn the graph 
back into a tree structure.

Note: If there are multiple answers, return the redundant connection 
that occurs last in the input.
