# Practice Questions: Subsets

Overview:

1. **[Generate All Subsets](#1-generate-all-subsets)**: "Given an array of distinct integers, return all possible subsets (the power set)."
2. **[Generate Combinations of Size K](#2-generate-combination-of-size-k)**: "Given two integers n and k, return all possible combinations of k numbers out of the range [1, n]."
3. **[Generate Power Set (Iterative)](#3-generate-power-set-iterative)**: "Implement a function to return the power set of a given set of integers using an iterative approach."
4. **[Generate Subsets with Duplicates](#4-generate-subsets-with-duplicates)**: "Given an array of integers that might contain duplicates, return all possible subsets (the power set) without duplicate subsets."

Details:

## 1. **Generate All Subsets**

**Question**: "Given an array of distinct integers, write a function to return all possible subsets (the power set). The solution set must not contain duplicate subsets."

Input:

```javascript
[1, 2, 3]
```

Expected Output:

```javascript
 [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
```

Additional Information:

The order of subsets in the output doesn't matter.

## 2. **Generate Combinations of Size K**

**Question**: "Implement a function that takes two integers n and k, and returns all possible combinations of k numbers chosen from the range [1, n]. Your solution should return the combinations in any order."

Input:

```javascript
n = 4, k = 2
```

Expected Output:

```javascript
[[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]
```

Additional Information:



## 3. **Generate Power Set (Iterative)**

**Question**: "Design an iterative algorithm to generate the power set of a given array of integers. The power set is the set of all possible subsets, including the empty set and the set itself."

Input:

```javascript
[1, 2, 3]
```

Expected Output:

```javascript
[[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
```

Additional Information:

Explain why an iterative approach might be preferable in some situations.

## 4. **Generate Subsets with Duplicates**

**Question**: "Given an integer array that may contain duplicates, write a function to return all possible subsets (the power set). The solution set must not contain duplicate subsets."

Input:

```javascript
[1, 2, 2]
```

Expected Output:

```javascript
 [[], [1], [1,2], [1,2,2], [2], [2,2]]
```

Additional Information:

Explain how you would handle the duplicates to avoid generating duplicate subsets.
