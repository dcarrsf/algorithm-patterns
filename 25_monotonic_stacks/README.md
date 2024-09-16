# Monotonic Stack

A monotonic stack is a data structure that maintains a stack of elements in a strictly increasing or decreasing order. It's particularly useful for solving problems that involve finding the next greater or smaller element in a sequence, or for problems that require maintaining a specific order of elements while processing a series of values.

[Practice Questions](QUESTIONS.md) | [Concepts](CONCEPTS.md) | [Examples](examples/)

## **Examples**:
1. **[Next Greatest Element](examples/next-greatest-elements.js)**: Find the next larger value for each array element.
2. **[Daily Temperatures](examples/daily-tempatures.js)**: Calculate days until warmer temperature for each day.
3. **[Largest Rectangle in Histogram](examples/largest-rectangle-in-histogram.js)**: Determine maximum rectangular area in a bar graph.
4. **[Stock Span Problem](examples/stock-span-problem.js)**: Compute consecutive days of non-decreasing stock prices.

### **Key observations**:

Consistencies:

1. All examples use a stack to keep track of indices.
2. They all iterate through the array once, achieving O(n) time complexity.
3. The stack is used to maintain a monotonic property (either increasing or decreasing).
4. Elements are popped from the stack when a condition is met, usually when finding a greater/smaller element.

Differences:

1. The Next Greater Element and Daily Temperatures problems find the next greater element, while the Stock Span problem finds previous greater elements.
2. The Largest Rectangle in Histogram problem uses the stack to calculate areas, which is a more complex application of the monotonic stack concept.
3. The result arrays are initialized differently: some use -1 or 0, while others use 1.
4. The Stock Span problem maintains a decreasing stack, while the others maintain an increasing stack.

These examples demonstrate how the Monotonic Stack pattern can be applied to solve various problems efficiently. The key is recognizing when a problem involves finding relationships between elements in a sequence, particularly when these relationships depend on the order and relative values of the elements.

## Time Complexity

O(n), where n is the number of elements in the input array or sequence. This linear time complexity is achieved because each element is pushed onto and popped from the stack at most once.

**Space Complexity**:

O(n) in the worst case, where n is the number of elements in the input. This occurs when all elements need to be stored in the stack (e.g., in a strictly increasing sequence for a stack maintaining a decreasing order).

However, the average case space complexity can be better, often O(log n) or even O(1) for certain problems and input distributions.

It's worth noting that while the space complexity for the stack itself can be O(n), some problems might require additional space for the output, which is typically also O(n).

The efficiency of the Monotonic Stack pattern comes from its ability to process each element in a single pass through the data, while maintaining relevant information about previously seen elements in a way that allows for constant-time operations on the most recently added elements. This makes it particularly powerful for problems that might otherwise require nested loops and quadratic time complexity.

## Ways to Identify

Real-World Applications:

1. **Stock Price Analysis**: Financial software uses monotonic stacks to efficiently find the next greater or smaller stock price, helping in trend analysis and trading strategies.
2. **Temperature Tracking**: Weather applications employ monotonic stacks to determine how many days until a warmer or cooler temperature, providing useful forecasting information.
3. **Building Skyline Problem**: In architectural software and city planning tools, monotonic stacks help efficiently compute the skyline formed by buildings.
4. **Packet Processing in Network Routers**: Monotonic stacks can be used in network routing algorithms to efficiently process packets based on their timestamps or priorities.

Keywords:

- "Next greater element"
- "Next smaller element"
- "Nearest larger number"
- "Nearest smaller number"
- "Daily temperatures"
- "Stock span problem"
- "Histogram area"
- "Building skyline"

Characteristics:

1. The problem involves finding the next greater or smaller element in an array.
2. You need to process elements in a specific order while maintaining information about previously seen elements.
3. The question mentions "nearest" or "next" larger/smaller element.
4. The problem involves calculating spans or distances between elements based on some property.
5. You're asked to solve a problem that seems to require nested loops, but the interviewer hints at a more efficient solution.
6. The question involves processing a series of elements where the relationship between current and previous elements is important.

When you encounter these indicators in a problem statement, consider whether a monotonic stack might be an appropriate approach to solve the problem efficiently.

[Practice Questions](QUESTIONS.md) | [Concepts](CONCEPTS.md) | [Examples](examples/)