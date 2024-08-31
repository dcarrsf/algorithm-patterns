# Top K Elements

The "Top K Elements" algorithm is used to find the k largest (or smallest) elements in a collection. It's particularly useful when dealing with large datasets where you only need a subset of the most extreme values. The most efficient implementation typically uses a heap data structure, specifically a min-heap for finding the k largest elements or a max-heap for finding the k smallest elements.

The basic idea is to maintain a heap of size k while iterating through all elements. For each element, if it's larger than the smallest element in the heap (for k largest problem), we remove the smallest element and add the new one. This way, at the end of the iteration, the heap contains the k largest elements.

[Practice Questions](QUESTIONS.md)

## **Examples**:
1. **[Top K Elements](examples/top-k-elements.js)**: Demonstrates the core concept of using a min-heap to efficiently find the top K elements in an array.

### **Key observations**:

The time complexity is O(n log k), where n is the number of elements in the array, making it more efficient than sorting the entire array when k is significantly smaller than n.

## Real-World Applications:

1. **Amazon**: Finding top K best-selling products for recommendations.
2. **Twitter**: Displaying top K trending topics or hashtags.
3. **Google**: Identifying top K search results or most visited websites.
4. **Spotify**: Compiling top K most played songs for playlists.
5. **Financial systems**: Identifying top K performing stocks or highest value transactions.

## Keywords:

- "K largest elements"
- "K smallest elements"
- "Heap"
- "Priority Queue"
- "Partial sorting"
- "Stream processing"
- "Top K frequent"

## Ways to Identify:

1. The problem asks for a subset of extreme values (largest or smallest) from a larger set.
2. The phrase "top K" or "bottom K" is used in the problem statement.
3. You need to find the K most frequent or least frequent items.
4. The problem involves maintaining a running list of top elements in a stream of data.
5. You're asked to partially sort a large dataset, focusing only on the extremes.
6. The problem mentions "leaderboard" or "ranking" of a subset of items.

[Practice Questions](QUESTIONS.md) | [Examples](README.md)
