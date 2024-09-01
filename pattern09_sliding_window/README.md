# Sliding Window

The Sliding Window pattern is an efficient technique for processing sequential data, typically arrays or strings. It involves creating a "window" that slides over the data, allowing us to process subarrays or substrings without unnecessary recomputation. This pattern is particularly useful for solving problems that require finding subarrays or substrings that meet certain conditions, often optimizing the time complexity from O(n^2) to O(n).

[Practice Questions](QUESTIONS.md)

## **Examples**:
1. **[Maximum Sum Subarray of Size K](examples/max-sum-subarray-of-k.js)**: Find highest sum of fixed-size consecutive elements
2. **[Longest Substring with K Distinct Characters](examples/longest-substring-of-k.js)**: Longest substring with limited unique character count
3. **[Smallest Subarray with a Given Sum](examples/smallest-subarray-sum.js)**: Shortest subarray reaching or exceeding target sum
4. **[All Anagrams](examples/all-anagrams.js)**: Locate all permutations of pattern in string

### **Key observations**:

Consistencies:

1. All examples use a sliding window approach to process the input sequentially.
2. They all maintain a window that expands or contracts based on certain conditions.
3. Each solution optimizes the time complexity to O(n) by avoiding nested loops.
4. All examples use pointers or indices to keep track of the window boundaries.

Differences:

1. **Window Size**: Example 1 uses a fixed-size window, while Examples 2, 3, and 4 use variable-size windows.
2. **Data Structure**: Examples 1 and 3 work with arrays of numbers, while Examples 2 and 4 work with strings.
3. **Auxiliary Data Structures**: Examples 2 and 4 use additional data structures (Map and Array) to keep track of frequencies, while Examples 1 and 3 only use simple variables.
4. **Window Movement**: Example 1 moves the entire window at once, while the others adjust the window more dynamically.

## Real-World Applications:

1. **Netflix**: Uses sliding window for their recommendation system, analyzing user viewing patterns over time.
2. **Google Chrome**: Implements sliding window for network packet management in its browser.
3. **Stock market analysis tools**: Apply sliding window to calculate moving averages and other time-based metrics.
4. **Video processing software**: Uses sliding window for tasks like motion detection or frame averaging.
5. **Text editors**: Implement sliding window for efficient find/replace operations across large documents.

## Keywords:

- "Subarray"
- "Substring"
- "Consecutive elements"
- "Maximum/Minimum sum"
- "Longest/Shortest sequence"
- "Fixed size window"
- "Dynamic size window"
- "Contiguous sequence"

## Ways to Identify:

1. The problem involves arrays, strings, or sequential data structures.
2. You're asked to find a subrange in the array or string, such as longest, shortest, or target values.
3. The problem mentions contiguous elements or consecutive sequences.
4. There's a constraint on the size of the subarray or substring (fixed or dynamic).
5. The question involves calculating a running average or sum.
6. You're asked to find the maximum or minimum sum of a subarray of a specific size.
7. The problem requires maintaining a set of elements that fulfill certain conditions while traversing the array.

[Practice Questions](QUESTIONS.md) | [Examples](/)