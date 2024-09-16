# Cyclic Sort

Cyclic Sort is an efficient sorting algorithm used when dealing with arrays containing numbers in a given range. It works by placing each number in its correct position, swapping elements until every number is where it should be. This pattern is particularly useful for problems involving arrays containing numbers from 1 to n or 0 to n-1, where n is the array length.

[Practice Questions](QUESTIONS.md) | [Examples](examples/)

## **Examples**:
1. **[Find the Missing Number](examples/find-missing-number.js)**: Locate the absent number in a sequence of integers.
2. **[Find the Duplicate Number](examples/find-duplicate-number.js)**: Identify the single repeated integer in an array.
3. **[Find All Missing Numbers](examples/find-all-missing-numbers.js)**: Discover multiple absent integers within a given range.
4. **[Find the Smallest Missing Positive Number](examples/find-smallest-missing-positive-number.js)**: Determine the least positive integer not present in array.

### **Key observations**:

Consistencies:

1. All examples use the core concept of Cyclic Sort: placing each number in its correct position.
2. They all have a similar structure with a while loop for sorting and a for loop for finding the result.
3. All solutions have O(n) time complexity and O(1) space complexity.
4. They all deal with arrays where the elements are related to the array indices.

Differences:

1. The range of numbers varies slightly (0 to n-1, 1 to n, or positive integers).
2. The swap condition and the way to identify the correct position differ based on the specific problem.
3. The final step (finding the result) varies depending on what we're looking for (missing, duplicate, or smallest missing).
4. Some problems (like finding all missing numbers) may return multiple values, while others return a single value.

These examples demonstrate how the Cyclic Sort pattern can be adapted to solve various array-related problems efficiently. The key is recognizing when the problem involves a range of numbers related to the array indices, which is the hallmark of problems suitable for this pattern.

## Time Complexity

The time complexity is linear because the algorithm typically involves two passes through the array:

1. The sorting phase, which uses a while loop to place each element in its correct position. Although this involves swaps, each element is moved at most once to its correct position.
2. The final pass to find the result (e.g., missing or duplicate number), which is a simple for loop through the array.

**Space Complexity**

The space complexity is constant because the algorithm sorts the array in-place:

1. No additional data structures proportional to the input size are used.
2. Only a few variables are needed for indexing and temporary storage during swaps.

This combination of linear time complexity and constant space complexity makes the Cyclic Sort pattern highly efficient for its specific use cases, particularly when dealing with arrays containing numbers in a given range related to the array's length. It's especially valuable in interview scenarios where optimal space usage is often a key consideration.

## Ways to Identify

Real-World Applications:

While Cyclic Sort itself isn't commonly used in production systems due to its specific requirements, the concept behind it is valuable in certain scenarios:

1. **Database Systems**: When reorganizing records with sequential IDs, a concept similar to Cyclic Sort can be used to efficiently rearrange data.
2. **Memory Management**: In systems where memory blocks are numbered sequentially, a Cyclic Sort-like approach can be used to reorganize free blocks.
3. **File Systems**: When defragmenting files with sequential block numbers, a similar approach can be applied.
4. **Network Packet Sequencing**: In networking, when reordering out-of-sequence packets with sequential numbers, a Cyclic Sort-inspired algorithm could be beneficial.

Keywords:

- "Find the missing number"
- "Find the duplicate number"
- "Numbers from 1 to n"
- "Array contains numbers from 0 to n-1"
- "Smallest missing positive number"
- "First k missing positive numbers"

Characteristics:

1. The problem involves an unsorted array containing numbers in a given range.
2. The range of numbers is related to the array length (e.g., 1 to n or 0 to n-1, where n is the array length).
3. You need to find missing numbers, duplicate numbers, or the smallest missing number.
4. The problem asks for a solution with O(n) time complexity and O(1) space complexity.
5. The array elements can be used as indices to access other elements in the array.

When you encounter a problem with these characteristics, consider using the Cyclic Sort pattern to develop an efficient solution.


[Practice Questions](QUESTIONS.md) | [Examples](examples/)