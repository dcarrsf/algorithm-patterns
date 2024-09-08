# Backtracking

Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time. It's essentially a "brute force" approach that explores all potential solutions in a systematic way.

[Practice Questions](QUESTIONS.md) | [Examples](examples/)

## **Examples**:
1. **[Generate All Permutations of a String](examples/permutations.js)**: Systematically arrange all possible orderings of given elements.
2. **[N-Queens Problem](examples/n-queens.js)**: Place N queens on chessboard without threatening each other.
3. **[Sudoku Solver](examples/sudoku.js)**: Fill 9x9 grid with digits following Sudoku rules.
4. **[Generate All Subsets of a Set](examples/subsets.js)**: Create all possible combinations of elements from given set.

### **Key observations**:

Consistencies:

1. All examples use recursive backtracking.
2. They all build solutions incrementally.
3. Each has a base case where a solution is added or returned.
4. All examples explore multiple possibilities at each step.
5. They all use a form of constraint checking to prune invalid paths.

Differences:

1. The permutation and subset generators work with discrete elements, while Sudoku and N-Queens deal with 2D board configurations.
2. The permutation generator and N-Queens problem find all possible solutions, while the Sudoku solver stops at the first valid solution.
3. The constraint checking varies in complexity: simple for subsets, moderate for permutations, and more complex for N-Queens and Sudoku.
4. The subset generator doesn't need to check for validity at each step, unlike the other examples.

These examples demonstrate how backtracking can be applied to various types of problems, from simple combinatorial tasks to complex puzzle-solving scenarios. The key is to recognize when a problem involves exploring all possibilities in a systematic way, with the ability to abandon invalid paths early in the process.

## Time Complexity

Backtracking algorithms often have exponential time complexity in the worst case, as they potentially explore all possible solutions. The time complexity is typically O(b^d), where:

- b is the branching factor (the number of choices at each step)
- d is the maximum depth of the recursion tree

In practice, the actual time can be less if the algorithm can prune many branches early.

**Space Complexity**

The space complexity of backtracking algorithms is generally O(d), where d is the maximum depth of the recursion tree. This is due to the recursive call stack.


It's important to note that while these complexities might seem high, backtracking is often much more efficient in practice than brute-force enumeration, especially for problems with many invalid solutions that can be pruned early.

The efficiency of backtracking algorithms heavily depends on how quickly invalid paths can be identified and pruned, which can significantly reduce the actual number of recursive calls and improve performance.

## Ways to Identify

Real-World Applications:

1. **Google Maps**: Uses backtracking in its route-finding algorithms to explore multiple paths and find optimal routes.
2. **Chess engines (like those used by chess.com or lichess.org)**: Employ backtracking to analyze possible moves and their consequences.
3. **Sudoku solvers**: Many online Sudoku games use backtracking to generate and solve puzzles.
4. **Text editors (like Visual Studio Code)**: Use backtracking in their find-and-replace functionality, especially for regular expression matching.

Keywords:

- "Find all possible..."
- "Generate all combinations..."
- "List all permutations..."
- "Solve puzzle"
- "N-Queens problem"
- "Sudoku solver"
- "Path finding"
- "Constraint satisfaction"

Ways to Identify:

1. The problem asks for all possible solutions, not just one solution.
2. The problem involves making a sequence of decisions or choices.
3. There are constraints that need to be satisfied at each step.
4. The solution can be built incrementally, and partial solutions can be evaluated.
5. The problem involves exploring a tree-like structure of possibilities.
6. You need to find a specific configuration or arrangement that meets certain criteria.


[Practice Questions](QUESTIONS.md) | [Examples](examples/)