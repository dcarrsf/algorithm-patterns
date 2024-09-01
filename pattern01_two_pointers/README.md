# Two Pointers

The Two Pointers pattern involves using two pointers to iterate through a data structure, typically an array or linked list. This technique is particularly useful for solving problems that involve searching pairs in a sorted array or linked list, reversing a string or array, or finding a subarray that meets certain conditions. It's efficient because it often allows us to solve problems in a single pass through the data structure, typically achieving O(n) time complexity.

[Practice Questions](QUESTIONS.md)

## **Examples**:
1. **[Two Sum](examples/two_sum.js)**: Uses left and right pointer to traverse sorted array
2. **[Pair](examples/pair.js)**: Shorter version of Two Sum
3. **[Sub Array](examples/subarray.js)**: Find a contiguous subarray with a given sum
4. **[Palindrome](examples/palindrome.js)**: Check if a string is a palindrome 
5. **[Reverse](examples/reverse.js)**: Reverse an array in-place

### **Key observations**:

Consistency:

- All examples use two pointers that move towards each other or in the same direction.
- The core logic is always within a while loop.
- The pointers are adjusted based on certain conditions.

Differences:

- Direction of movement: In the pair and palindrome examples, pointers move towards each other. In the subarray example, both pointers move in the same direction.
- Termination condition: It varies based on the problem. Sometimes it's when pointers meet, sometimes when a target is found, or when the end of the array is reached.
- Logic inside the loop: This is highly problem-specific. It could involve comparisons, sum calculations, or swapping elements.
- Initialization: The starting positions of pointers can vary. They might start at opposite ends or both at the beginning.

Problem-specific aspects:

- The subarray example uses a sliding window approach, which is a variation of the two pointers technique.
- The palindrome check doesn't require a sorted input, unlike the pair finding problem.
- The reverse array example actually modifies the input array, while others just search or check conditions.

In summary, while the Two Pointers pattern provides a consistent framework, its implementation can vary significantly based on the specific problem requirements. The key is to understand how to manipulate the pointers to efficiently traverse or modify the data structure in a single pass.

## **Real-World Application**:
1. **Amazon**: Uses two pointers in their recommendation system to find pairs of frequently bought together items in sorted product lists.
2. **Google Maps**: Employs two pointers to find the shortest route between two points in their navigation algorithms.
3. **Spotify**: Utilizes two pointers in their playlist shuffle feature to efficiently swap elements.

## **Keywords**:
- "pair"
- "subarray"
- "palindrome"
- "reverse"
- "sorted array"
- "two sum"

## **Ways to Identify**:
1. The problem involves a sorted array (or string) and searching for a pair of elements.
2. You need to find a set of elements that fulfill certain constraints.
3. The problem asks about palindromes or reversing strings.
4. You're dealing with an array and need to find a contiguous subarray that meets specific criteria.
5. The problem requires comparing elements at different positions within an array.
