# Bitwise XOR

The Bitwise XOR pattern utilizes the XOR (exclusive or) operation to solve various problems efficiently. XOR has unique properties that make it useful for certain types of problems, particularly those involving finding unique elements or manipulating binary representations.

[Practice Questions](QUESTIONS.md) | [Examples](examples/)

## **Examples**:
1. **[Single Number Problem](examples/single-number.js)**: Questions about finding a unique element in an array where all other elements appear an even number of times.
2. **[Missing Number Problem](examples/missing-number.js)**: Problems involving finding a missing element in a sequence or range of numbers.
3. **[Find the Difference](examples/find-the-difference.js)**: Questions about comparing strings or finding an added/removed element in a collection.
4. **[Swap Number Problem](examples/swap-numbers.js)**: Problems that require in-place manipulation of values without using additional variables.

### **Key observations**:

Consistencies:

1. All examples use the XOR operation (^) as the core of their solution.
2. They all achieve their goals without using extra space (O(1) space complexity).
3. The solutions have linear time complexity O(n) (except for the swap, which is O(1)).
4. They all leverage the properties of XOR, particularly that XOR of a number with itself is 0 and XOR of a number with 0 is the number itself.

Differences:

1. The "Single Number" and "Missing Number" problems work with arrays, while "Find the Difference" works with strings, and "Swap Numbers" works with individual numbers.
2. "Find the Difference" involves character manipulation, converting between characters and their ASCII values.
3. "Swap Numbers" is the only one that modifies the input values rather than finding a specific value.
4. "Missing Number" combines XOR with a mathematical approach (XORing with the expected range of numbers).

These examples demonstrate the versatility of the Bitwise XOR pattern in solving various types of problems efficiently. They show how XOR can be used for tasks ranging from finding unique elements to manipulating data in-place, all while maintaining excellent space and time complexity.

## Time Complexity

Most solutions using the Bitwise XOR pattern have a time complexity of O(n), where n is the size of the input (e.g., length of an array or string). This is because these solutions typically involve a single pass through the input data, performing constant-time XOR operations at each step.

In some cases, like the number swapping example, the time complexity can be O(1) when dealing with a fixed number of operations regardless of input size.

**Space Complexity**

One of the most significant advantages of the Bitwise XOR pattern is its space efficiency. Solutions using this pattern typically have a space complexity of O(1), meaning they use only a constant amount of extra space regardless of the input size.

This constant space usage is achieved because XOR operations allow us to process and store information about the entire input using just a single variable (usually an integer), without needing additional data structures that grow with the input size.

The space efficiency makes Bitwise XOR solutions particularly valuable in scenarios with memory constraints or when dealing with large datasets where minimizing space usage is crucial.

In summary, the Bitwise XOR pattern generally offers solutions with linear time complexity O(n) and constant space complexity O(1), making it an efficient choice for certain types of problems, especially those involving finding unique elements or performing in-place operations on binary representations of data.

## Ways to Identify

Real-World Applications:

1. **Cryptography**: XOR is used in various encryption algorithms, including simple XOR ciphers and more complex schemes. OpenSSL uses XOR in various encryption algorithms.
2. **Error detection and correction**: Used in checksums and error-correcting codes in data transmission protocols. Cisco uses XOR in error detection and correction protocols.
3. **Memory-efficient data structures**: XOR linked lists can save memory by storing a single pointer instead of two. Intel and AMD use XOR in their CPU instruction sets for various operations.
4. **Graphics processing**: XOR is used for operations like toggling pixels or creating certain visual effects.

Keywords:

- "Single number"
- "Missing number"
- "Find the difference"
- "Swap numbers"
- "Without extra space"
- "Bit manipulation"
- "Unique element"

Characteristics:

1. The problem involves finding a unique element in an array where all other elements appear an even number of times.
2. You're asked to perform operations without using extra space.
3. The question mentions bit manipulation or bitwise operations.
4. You need to find a missing number in a sequence.
5. The problem requires swapping numbers without using a temporary variable.
6. You're working with binary representations of numbers.
7. The question asks for a solution with linear time complexity and constant space complexity.


[Practice Questions](QUESTIONS.md) | [Examples](examples/)