# Concepts: Bitwise XOR

- **[Bitwise Operations](#bitwise-operations)**
- **[Binary (Representation of Numbers)](#binary-representation-of-numbers)**
- **[Binary in Algorithms](#binary-in-algorithms)**
- **[Binary to Integer](#integer-to-binary)**

## Bitwise Operations

Bitwise operations work directly on the binary representation of numbers at the bit level. In computers, all data is ultimately represented as a series of bits (0s and 1s). Bitwise operations manipulate these individual bits according to certain rules.
The main bitwise operators in most programming languages, including JavaScript, are:

- AND (&)
- OR (|)
- XOR (^)
- NOT (~)
- Left Shift (<<)
- Right Shift (>>)

### XOR Operator (^)

XOR stands for "exclusive or". It's a binary operation that takes two bits and returns 1 if the bits are different, and 0 if they are the same. Here's the truth table for XOR:

```javascript
A | B | A ^ B
0 | 0 |   0
0 | 1 |   1
1 | 0 |   1
1 | 1 |   0
```

Key properties of XOR:

- Commutativity: A ^ B = B ^ A
- Associativity: (A ^ B) ^ C = A ^ (B ^ C)
- Identity: A ^ 0 = A
- Self-inverse: A ^ A = 0

How XOR works on binary numbers:

When we XOR two numbers, the operation is performed bit by bit. For example:

```javascript
5 ^ 3
= 101 ^ 011 (binary representation)
= 110 (result in binary)
= 6 (in decimal)
```

Here's how it works step by step:

1. Least significant bit: 1 ^ 1 = 0
2. Middle bit: 0 ^ 1 = 1
3. Most significant bit: 1 ^ 0 = 1

Why XOR is useful in algorithms:

1. **Finding a unique element**: If you XOR all elements in an array where every element appears twice except one, all pairs will cancel out (A ^ A = 0), leaving only the unique element.
2. **Swapping variables**: You can use XOR to swap two variables without a temporary variable:

    ```javascript
    a = a ^ b
    b = a ^ b
    a = a ^ b
    ```
3. **Memory efficiency**: XOR can be used to compress certain types of data or create memory-efficient data structures.
4. **Cryptography**: XOR is used in various encryption algorithms due to its reversible nature.
5. **Error detection**: XOR is used in creating and checking parity bits in error detection schemes.

In the context of our [previous examples](examples/):

- "Single Number" uses XOR to cancel out all pairs, leaving the unique number.
- "Missing Number" uses XOR with indices to find the missing element.
- "Find the Difference" uses XOR on character codes to identify the added character.
- "Swap Numbers" uses XOR's properties to swap values without a temporary variable.

Understanding bitwise operations, especially XOR, can lead to elegant and efficient solutions for certain types of problems, particularly those involving finding unique elements or manipulating binary data.

## Binary (Representation of Numbers):

In binary, numbers are represented using only two digits: 0 and 1. Each digit in a binary number is called a bit (binary digit). The value of each bit position is a power of 2, increasing from right to left.

For example, the binary number 1010 represents:
```javascript
(1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (0 * 2^0) = 8 + 0 + 2 + 0 = 10
```

Each position represents a power of 2, starting from 2^0 on the right and increasing as we move left.

```javascript
1 0 1 0
| | | |
| | | 2^0 (rightmost)
| | 2^1
| 2^2
2^3 (leftmost)
```
- Rightmost bit (0):  0 * 2^0 = 0 * 1    = 0
- Second from right (1):  1 * 2^1 = 1 * 2    = 2
- Third from right (0):   0 * 2^2 = 0 * 4    = 0
- Leftmost bit (1):   1 * 2^3 = 1 * 8    = 8

To further illustrate:

1. The rightmost 0 contributes nothing (0)
2. The second 1 from the right contributes 2
3. The third 0 from the right contributes nothing (0)
4. The leftmost 1 contributes 8

Adding these up: 0 + 2 + 0 + 8 = 10

This process demonstrates how each bit in a binary number contributes to its decimal value based on its position. The value of each position doubles as we move left, following the powers of 2 (1, 2, 4, 8, 16, 32, 64, 128, and so on).

## Binary in Algorithms

1. **Bitwise Operations**: Many algorithms leverage binary representation for efficient computations using bitwise operations (AND, OR, XOR, NOT, shifts). These operations work directly on the binary representation of numbers.
2. **Flags and Sets**: Binary can be used to represent sets or flags efficiently. Each bit can represent the presence or absence of an item or a boolean condition.
3. **Optimization**: Some algorithms use binary properties for optimization. For example, checking if a number is even can be done by examining the least significant bit (n & 1 == 0).
4. **Data Compression**: Understanding binary is crucial for many data compression algorithms, which often work by manipulating bits to represent data more efficiently.
5. **Cryptography**: Many cryptographic algorithms rely heavily on binary operations for encryption and decryption.

### **Power of Two**

To check if a number n is a power of 2.

```javascript
function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}
```

This works because powers of 2 have only one bit set in their binary representation.

### **Counting Set Bits**

To count the number of 1s in a binary number.

```javascript
function countSetBits(n) {
    let count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}
```

### **Finding the Unique Element**

The XOR operation we discussed earlier relies on binary properties:

```javascript
function findUnique(arr) {
    return arr.reduce((a, b) => a ^ b);
}
```

### **Bit Manipulation for Sets**

Using bits to represent sets of small integers.

```javascript
// Add element to set
set |= (1 << element);

// Remove element from set
set &= ~(1 << element);

// Check if element is in set
if (set & (1 << element)) {
    // element is in set
}
```

### **Fast Multiplication/Division by 2**

Left shift (<<) multiplies by 2, right shift (>>) divides by 2.

```javascript
let n = 5;
let doubled = n << 1;  // 10
let halved = n >> 1;   // 2
```

## Integer to Binary

```javascript
function intToBinary(num) {
    if (num === 0) return '0';
    
    let binary = '';
    let n = Math.abs(num);
    
    while (n > 0) {
        binary = (n % 2) + binary;
        n = Math.floor(n / 2);
    }
    
    return num < 0 ? '-' + binary : binary;
}

// Usage Example
console.log(intToBinary(10));  // Output: "1010"
console.log(intToBinary(-10)); // Output: "-1010"
console.log(intToBinary(0));   // Output: "0"
```

This function works by:

1. Handling the special case of 0.
2. Taking the absolute value of the input to handle negative numbers.
3. Repeatedly dividing by 2 and using the remainder to build the binary string.
4. Adding a minus sign for negative numbers.

### Binary to Integer:

```javascript
function binaryToInt(binary) {
    if (binary === '0') return 0;
    
    let isNegative = binary[0] === '-';
    if (isNegative) binary = binary.slice(1);
    
    let result = 0;
    for (let i = 0; i < binary.length; i++) {
        result = result * 2 + parseInt(binary[i]);
    }
    
    return isNegative ? -result : result;
}

// Usage Example
console.log(binaryToInt("1010"));   // Output: 10
console.log(binaryToInt("-1010"));  // Output: -10
console.log(binaryToInt("0"));      // Output: 0
```

This function works by:

1. Handling the special case of '0'.
2. Checking for a negative sign.
3. Iterating through each digit, multiplying the current result by 2 and adding the current bit.
4. Applying the negative sign if necessary.

These functions demonstrate the relationship between binary and decimal representations. They're useful for understanding how computers store and manipulate numbers at a low level.

A few points to note:

1. These functions work with string representations of binary numbers. In JavaScript, actual binary literals (like 0b1010) are automatically converted to their decimal integer representation.
2. The integer-to-binary function will produce the binary representation of the number's magnitude for negative numbers, prefixed with a minus sign. Some systems might use two's complement for negative binary numbers, which would look different.
3. These functions don't handle floating-point numbers or very large integers that might exceed JavaScript's safe integer range.
4. In practice, JavaScript provides built-in methods for these conversions:

    - **Number.toString(2)** for integer to binary
    - **parseInt(binaryString, 2)** for binary to integer

These built-in methods are more efficient and handle edge cases better, but implementing the conversions manually as we did here helps in understanding the underlying process.