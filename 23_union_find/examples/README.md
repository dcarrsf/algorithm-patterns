# Examples: Union Find

Key characteristics:

1. Efficient operations for merging sets and determining if elements belong to the same set
2. Uses tree-like structures to represent sets
3. Employs optimization techniques like path compression and union by rank

Union Find is useful because it offers near-constant time complexity for its operations, making it highly efficient for large datasets and dynamic connectivity problems.

## Disjoint Sets

Disjoint sets are collections of elements where each element belongs to exactly one set, and no two sets have any elements in common. In other words, the intersection of any two different sets is empty.

Here's a simple example to illustrate the concept:

Let's say we have a group of people, and we want to group them based on their favorite color. Each person can only have one favorite color, so they can only belong to one group. These groups form disjoint sets.

Consider the following people and their favorite colors:

```javascript
const people = {
  Alice: 'Red',
  Bob: 'Blue',
  Charlie: 'Red',
  David: 'Green',
  Eve: 'Blue'
};
```

We can represent this as disjoint sets:

1. Red set: {Alice, Charlie}
2. Blue set: {Bob, Eve}
3. Green set: {David}

These sets are disjoint because:

- No person appears in more than one set
- The sets have no elements in common

[Practice Questions](../QUESTIONS.md)
