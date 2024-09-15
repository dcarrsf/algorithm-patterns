# Practice Questions: Islands (Matrix Traversal)

Overview:

1. **[Number of Islands](#1-number-of-islands)**: Count the number of islands in a 2D grid. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
2. **[Max Area of Island](#2-max-area-of-island)**: Find the maximum area of an island in the grid. An island is a group of '1's connected horizontally or vertically.
3. **[Flood Fill](#3-flood-fill)**: Implement a flood fill algorithm. Given a 2D screen, a point, and a new color, fill the surrounding area until the color changes.
4. **[Number of Closed Islands](#4-number-of-closed-islands)**: Count the number of closed islands. A closed island is an island totally surrounded by 1s (water).

Details:

## 1. **Number of Islands**

**Question**: "Given a 2D grid representing a map where '1' is land and '0' is water, count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically."

Input:

```javascript
const grid = [
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
];
```

Expected Output:

```javascript
3
```

Additional Information:

Diagonal connections do not count as adjacent.


## 2. **Max Area of Island**

**Question**: "You are given a 2D array of 0's and 1's. Find the maximum area of an island in this grid. An island is a group of '1's connected horizontally or vertically, and its area is the total number of '1's in that island."

Input:

```javascript
const grid = [
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]
];
```

Expected Output:

```javascript
6
```

Additional Information:

If there is no island, return 0.


## 3. **Flood Fill**

**Question**: "Implement a flood fill algorithm. Given a 2D screen (represented by a 2D array of integers), a point (x, y), and a new color, fill the surrounding area of the given point with the new color until the color changes from the original color."

Input:

```javascript
const image = [
  [1,1,1],
  [1,1,0],
  [1,0,1]
];
const sr = 1, sc = 1, newColor = 2;
```

Expected Output:

```javascript
[
  [2,2,2],
  [2,2,0],
  [2,0,1]
]
```

Additional Information:

The function should return the modified image. The fill should only include cells connected horizontally or vertically with the same color as the starting point.


## 4. **Number of Closed Islands**

**Question**: "Given a 2D grid of 0's and 1's, where 0 represents land and 1 represents water, count the number of closed islands. A closed island is an island totally surrounded by water (1's)."

Input:

```javascript
const grid = [
  [1,1,1,1,1,1,1,0],
  [1,0,0,0,0,1,1,0],
  [1,0,1,0,1,1,1,0],
  [1,0,0,0,0,1,0,1],
  [1,1,1,1,1,1,1,0]
];
```

Expected Output:

```javascript
2
```

Additional Information:

Islands touching the grid edges are not considered closed islands. The function should return the count of closed islands.

--------

For each of these questions, I would expect the candidate to implement a solution using the Island pattern, likely employing depth-first search or breadth-first search. I would be looking for their ability to handle edge cases, their understanding of grid traversal, and their implementation of the core algorithm efficiently.
