# Examples: Bitwise XOR

Key characteristics of XOR include:

- It's commutative and associative
- XOR of a number with itself is 0
- XOR of a number with 0 is the number itself

These properties allow for elegant solutions to problems that might otherwise require more complex algorithms or data structures.

## 1. Single Number

```javascript
function singleNumber(nums) {
    return nums.reduce((acc, num) => acc ^ num, 0);
}
```

In this algorithm, XOR is used to find the unique element in the array. Here's how it works:

- We start with an accumulator initialized to 0.
- As we XOR each number in the array with the accumulator:
    - Numbers that appear twice will cancel out (A ^ A = 0).
    - The unique number will remain (A ^ 0 = A).

For example, with [4,1,2,1,2]:

```javascript
0 ^ 4 = 4
4 ^ 1 = 5
5 ^ 2 = 7
7 ^ 1 = 6 (1 cancels out)
6 ^ 2 = 4 (2 cancels out)
```

The final result is 4, which is the unique number.

## 2. Missing Number

```javascript
function missingNumber(nums) {
    let xor = nums.length;
    for (let i = 0; i < nums.length; i++) {
        xor ^= i ^ nums[i];
    }
    return xor;
}
```

This algorithm uses XOR to find the missing number in a sequence. It works by:

- XORing all numbers from 0 to n (where n is the length of the array).
- XORing all numbers in the input array.
- The result is the missing number.

For example, with [3,0,1] (n = 3):

- Start with xor = 3
- XOR with indices and values: 3 ^ (0 ^ 3) ^ (1 ^ 0) ^ (2 ^ 1) = 2

The 0, 1, and 3 cancel out, leaving 2 as the missing number.

## 3. Find the Difference

```javascript
function findTheDifference(s, t) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        result ^= s.charCodeAt(i) ^ t.charCodeAt(i);
    }
    result ^= t.charCodeAt(t.length - 1);
    return String.fromCharCode(result);
}
```

This algorithm uses XOR to find the added character. It works by:

- XORing the ASCII values of all characters in both strings.
- All characters that appear in both strings will cancel out.
- The remaining value will be the ASCII value of the added character.

For example, with s = "abcd" and t = "abcde":

- XOR all ASCII values: ('a'^'a') ^ ('b'^'b') ^ ('c'^'c') ^ ('d'^'d') ^ 'e'
- All matching characters cancel out, leaving only 'e'

## 4. Swap Numbers

```javascript
function swapNumbers(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return [a, b];
}
```

This algorithm uses XOR to swap two numbers without a temporary variable. It works in three steps:

1. a = a ^ b
This stores the XOR of both numbers in a.
2. b = a ^ b = (a ^ b) ^ b = a
This assigns the original value of a to b.
3. a = a ^ b = (a ^ b) ^ a = b
This assigns the original value of b to a.

For example, swapping 5 (101 in binary) and 3 (011 in binary):

```
a = 5 ^ 3 = 101 ^ 011 = 110 (6)
b = 6 ^ 3 = 110 ^ 011 = 101 (5)
a = 6 ^ 5 = 110 ^ 101 = 011 (3)
```
The final result is a = 3 and b = 5, successfully swapped.

In all these examples, XOR's properties - especially its ability to cancel out paired values and its commutativity - are leveraged to solve problems efficiently and with minimal space usage.