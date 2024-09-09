# Practice Questions: Custom Data Structures

Overview:

1. **[LRU Cache](#1-lru-cache)**: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache."
2. **[Trie](#2-trie)**: "Implement a data structure for efficient prefix matching and word storage."
3. **[MinStack](#3-minstack)**: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time."
4. **[Union-Find](#4-unified-find)**: "Implement a data structure to efficiently track connected components in a graph or perform set operations."

Details:

## 1. **LRU Cache**

**Question**: "Design and implement a data structure for a Least Recently Used (LRU) cache. It should support the following operations:

- get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
- put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Example:

```javascript
LRUCache cache = new LRUCache(2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
```

Please implement the LRUCache class with the described functionality."

Additional Information:

Follow up: Could you do both operations in O(1) time complexity?

## 2. **Trie**

**Question**: "Implement a trie (prefix tree) with insert, search, and startsWith methods.

Example:

```javascript
Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
```

Please implement the Trie class with the described functionality."

Additional Information:

- You may assume that all inputs are consist of lowercase letters a-z.
- All inputs are guaranteed to be non-empty strings.

## 3. **MinStack**

**Question**: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

- MinStack() initializes the stack object.
- push(val) pushes the element val onto the stack.
- pop() removes the element on the top of the stack.
- top() gets the top element of the stack.
- getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.

Example:

```javascript
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

Please implement the MinStack class with the described functionality."


## 4. **Union-Find**

**Question**: "You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Implement the UnionFind class to efficiently determine if two nodes are connected and to connect nodes:

- UnionFind(int n) Initializes the object with n nodes labeled from 0 to n - 1.
- void union(int a, int b) Connects nodes a and b.
- boolean connected(int a, int b) Returns true if nodes a and b are connected, and false otherwise.

Input:

```javascript
const uf = new UnionFind(10);
uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);
console.log(uf.connected(1, 5)); // true
console.log(uf.connected(5, 7)); // true
console.log(uf.connected(4, 9)); // false
uf.union(9, 4);
console.log(uf.connected(4, 9)); // true
```

Implement the UnionFind class to solve this problem efficiently."
