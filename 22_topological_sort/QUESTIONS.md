# Practice Questions: Topological Sort

Overview:

1. **[Course Schedule](#1-course-schedule)**: "Is it possible to..." or "Can all items be..." questions. These focus on feasibility rather than the actual order.
2. **[Alien Dictionary](#2-alien-dictionary)**: "Derive an ordering from..." or "Infer a sequence based on..." questions. These involve extracting implicit ordering information from given data.
3. **[Build Order](#3-build-order)**: "Provide a valid sequence of..." or "Order the following items based on..." questions. These require producing a complete, valid ordering.
4. **[Task Scheduling](#4-task-scheduling)**: "What is the minimum time to..." or "Calculate the fastest way to complete..." questions. These involve not just ordering, but also optimizing based on weights or durations.

Details:

## 1. **Course Schedule**

**Question**: "We're designing a course registration system for a university. Given a list of courses and their prerequisites, we need to determine if it's possible for a student to complete all courses. Can you write a function to solve this problem?"

Input:

- numCourses: Number of courses (integer)
- prerequisites: Array of [course, prerequisite] pairs

```javascript
const numCourses = 4;
const prerequisites = [[1,0],[2,1],[3,2]];
```

Expected Output:

- Boolean (true if all courses can be completed, false otherwise)

```javascript
true
```

Additional Information:

Courses are numbered from 0 to numCourses - 1. The prerequisites array represents directed edges in a graph where [a, b] means course 'a' has 'b' as a prerequisite.

## 2. **Alien Dictionary**

**Question**: "We've discovered a dictionary from an alien civilization. The words are sorted lexicographically, but we don't know their alphabet order. Can you write a function to determine the order of characters in their alphabet?"

Input:

- words: Array of strings representing words in the alien dictionary

```javascript
const words = ["wrt","wrf","er","ett","rftt"];
```

Expected Output:

- String representing the order of characters in the alien alphabet

```javascript
"wertf"
```

Additional Information:

If the order is ambiguous or no valid order exists, return an empty string. Assume all letters are lowercase.

## 3. **Build Order**

**Question**: "We're working on a build system for a large software project. Given a list of projects and their dependencies, we need to determine a valid build order. Can you implement a function to solve this?"

Input:

- projects: Array of project names (strings)
- dependencies: Array of [project, dependency] pairs

```javascript
const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
const dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
```

Expected Output:

- Array representing a valid build order, or null if no valid order exists

```javascript
['e', 'f', 'b', 'a', 'd', 'c']
```

Additional Information:

There might be multiple valid build orders. Any valid order is acceptable.

## 4. **Task Scheduling**

**Question**: "We're developing a task scheduler for a distributed computing system. Given a set of tasks, their dependencies, and the time each task takes, we need to calculate the minimum time to complete all tasks if we have unlimited parallel processors. Can you write a function to solve this problem?"

Input:

- n: Number of tasks (integer)
- relations: Array of [predecessor, successor] task pairs
- time: Array of integers representing the time each task takes

```javascript
const n = 5;
const relations = [[1,5],[2,5],[3,5],[3,4],[4,5]];
const time = [1,2,3,4,5];
```

Expected Output:

- Integer representing the minimum time to complete all tasks

```javascript
12
```

Additional Information:

Tasks are numbered from 1 to n. The relations array represents task dependencies where [a, b] means task 'b' depends on task 'a'. The time array is 0-indexed, where time[i] represents the time task i+1 takes to complete.
