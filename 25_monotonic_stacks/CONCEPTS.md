# Concepts: Monotonic Stack

## Histograms

A histogram is a graphical representation of data distribution, often used in statistics. In this context, we're using a simplified version where each bar represents a single data point rather than a range of values.

For the input **[2, 1, 5, 6, 2, 3]**, here's a visual representation of the histogram:

```javascript
      ┌─┐
      │ │
    ┌─┤ │
    │ │ │
┌─┐ │ │ │ ┌─┐
│ │ │ │ │ │ │
│ ├─┤ │ ├─┤ │
│ │ │ │ │ │ │
└─┴─┴─┴─┴─┴─┘
 2 1 5 6 2 3
```

Brief overview of the histogram:

- Each number in the input array represents the height of a bar in the histogram.
- All bars have a width of 1 unit.
- The bars are adjacent to each other, forming a continuous sequence.

In this example, the largest rectangle that can be formed has:

- Height: 5 units
- Width: 2 units (spanning the 5 and 6 height bars)
- Area: 5 * 2 = 10 square units

This largest rectangle can be visualized as:

```javascript
      ┌─┐
      │ │
    ┌─┤ │
    │#│#│
┌─┐ │#│#│ ┌─┐
│ │ │#│#│ │ │
│ ├─┤#│#├─┤ │
│ │ │#│#│ │ │
└─┴─┴─┴─┴─┴─┘
 2 1 5 6 2 3
```

The '#' characters represent the area of the largest rectangle.

The challenge in this problem is to efficiently find this largest rectangle, considering all possible combinations of adjacent bars, without explicitly calculating the area of every possible rectangle (which would be inefficient for large inputs).

This is where the Monotonic Stack pattern becomes useful, as it allows us to process the bars from left to right while maintaining information about previously seen bars in a way that lets us efficiently calculate the largest possible rectangle at each step.
