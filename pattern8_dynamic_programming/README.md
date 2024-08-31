# Dynamic Programming

Dynamic Programming (DP) is an algorithmic technique that solves complex problems by breaking them down into simpler subproblems. It's particularly useful for optimization problems where you need to find the best solution among many possible ones. *The key idea is to store the results of subproblems to avoid redundant computations, thus improving efficiency.* DP is powerful because it can significantly reduce time complexity from exponential to polynomial in many cases.

[Practice Questions](QUESTIONS.md)

## **Examples**:
1. **[Maximum Subarray Sum (Kadane's Algorithm)](examples/maximum-subarray-sum.js)**: 
2. **[Longest Increasing Subsequence](examples/longest-increasing-subsequence.js)**: 
3. **[Coin Change (Minimum Coins)](examples/coin-change.js)**: 
4. **[Climbing Stairs](examples/climbing-stairs.js)**: 

### **Key observations**:

Consistencies:

1. All examples use an array (dp) to store intermediate results.
2. They all involve iterating through the input or up to a certain number.
3. Each step builds on previous results stored in the dp array.
4. The final answer is typically found at the end of the dp array or by tracking a max/min value.

Differences:

1. The Maximum Subarray Sum uses a constant space approach (Kadane's algorithm), while others use O(n) space.
2. Longest Increasing Subsequence and Coin Change use nested loops, while others use a single loop.
3. Coin Change handles an additional input (the coin denominations) alongside the target amount.
4. Climbing Stairs is the only one that doesn't involve finding a max/min, but rather counts total ways.

These examples demonstrate how Dynamic Programming can be applied to various types of optimization and counting problems. They all share the core DP principle of breaking down the problem into smaller subproblems and building up the solution, but each has its unique characteristics in terms of what it's optimizing for and how it structures the dp array.

## Real-World Applications:

1. **Google Maps**: Uses DP in its route-finding algorithms to calculate the shortest path between two points.
2. **Bioinformatics**: Companies like Illumina use DP for sequence alignment in DNA analysis.
3. **Finance**: Trading algorithms often employ DP for portfolio optimization and risk management.
4. **Video Compression**: Platforms like YouTube use DP in video encoding algorithms to optimize compression.
5. **Gaming AI**: Companies like DeepMind use DP in game-playing algorithms, such as for chess or Go.

## Keywords:

- "Optimal"
- "Maximum/Minimum"
- "Longest/Shortest"
- "Count total ways"
- "Can be reached"
- "Subsequence"
- "Subarray"
- "Partition"

## Ways to Identify:

1. **Overlapping Subproblems**: The problem can be broken down into smaller, similar subproblems that are solved multiple times.
2. **Optimal Substructure**: The optimal solution to the problem can be constructed from optimal solutions of its subproblems.
3. **Choice at each step**: There are multiple ways to solve the problem at each step, and you need to find the best one.
4. **Future decisions depend on earlier ones**: The choice made at one step affects the choices available at future steps.
5. **Counting or Optimization Problems**: Questions asking for the maximum, minimum, or the number of ways to do something.
6. **Can't use Greedy**: If a greedy approach doesn't work, DP might be the next best option.


[Practice Questions](QUESTIONS.md) | [Examples](./examples/)