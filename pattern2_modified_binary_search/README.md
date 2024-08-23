# modified-binary-search

**Summary**:
Modified Binary Search is an adaptation of the classic binary search algorithm. While traditional binary search is used to find a specific element in a sorted array, the modified version can be applied to more complex scenarios. It's particularly useful for problems where the search space can be divided in half repeatedly, even if the array isn't perfectly sorted or if we're not searching for an exact match. This pattern is efficient, typically achieving O(log n) time complexity.

**Examples**:

1. **[Binary Search](binary_search.js)**: Simple binary search for comparison
2. **[Find Peak Element](find_peak_element.js)**: Find peak element
3. **[Search Range](search_range.js)**: Find First and Last Position of Element in Sorted Array
4. **[Search Rotated Array](search_rotated_array.js)**: Find index of target

**Key observations**:

Consistencies:

- All examples use the core structure of binary search with left and right pointers and a while loop.
- They all calculate a mid point in each iteration.
- The search space is reduced by half in each iteration by adjusting left or right.
- Time complexity remains O(log n) for all examples.

Differences:

- Termination condition:
  - Example 1 and 2 use left <= right, while Example 3 uses left < right.

- Mid-point calculation:

  - All use the same method here, but in practice, left + (right - left) / 2 is often preferred to avoid integer overflow.

- Comparison logic:

  - Example 1 has additional checks to find the leftmost and rightmost occurrences.
  - Example 2 has complex logic to handle the rotated array scenario.
  - Example 3 compares adjacent elements to find a peak.

- Return value:

  - Example 1 returns an array of two indices.
  - Examples 2 and 3 return a single index.

- Target of search:

  - Examples 1 and 2 search for a specific target value.
  - Example 3 searches for a condition (peak element) rather than a specific value.

The key to Modified Binary Search is adapting the core binary search algorithm to fit the specific problem constraints. While the basic structure remains similar, the logic for narrowing down the search space and determining the result can vary significantly based on the problem requirements.

------------

**Real-World Application**:

1. **Google**: Uses modified binary search in their search engine algorithms to quickly narrow down relevant results.
2. **Netflix**: Applies this pattern in their content delivery networks to efficiently locate the nearest server for streaming.
3. **GitHub**: Utilizes modified binary search in their version control system for efficient commit history searches.

***Keywords**:

- "sorted"
- "search"
- "find"
- "rotate"
- "peak"
- "minimum"
- "maximum"

**Ways to Identify**:

1. The problem involves a sorted (or partially sorted) array.
2. You need to find a specific element or a point that meets certain criteria (like a peak or valley).
3. The problem asks about finding the first or last occurrence of an element.
4. You're dealing with a rotated or cyclically sorted array.
5. The question involves finding a point where the sorting order changes.
6. You need to search in a range of real numbers (not just integers).

The key difference between classic and modified binary search is that in modified versions, the decision to go left or right might involve more complex logic than a simple comparison. The core idea of repeatedly dividing the search space in half remains the same, but the conditions for this division can be more sophisticated.