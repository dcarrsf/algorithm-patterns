# Practice Questions: K-Way Merge

Overview:

1. **[Merge K Sorted Arrays](#1-merge-k-sorted-arrays)**: "Given K sorted arrays, merge them into one sorted array."
2. **[Merge K Sorted Linked Lists](#2-merge-k-sorted-linked-lists)**: "You are given an array of K linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it."
3. **[Merge K Sorted Streams](#3-merge-k-sorted-streams)**: "Design a system to merge K sorted input streams into one sorted output stream. The input streams are potentially infinite."
4. **[K-Way External Sort](#4-k-way-external-sort)**: "Implement an external sorting algorithm to sort a large file that doesn't fit into memory. You can load K chunks into memory at a time."

Details:

## 1. **Merge K Sorted Arrays**

**Question**: "Our data processing pipeline receives multiple sorted arrays of customer IDs from different microservices. We need to merge these arrays efficiently. Implement a function that takes an array of sorted arrays and returns a single sorted array containing all elements from the input arrays."

Input:

```javascript
[
  [1, 4, 5],
  [1, 3, 4],
  [2, 6]
]
```

Expected Output:

```javascript
[1, 1, 2, 3, 4, 4, 5, 6]
```

Additional Information:

he input arrays are always sorted in ascending order. The number of arrays can vary, but it will always be at least 1. Each array can have a different length.

## 2. **Merge K Sorted Linked Lists**

**Question**: "We're building a system to aggregate ranked user activity logs from multiple services. Each service provides its log as a sorted linked list. Design a function that merges K sorted linked lists into a single sorted linked list."

Input:

```javascript
[
  ListNode(1) -> ListNode(4) -> ListNode(5),
  ListNode(1) -> ListNode(3) -> ListNode(4),
  ListNode(2) -> ListNode(6)
]
```

Expected Output:

```javascript
ListNode(1) -> ListNode(1) -> ListNode(2) -> ListNode(3) -> ListNode(4) -> ListNode(4) -> ListNode(5) -> ListNode(6)
```

Additional Information:

The LinkedList class is already implemented. You just need to work with the head nodes provided in the input array. The number of linked lists can vary but will be at least 1.

## 3. **Merge K Sorted Streams**

**Question**: "We're developing a real-time analytics dashboard that receives data from multiple sources as sorted streams. Implement a function that can merge these streams into a single sorted output stream."

Input:

```javascript
[
  Stream([1, 4, 7, 10, ...]),
  Stream([2, 5, 8, 11, ...]),
  Stream([3, 6, 9, 12, ...])
]
```

Expected Output:

```javascript
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ...]
```

Additional Information:

Each input stream is potentially infinite. The Stream class has methods hasNext() and next(). Your solution should be able to handle streams of different lengths, including streams that may end.

## 4. **K-Way External Sort**

**Question**: "We need to sort a large log file that doesn't fit into memory. Design a function that implements an external sort algorithm, where you can only load K chunks into memory at a time."

Input:

```javascript
const chunks = [
  [3, 5, 7, 1],
  [0, 6, 2, 4],
  [8, 9, 10, 1]
];
const k = 2;  // number of chunks that can be in memory at once
```

Expected Output:

```javascript
[0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Additional Information:

Your function should simulate the external sort process. When "writing" sorted data back to disk, simply print "Writing chunk to disk: [chunk data]". Assume each chunk can fit in memory, but not all chunks at once.
