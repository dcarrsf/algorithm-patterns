# Modified Binary Search

Modified Binary Search is an adaptation of the classic binary search algorithm. While traditional binary search is used to find a specific element in a sorted array, the modified version can be applied to more complex scenarios. It's particularly useful for problems where the search space can be divided in half repeatedly, even if the array isn't perfectly sorted or if we're not searching for an exact match. This pattern is efficient, typically achieving O(log n) time complexity.

[Practice Questions](QUESTIONS.md)

## **Examples**:

1. **[Search Range](examples/search_range.js)**: Shows how it finds both the first and last occurrence of a target, or returns [-1, -1] if not found.
2. **[Search Rotated Array](examples/search_rotated_array.js)**: Demonstrates finding an element in a rotated sorted array, including cases where the target is present or absent.
3. **[Find Peak Element](examples/find_peak_element.js)**: Shows how it can find a peak element in different array configurations, including when there's only one element.

### **Key observations**:

Consistencies:

- All examples use the core structure of binary search with left and right pointers and a while loop.
- They all calculate a mid point in each iteration.
- The search space is reduced by half in each iteration by adjusting left or right.
- Time complexity remains O(log n) for all examples.

Differences:

- Termination condition:
  - Example 1 and 2 use left <= right, while Find peak element uses left < right.
- Mid-point calculation:
  - All use the same method here, but in practice, left + (right - left) / 2 is often preferred to avoid integer overflow.
- Comparison logic:
  - Search range has additional checks to find the leftmost and rightmost occurrences.
  - Search rotated array has complex logic to handle the rotated array scenario.
  - Find peak element compares adjacent elements to find a peak.
- Return value:
  - Search range returns an array of two indices.
  - Examples 2 and 3 return a single index.
- Target of search:
  - Examples 1 and 2 search for a specific target value.
  - Find peak element searches for a condition (peak element) rather than a specific value.

The key to Modified Binary Search is adapting the core binary search algorithm to fit the specific problem constraints. While the basic structure remains similar, the logic for narrowing down the search space and determining the result can vary significantly based on the problem requirements.

**[Binary Search](examples/binary_search.js)**: Simple binary search for comparison.

Key points about this implementation:

1. It takes a sorted array and a target value as input.
2. It uses two pointers, left and right, to define the current search range.
3. In each iteration, it calculates the middle index and compares the middle element with the target.
4. Based on the comparison, it adjusts either the left or right pointer to narrow down the search range.
5. The process continues until the target is found or the search range is empty (left > right).
6. It returns the index of the target if found, or -1 if not found.

This classic binary search works well for finding exact matches in a sorted array. The modified versions build upon this basic structure to solve more complex problems or work with 
different types of input arrays.

## **Real-World Application**:

1. **Google**: Uses modified binary search in their search engine algorithms to quickly narrow down relevant results.
2. **Netflix**: Applies this pattern in their content delivery networks to efficiently locate the nearest server for streaming.
3. **GitHub**: Utilizes modified binary search in their version control system for efficient commit history searches.

## **Keywords**:

- "sorted"
- "search"
- "find"
- "rotate"
- "peak"
- "minimum"
- "maximum"

## **Ways to Identify**:

1. The problem involves a sorted (or partially sorted) array.
2. You need to find a specific element or a point that meets certain criteria (like a peak or valley).
3. The problem asks about finding the first or last occurrence of an element.
4. You're dealing with a rotated or cyclically sorted array.
5. The question involves finding a point where the sorting order changes.
6. You need to search in a range of real numbers (not just integers).

The key difference between classic and modified binary search is that in modified versions, the decision to go left or right might involve more complex logic than a simple comparison. The core idea of repeatedly dividing the search space in half remains the same, but the conditions for this division can be more sophisticated.


[Practice Questions](QUESTIONS.md) | [Examples](examples/)