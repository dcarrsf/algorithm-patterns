# Practice Questions: Merge Intervals

Overview:

1. **Merge Intervals**: "Given a collection of intervals, merge all overlapping intervals."
2. **Insert Interval**: "Given a set of non-overlapping intervals and a new interval, insert the new interval and merge if necessary."
3. **Meeting Rooms**: "Given an array of meeting time intervals, determine if a person could attend all meetings."
4. **Interval List Intersections**: "Given two lists of closed intervals, find the intersection of these two lists."

Details:

## 1. **Merge Intervals**

**Question**: Our calendar app needs to consolidate overlapping events. Write a function that merges overlapping intervals.

Input:
- An array of intervals where each interval is represented by an array of two integers [start, end].

```javascript
const intervals = [[1,3],[2,6],[8,10],[15,18]];
```

Expected Output: An array of merged intervals.

```javascript
[[1,6],[8,10],[15,18]]
```

Additional Information:

Intervals are not necessarily sorted. If two intervals overlap or are adjacent, they should be merged.

## 2. **Insert Interval**

**Question**: We're building a scheduling system and need to insert a new appointment into an existing schedule. Write a function that inserts a new interval into a sorted list of non-overlapping intervals, merging when necessary.

Input:
- A sorted array of non-overlapping intervals
- A new interval to insert

```javascript
const intervals = [[1,3],[6,9]];
const newInterval = [2,5];
```

Expected Output:
- The resulting list of intervals after inserting the new interval.

```javascript
[[1,5],[6,9]]
```

Additional Information:

The input intervals are sorted by start time and do not overlap. The result should also be sorted.

## 3. **Meeting Rooms**

**Question**: We need to determine if an employee can attend all scheduled meetings. Write a function that checks if any of the given meeting times overlap.

Input:
- An array of meeting time intervals where each interval is represented by an array of two integers [start, end].

```javascript
const meetings = [[0,30],[5,10],[15,20]];
```

Expected Output:
- A boolean value. Return true if a person can attend all meetings without any overlap, false otherwise.

```javascript
false
```

Additional Information:

Assume the meetings are not sorted. A person cannot be in two meetings at the same time, even if one ends at the exact time another begins.

## 4. **Interval List Intersections**

**Question**: We're developing a feature to find common free time slots between two people's schedules. Write a function that finds the intersection of two lists of time intervals.

Input:
- Two arrays of intervals, where each interval is represented by an array of two integers [start, end].

```javascript
const firstPerson = [[0,2],[5,10],[13,23],[24,25]];
const secondPerson = [[1,5],[8,12],[15,24],[25,26]];
```

Expected Output: 
- An array of intervals representing the times when both persons are free.

```javascript
[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
```

Additional Information:

The intervals in each input list are sorted and non-overlapping. The output should include all time periods that are in both lists, including single point intervals where the start and end times are the same.