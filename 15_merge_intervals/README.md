# Merge Intervals

The Merge Intervals pattern is used to deal with overlapping intervals. In this pattern, you're typically given a collection of intervals, and you need to either merge overlapping intervals or find overlapping periods. This pattern is particularly useful when you need to consolidate or analyze time-based data.

[Practice Questions](QUESTIONS.md) | [Examples](examples/)

## **Examples**:
1. **[Merge Intervals](examples/merge-intervals.js)**: Used when you need to consolidate overlapping time ranges.
2. **[Insert Interval](examples/insert-interval.js)**: Useful when you need to add a new event to an existing schedule.
3. **[Meeting Rooms](examples/meeting-rooms.js)**: Used to check for conflicts in a schedule.
4. **[Interval List Intersections](examples/interval-list-intersections.js)**: Helpful when you need to find common time slots between two schedules.

### **Key observations**:

Consistencies:

1. All examples deal with intervals represented as arrays of start and end times.
2. Sorting intervals is a common first step in most of these problems.
3. They all involve some form of comparison between intervals.
4. Time complexity is generally O(n log n) due to sorting, where n is the number of intervals.
5. The core logic often involves a single pass through the sorted intervals.

Differences:

1. The first example (Merge Intervals) combines overlapping intervals into a single interval.
2. The second example (Insert Interval) deals with inserting a new interval into an existing set of intervals.
3. The third example (Meeting Rooms) checks for any overlap without merging.
4. The fourth example (Interval List Intersections) finds the intersection between two sets of intervals.

Each of these examples demonstrates a different aspect of interval manipulation, from merging and inserting to checking for conflicts and finding intersections. They showcase the versatility of the Merge Intervals pattern in solving various time-based problems that are common in real-world applications like scheduling systems, resource management, and time series analysis.

## Time Complexity

1. **Sorting: O(n log n)**: Most Merge Intervals problems start by sorting the intervals, which typically takes O(n log n) time, where n is the number of intervals.
2. **Processing intervals: O(n)**: After sorting, the algorithm usually involves a single pass through the intervals, which takes O(n) time.
3. **Overall: O(n log n)**: The sorting step dominates the time complexity, making the overall time complexity O(n log n) in most cases.

Space Complexity:

1. **Input storage: O(n)**: The space needed to store the input intervals.
2. **Output storage: O(n)**: In the worst case, such as when no intervals overlap, the output may contain all original intervals.
3. **Sorting: O(log n) to O(n)**: The space complexity of sorting depends on the implementation. Many modern sorting algorithms use O(log n) additional space, but some may use up to O(n).
4. **Overall: O(n)**: The space complexity is generally O(n), dominated by the input and output storage.

Key Points:

1. The time complexity is often dominated by the initial sorting step.
2. The space complexity is typically linear, mainly due to input and output storage.
3. Some variations of Merge Intervals problems might have slightly different complexities, but this is the general pattern.
4. In-place modifications can sometimes reduce space complexity, but this is not always possible or desirable.

It's worth noting that while O(n log n) time complexity is common due to sorting, some specialized variants of Merge Intervals problems might achieve O(n) time complexity through clever use of data structures or when the input is already sorted.

Understanding these complexity characteristics is crucial for optimizing solutions and discussing trade-offs during interviews. It also helps in estimating the scalability of solutions for large datasets, which is often a key consideration in real-world applications of the Merge Intervals pattern.

## Ways to Identify

Real-World Applications:

1. **Google Calendar**: Uses this pattern to detect and prevent meeting conflicts.
1. **Airbnb**: Applies it to manage property availability and prevent double bookings.
1. **Netflix**: Utilizes it for managing video streaming quality based on network bandwidth availability periods.
1. **Uber**: Employs this pattern to optimize driver schedules and ride assignments.
1. **Flight booking systems**: Use it to manage flight schedules and prevent overbooking.

Keywords:

- "Intervals"
- "Overlapping"
- "Merge"
- "Schedule"
- "Time slots"
- "Conflict detection"
- "Range"
- "Booking system"

Characteristics:

1. The problem involves a set of intervals or time ranges.
2. You're asked to find overlapping periods.
3. The task requires merging or condensing intervals.
4. You need to detect conflicts in schedules or bookings.
5. The question mentions start and end times.
6. You're dealing with resource allocation over time periods.
7. The problem involves optimizing a schedule or timeline.


[Practice Questions](QUESTIONS.md) | [Examples](examples/)