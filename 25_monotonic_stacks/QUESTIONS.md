# Practice Questions: Monotonic Stack

Overview:

1. **[Next Greatest Element](#1-next-greatest-elements)**: Given an array, find the next greater element for each element in the array.
2. **[Daily Temperatures](#2-daily-tempatures)**: Given an array of daily temperatures, calculate how many days you have to wait until a warmer temperature.
3. **[Largest Rectangle in Histogram](#3-largest-rectangle-in-histogram)**: Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of the largest rectangle in the histogram.
4. **[Stock Span Problem](#4-stock-span-problem)**: The stock span problem is a financial problem where we have a series of n daily price quotes for a stock and we need to calculate the span of the stock's price for all n days.

Details:

## 1. **Next Greatest Element**

**Question**: "Given an array of integers, find the next greater element for each element. The next greater element is the first element to the right that is larger than the current element. If no such element exists, use -1. Return an array with the results."

Input:

```javascript
[4, 5, 2, 10, 8]
```

Expected Output:

```javascript
[5, 10, 10, -1, -1]
```

Additional Information:

The order of elements in the output array should correspond to the input array.


## 2. **Daily Tempatures**

**Question**: "You're given an array of daily temperatures. For each day, calculate how many days you would have to wait until a warmer temperature. If there is no future day with a warmer temperature, put 0 instead."

Input:

```javascript
[73, 74, 75, 71, 69, 72, 76, 73]
```

Expected Output:

```javascript
[1, 1, 4, 2, 1, 1, 0, 0]
```

Additional Information:

Temperatures are in Fahrenheit. You can assume the temperature range is between 30°F and 100°F.


## 3. **Largest Rectangle in Histogram**

**Question**: "You're given an array of integers representing the heights of adjacent rectangles in a histogram, where the width of each rectangle is 1. Find the area of the largest rectangle that can be formed in the histogram."

Input:

```javascript
[2, 1, 5, 6, 2, 3]
```

Expected Output:

```javascript
10
```

Additional Information:

The largest rectangle can be formed by the rectangles at indices 2 and 3, with a height of 5 and a width of 2.


## 4. **Stock Span Problem**

**Question**: "Given a series of daily stock prices, calculate the span of the stock's price for each day. The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backwards) for which the price of the stock was less than or equal to today's price."

Input:

```javascript
[100, 80, 60, 70, 60, 75, 85]
```

Expected Output:

```javascript
[1, 1, 1, 2, 1, 4, 6]
```

Additional Information:

The span value of the first day is always 1. Assume that all stock prices are positive integers.
