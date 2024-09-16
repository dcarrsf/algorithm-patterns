# Practice Questions: Cyclic Sort

Overview:

1. **[Find the Missing Number](#1-find-the-missing-number)**: Given an array containing n distinct numbers taken from 0 to n, find the one that is missing from the array.
2. **[Find the Duplicate Number](#2-find-the-duplicate-number)**: Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive, find the only number that appears twice.
3. **[Find All Missing Numbers](#3-find-all-missing-numbers)**: Given an array of n integers where each integer is in the range [1, n], find all numbers from 1 to n that don't appear in the array.
4. **[Find the Smallest Missing Positive Number](#4-find-the-smallest-missing-positive-number)**: Given an unsorted integer array, find the smallest missing positive integer.

Details:

## 1. **Find the Missing Number**

**Question**: "We have an array containing n distinct numbers taken from the range 0 to n. One number is missing from this range. Your task is to write a function that finds this missing number efficiently."

Input:

```javascript
[3, 0, 1]
```

Expected Output:

```javascript
2
```

Additional Information:

The array is not sorted, and the numbers are in the range 0 to n, where n is the length of the array plus one.


## 2. **Find the Duplicate Number**

**Question**: "Given an array of integers where each integer is in the range 1 to n (inclusive), and the array has a length of n+1, there is exactly one number that appears twice. Can you write a function to find this duplicate number? The constraint is to solve this without modifying the array and using only constant extra space."

Input:

```javascript
[1, 3, 4, 2, 2]
```

Expected Output:

```javascript
2
```

Additional Information:

There is only one duplicate in the array, but it can appear more than twice.


## 3. **Find All Missing Numbers**

**Question**: "We have an unsorted array of integers. The integers are in the range of 1 to n, where n is the length of the array. Some numbers from this range are missing in the array, and some are repeated. Your task is to write a function that finds all the numbers that are missing from the array."

Input:

```javascript
[4, 3, 2, 7, 8, 2, 3, 1]
```

Expected Output:

```javascript
[5, 6]
```

Additional Information:

The function should return an array of all missing numbers in any order.


## 4. **Find the Smallest Missing Positive Number**

**Question**: "Given an unsorted array that may contain both positive and negative integers, can you write a function to find the smallest missing positive integer? Your solution should run in O(n) time and use constant extra space."

Input:

```javascript
[3, 4, -1, 1]
```

Expected Output:

```javascript
2
```

Additional Information:

The smallest missing positive integer is the first positive integer missing from the array, starting from 1. In this case, 1 is present, so 2 is the smallest missing positive integer.
