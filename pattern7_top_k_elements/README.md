# Top K Elements

The "Top K Elements" algorithm is used to find the k largest (or smallest) elements in a collection. It's particularly useful when dealing with large datasets where you only need a subset of the most extreme values. The most efficient implementation typically uses a heap data structure, specifically a min-heap for finding the k largest elements or a max-heap for finding the k smallest elements.

The basic idea is to maintain a heap of size k while iterating through all elements. For each element, if it's larger than the smallest element in the heap (for k largest problem), we remove the smallest element and add the new one. This way, at the end of the iteration, the heap contains the k largest elements.

This pattern is particularly useful when dealing with large datasets where you need to find a subset of extreme values without sorting the entire set.

[Practice Questions](QUESTIONS.md)

## **Examples**:
1. **[Top K Largest](examples/top-k-largest.js)**: This function finds and returns the K largest elements from an unsorted array.
2. **[Top K Most Frequent](examples/top-k-most-frequent.js)**: This function identifies and returns the K elements that appear most frequently in the given array.
3. **[Top Kth Largest](examples/top-kth-largest.js)**: This function finds the Kth largest element in an unsorted array, effectively performing a partial sort.
4. **[Top K Closest Points to Progin](examples/top-k-closest.js)**: This function determines the K points in a 2D plane that are closest to the origin (0,0) based on Euclidean distance.

Note that these examples assume the existence of [MinHeap](examples/min-heap.js) and [MaxHeap](examples/max-heap.js) classes, which would need to be implemented separately or imported from a library. In an interview situation, you might be expected to use language-specific priority queue implementations or discuss how you would implement these [heap structures](examples/README.md) if needed.

### **Key observations**:

Consistencies:

1. All examples use a heap data structure (either MinHeap or MaxHeap).
2. They all process the input array once, adding elements to the heap.
3. They maintain K elements in the heap at most.
4. Time complexity is generally O(N log K) for all examples.

Differences:

1. Top K Largest and Top Kth Largest use a MinHeap, while 2 and 4 use a MaxHeap.
2. Top K Most Frequent requires an additional step of counting frequencies.
3. Top Kth Largest returns a single element, while others return K elements.
4. Top K Closest deals with 2D points and uses a custom comparison function.

While the core concept remains the same (using a heap to efficiently track K elements), the pattern can be adapted to various types of data (numbers, frequencies, points) and different selection criteria (largest, most frequent, closest). 

The key is recognizing when a problem can be solved by maintaining a set of K "best" elements according to some criteria, rather than fully sorting the entire input.


### Time Complexity:

For most "Top K Elements" problems using a heap, the time complexity is **O(N log K)**, where N is the number of elements in the input array and K is the number of top elements we're trying to find.

**Space Complexity**:

For all these algorithms, the space complexity is O(K) as we're maintaining a heap of at most K elements.

**Optimizations and Trade-offs**:

1. If K is close to N, it might be more efficient to sort the entire array, which would be O(N log N).
2. For the Kth Largest Element problem, there's an alternative approach using QuickSelect which has an average time complexity of O(N) but a worst-case of O(N^2).
3. For small K, the difference between O(N log K) and O(N log N) is significant, making the heap approach preferable.

**Comparison to Sorting**:

- Sorting the entire array would take O(N log N) time.
- For K << N, our heap approach of O(N log K) is more efficient.
- When K approaches N, the sorting approach becomes competitive.

In practice, the choice between these approaches often depends on the specific values of N and K, as well as other factors like memory constraints and the nature of the data.


## Real-World Applications:

1. **Amazon**: Finding top K best-selling products for recommendations.
2. **YouTube**: Displaying top K trending videos.
3. **Twitter**: Displaying top K trending topics or hashtags.
4. **Google**: Identifying top K search results or most visited websites.
5. **Spotify**: Compiling top K most played songs for playlists.
6. **Financial systems**: Identifying top K performing stocks or highest value transactions.

## Keywords:

- "K largest elements"
- "K smallest elements"
- "Top K frequent"
- "K most important"
- "K closest points"
- "Kth largest/smallest"
- "Heap"
- "Priority Queue"
- "Partial sorting"
- "Stream processing"

## Ways to Identify:

1. The problem asks for a subset of extreme values (largest or smallest) from a larger set.
2. The phrase "top K" or "bottom K" is used in the problem statement.
3. You need to find the K most frequent or least frequent items.
4. The problem involves maintaining a running list of top elements in a stream of data. The question might mention "real-time" or "streaming" data processing.
5. You're asked to partially sort a large dataset, focusing only on the extremes.
6. The problem mentions "leaderboard" or "ranking" of a subset of items.

When you encounter a problem that matches these characteristics, consider using the "Top K Elements" pattern. It's often implemented using a heap data structure in JavaScript, which provides efficient operations for maintaining a sorted subset of elements.

[Practice Questions](QUESTIONS.md) | [Examples](README.md)
