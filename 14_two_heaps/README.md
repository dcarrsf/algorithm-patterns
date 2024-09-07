# Two Heaps

The "Two Heaps" pattern involves using two heap data structures, typically a max heap and a min heap, to efficiently manage a set of numbers. This pattern is particularly useful when you need to track the median of a data stream or when you need to find the kth smallest or largest element in a stream.

The key characteristic of this pattern is the balancing act between the two heaps. Typically, one heap (let's say the max heap) stores the smaller half of the numbers, while the other (the min heap) stores the larger half. By maintaining this balance, you can quickly access the median or perform other operations that require knowledge about the middle of the dataset.

This pattern is useful because it provides an efficient way to handle problems that would otherwise require sorting the entire dataset (which could be prohibitively expensive, especially for large datasets or streaming data).

[Practice Questions](QUESTIONS.md) | [Concepts](CONCEPTS.md) | [Streams](STREAMS.md) | [Examples](examples/)

## **Examples**:
1. **[Find the Median from a Data Stream](examples/find-median.js)**: Efficiently maintain and retrieve median from continuous data input.
2. **[Sliding Window Median](examples/sliding-window-median.js)**: Calculate median for each fixed-size subarray in larger array.
3. **[Find the Kth Largest Element in a Stream](examples/kth-element-in-stream.js)**: Maintain kth largest element in constantly growing data set.
4. **[Find the Median of Two Sorted Arrays](examples/median-two-arrays.js)**: Determine median from two separate, pre-sorted numerical arrays.

### **Key observations**:

Consistencies:

1. All examples deal with finding or maintaining some form of median or middle element.
2. They all require efficient handling of dynamic datasets.
3. The concept of balancing two halves of the data is central to all examples.

Differences:

1. The first two examples use both max and min heaps, while the third uses only a min heap.
2. The fourth example doesn't explicitly use heaps, but uses the concept of partitioning which is similar to the balancing act in the Two Heaps pattern.
3. The first and third examples deal with streaming data, while the second deals with a sliding window, and the fourth with fixed arrays.

These examples demonstrate the versatility of the Two Heaps pattern in solving various median-related problems efficiently, whether dealing with streaming data, fixed arrays, or even multiple arrays.

## Time Complexity

In general, the Two Heaps pattern often results in:
- Time complexity: O(log n) for operations involving heap adjustments
- Space complexity: O(n) in total, often split between two heaps

This pattern is efficient because it maintains partial sorting (via heaps) instead of fully sorting the data, which would be more time-consuming. The trade-off is the linear space complexity, which is often acceptable given the performance benefits in time complexity.


## Ways to Identify

Real-World Applications:

1. **Social Media Analytics**: Platforms like Facebook or Twitter might use this pattern to calculate median engagement rates for posts in real-time.
1. **Financial Systems**: Trading platforms could use this to track median stock prices over a time period.
1. **Streaming Services**: Netflix or Spotify might employ this pattern to determine median viewing/listening times for content recommendation systems.
1. **IoT and Sensor Networks**: Used for real-time anomaly detection in sensor data streams.
Load Balancers: To efficiently distribute incoming requests based on median processing times.

Keywords:

- "Median"
- "Stream of integers"
- "Running median"
- "Kth smallest/largest element"
- "Data stream"
- "Online algorithm"
- "Continuous median"

Characteristics:

1. The problem involves finding a median or middle element in a dynamic set of numbers.
2. You're asked to process a stream of data and maintain some sort of "middle" statistic.
3. The question mentions having to find the kth smallest or largest element repeatedly in a changing dataset.
4. You need to efficiently add numbers to a dataset and query for the median frequently.
5. The problem requires balancing two halves of a dataset for quick access to the middle elements.
6. You're dealing with a large or infinite stream of numbers and need to perform operations related to the median or middle elements.

When you encounter these characteristics in a problem, consider whether the Two Heaps pattern might be applicable. Remember, the key is recognizing that you need to efficiently keep track of the middle of a dynamic dataset.


[Practice Questions](QUESTIONS.md) | [Concepts](CONCEPTS.md) | [Streams](STREAMS.md) | [Examples](examples/)