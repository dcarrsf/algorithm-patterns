# Practice Questions: Backtracking

Overview:

1. **[Permutations](#1-permutations)**: "Generate all possible arrangements of a given set of elements."
2. **[N-Queens](#2-n-queens)**: "Find all possible ways to place N queens on an NxN chessboard so that no two queens threaten each other."
3. **[Sudoku](#3-sudoku-)**: "Given a partially filled 9x9 Sudoku board, complete the board following Sudoku rules."
4. **[Subsets](#4-subsets)**: "Generate all possible subsets (power set) of a given set of elements."

Details:

## 1. **Permutations**

**Question**: "Given a string of unique characters, write a function that returns all possible permutations of the string."

Input:

```javascript
"abc"
```

Expected Output:

```javascript
["abc", "acb", "bac", "bca", "cab", "cba"]
```

Additional Information:

The order of the permutations in the output doesn't matter.

## 2. **N-Queens**

**Question**: "Implement a function that finds all distinct solutions to the 4-Queens puzzle. Each solution contains distinct board configurations of the 4-queens' placement, where 'Q' and '.' represent a queen and an empty space, respectively."

Input:

```javascript
4 // (representing a 4x4 chessboard)
```

Expected Output:

```javascript
[
    [
        ".Q..",  // Solution 1
        "...Q",
        "Q...",
        "..Q."
    ],
    [
        "..Q.",  // Solution 2
        "Q...",
        "...Q",
        ".Q.."
    ]
]
```

Additional Information:

The board is represented as an array of strings. Each string represents a row, and the index of 'Q' in each string represents its column.

## 3. **Sudoku**

**Question**: "Create a function that solves a Sudoku puzzle. The function should modify the input board directly."

Input:

```javascript
[
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]
```

Expected Output:

The solved Sudoku board.

Additional Information:

Empty cells are filled with '.'. Assume the given board has only one solution.

## 4. **Subsets**

**Question**: "Write a function that returns all possible subsets (the power set) of a given set of integers. The solution set must not contain duplicate subsets."

Input:

```javascript
[1,2,3]
```

Expected Output:

```javascript
[[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
```

Additional Information:

The order of subsets in the output doesn't matter. The input set doesn't contain duplicate elements.
