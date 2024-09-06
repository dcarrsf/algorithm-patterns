# Practice Questions: Two Heaps

Types of questions that prompt using each example:

1. "Find the Median from a Data Stream" is used when you need to find the median of a constantly growing dataset.
2. "Sliding Window Median" is used when you need to find medians of subarrays of a fixed size in a larger array.
3. "Find the Kth Largest Element in a Stream" is used when you need to maintain the kth largest element in a growing dataset.
4. "Find the Median of Two Sorted Arrays" is used when you need to efficiently find the median of two separate sorted arrays without merging them.

Questions in Interview Format:

## 1. **Find the Median from a Data Stream**

**Question**: "Design a data structure that supports adding integer numbers from a data stream and calculating the median of all elements in O(1) time."

Input: A series of method calls:

```javascript
// add 1
// add 2
findMedian();
// add 3
findMedian();
```
Expected Output:

```javascript
1.5
2.0
```

Additional Information:

The median is the middle value in an ordered integer list. If the size of the list is even, the median is the average of the two middle values.

## 2. **Sliding Window Median**

**Question**: "Given an array of integers nums and an integer k, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position, return the median of the k numbers in the sliding window."

Input:

```javascript
const nums = [1,3,-1,-3,5,3,6,7];
const k = 3;
```

Expected Output:

```javascript
[1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
```

Additional Information:

Results within 10^-5 of the actual value will be accepted as correct.

## 3. **Find the Kth Largest Element in a Stream**

**Question**: "Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element."

Input: A series of method calls:

```javascript
const kthLargest = new KthLargest(3, [4,5,8,2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8
```

Expected Output:

```javascript
4
5
5
8
8
```

Additional Information:

You may assume that k is always valid, 1 ≤ k ≤ 10^4. The initial array may be empty.

## 4. **Find the Median of Two Sorted Arrays**

**Question**: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n))."

Input:

```javascript
const nums1 = [1,3];
const nums2 = [2];
```

Expected Output:

```javascript
2.00000
```

Additional Information:

The median is 2.0 as the merged array would be [1,2,3] and 2 is the middle element.

-----------

For each of these questions, the candidate would be expected to:

1. Ask clarifying questions if needed
2. Discuss their approach to solving the problem
3. Explain the time and space complexity of their solution
4. Write code to implement their solution
5. Walk through a few test cases to verify their implementation

These questions cover various aspects of the Two Heaps pattern and test the candidate's ability to apply this pattern to solve different types of problems efficiently.