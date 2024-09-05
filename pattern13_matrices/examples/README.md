# Matrices Examples

### Overview:

1. **[Island Count](#1-island-count)**: Problems involving connected components in a grid, such as counting regions or flood fill algorithms.
2. **[Rotate Image](#2-rotate-image)**: Questions about geometric transformations of matrices, including reflections and transpositions.
3. **[Word Search](#3-word-search)**: Path-finding problems in a grid, especially those requiring backtracking.
4. **[Game of Life](#4-game-of-life)**: Cellular automaton problems or any scenario where the state of each cell depends on its neighbors.

The following presents each of the example questions in an interview format.

## 1. **Island Count**

**Question**: Given a 2D grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example Input:

```javascript
[
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
]
```

Expected Output: 3

Additional Details:

- The grid is represented as a 2D array of characters.
- You can modify the input grid if needed.
- Consider edge cases like an empty grid or a grid with all water/land.

## 2. **Rotate Image**

**Question**: You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise) in-place. You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example Input:

```javascript
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
```

Expected Output:

```javascript
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
```

Additional Details:

- The matrix will have dimensions n x n where 1 ≤ n ≤ 200.
- Matrix elements are integers.
- You must do this in-place without allocating extra space.

## 3. **Word Search**

**Question**: Given a 2D board and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example Input:

```javascript
const board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
const word = "ABCCED"
```

Expected Output: true

Additional Details:

- The board will be a 2D array of characters.
- The word will be a string of uppercase English letters.
- The board dimensions will be m x n where 1 ≤ m, n ≤ 200.
- You may assume the word length won't exceed the maximum of m and n.


## 4. **Game of Life**

**Question**:  Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules:
1. Any live cell with fewer than two live neighbors dies, as if caused by under-population.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by over-population.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

Write a function to compute the next state (after one update) of the board given its current state.

Example Input:

```javascript
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
```

Expected Output:

```javascript
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
```

Additional Details:

- The board dimensions will be m x n where 1 ≤ m, n ≤ 200.
- You should update the board in-place.
- Can you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.


-------

For each of these questions, the interviewee is expected to ask clarifying questions if needed, discuss their approach, explain their solution's time and space complexity, and then implement the solution. They should also consider edge cases and be prepared to optimize their initial solution if asked.
