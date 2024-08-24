# Stacks

The Stack pattern utilizes the Last-In-First-Out (LIFO) data structure to solve problems involving nested structures, parsing, or reversing elements. It's particularly useful for problems that involve matching pairs, tracking history, or managing hierarchical data. Stacks provide O(1) time complexity for push and pop operations, making them efficient for problems that require backtracking or maintaining a state history.

## **Examples**:
1. **[Parenthesis](parenthesis.js)**: Find matching prenthesis pairs.
2. **[Nested](nested.js)**: Find nested structure evaluting an expression string.
3. **[Min Stack](minstack.js)**: Maintains a second stack with minimum values.

### **Key observations**:

Consistencies:

- All examples use the basic stack operations: push and pop.
- They all maintain the LIFO (Last-In-First-Out) principle.
- The stack is used to keep track of the most recent elements or state.
- Time complexity for push and pop operations is O(1) in all cases.

Differences:

- Purpose:
  - The parentheses example uses the stack to match opening and closing brackets.
  - The nested structure example uses the stack to evaluate an expression.
  - The min stack example uses two stacks to keep track of both elements and the current minimum.
- Implementation:
  - The first two examples use a simple array as a stack.
  - The min stack example uses a class with two internal stacks.
- Complexity:
  - The parentheses and expression evaluation examples have O(n) time complexity overall, where n is the length of the input.
  - The min stack maintains O(1) time complexity for all operations, but uses O(n) extra space.
- Stack Usage:
  - In the parentheses example, only opening brackets are pushed onto the stack.
  - In the expression evaluation, both numbers and intermediate results are pushed onto the stack.
  - The min stack pushes all elements onto one stack and only minimum values onto another.
- Problem Solving Approach:
  - The parentheses example uses the stack for validation.
  - The expression evaluation uses the stack for computation.
  - The min stack uses the stack for data structure design.

These examples demonstrate the versatility of the Stack pattern in solving different types of problems, from simple validation to complex data structure design, while maintaining the core principle of Last-In-First-Out operations.

### **Linked List Examples**:

1. **[Linked List Stack](linked_list_stack.js)**: Demonstrates how a stack can be implemented without using an array and showcases a different application of the stack pattern.

Let's compare this linked list implementation with the previous array-based examples:

Consistencies:

- It maintains the LIFO (Last-In-First-Out) principle like all stack implementations.
- Basic operations (push, pop, peek) are still present and operate in O(1) time.
- It solves a similar problem to the MinStack example, but tracks the maximum instead of the minimum.

Differences:

- Memory Allocation:
  - Memory is allocated dynamically for each new element, which can be more flexible for large or unknown stack sizes.
- Space Efficiency:
  - Each node in the linked list has some overhead for the next pointer, which isn't present in array-based implementations.
  - However, it doesn't require contiguous memory like arrays do.

This linked list implementation demonstrates how the Stack pattern can be applied using different underlying data structures while maintaining the core LIFO principle and O(1) time complexity for basic operations. It's particularly useful in scenarios where the maximum stack size is unknown or where dynamic memory allocation is preferred.

## **Real-World Application**:

- **Browser History**: Web browsers use stacks to manage the back and forward navigation history.
- **Text Editors**: Undo/Redo functionality in text editors is often implemented using stacks.
- **Function Call Management**: Programming language interpreters and compilers use stacks to manage function calls and local variables.
- **Expression Evaluation**: Calculators and expression parsers use stacks to evaluate arithmetic expressions.

## **Keywords**:

- "parentheses"
- "brackets"
- "nested"
- "balanced"
- "undo"
- "backtrack"
- "history"
- "last operation"

## **Ways to Identify**:

1. The problem involves matching opening and closing characters (like parentheses or brackets).
2. You need to process items in reverse order of their appearance.
3. The problem requires backtracking or undoing operations.
4. You're dealing with a nested or hierarchical structure.
5. The problem involves parsing or evaluating expressions.
6. You need to keep track of the most recent elements or operations.

The Stack pattern is versatile and can be implemented using either an array (in languages that support dynamic arrays) or a linked list. The key operations are push (add to top), pop (remove from top), and peek (view top without removing).