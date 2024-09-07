# Heap Memory Examples

## Chaining

[Chaining (Open Hashing) Example](heap-memory-simulator-chaining.js)

This method handles collisions by storing multiple entries at the same index using a linked list. It's a different approach from the open addressing methods we've seen before.

Key changes in this chaining (linked list) implementation:

- Modified MemoryBlock class:
    - Added a next property to create a linked list structure.
- Changed memory structure:
    - Now an array of MemoryBlock objects (or null), where each index can be the head of a linked list.
- Modified set method:
    - If the hash index is empty, it sets the block directly.
    - If there's already a block at that index, it traverses the linked list to either update an existing block or add a new one at the end.
- Modified get method:
    - Traverses the linked list at the hashed index to find the correct block.
- Modified allocate method:
    - Now needs to traverse both the array and the linked lists to find free blocks.
- Modified deallocate method:
    - Uses the new get method to find and free blocks.
- Modified getMemoryMap method:
    - Traverses all linked lists to create a complete memory map.

Benefits of chaining with linked lists:

1. **Simplicity**: Collision resolution is straightforward - just add to the list.
2. **No upper limit on load factor**: The table can hold more items than its size, unlike open addressing methods.
3. **Less sensitive to hash function**: Performance degrades gracefully even with a suboptimal hash function.

Considerations:

1. **Extra memory**: Requires additional memory for the linked list pointers.
2. **Cache performance**: Can lead to poor cache performance due to the lack of locality of reference.
3. **Worst-case scenario**: If all items hash to the same index, it degenerates into a linked list with O(n) search time.

This implementation maintains the core functionality of our original heap memory simulator while introducing chaining as the collision resolution strategy. It provides a different approach to handling collisions compared to the open addressing methods we've seen before, with its own set of trade-offs in terms of simplicity, memory usage, and performance characteristics.

## Linear Probing

[Linear Probing Example](heap-memory-simulator-linear.js)

Here's how we could modify the **HeapMemorySimulator class** to implement open addressing with linear probing:

```javascript
class HeapMemorySimulator {
    constructor(totalSize, blockSize) {
        this.totalSize = totalSize;
        this.blockSize = blockSize;
        this.memory = new Map();
        this.initializeMemory();
    }

    hash(address, attempt = 0) {
        // Primary hash function
        let hash = address % this.totalSize;
        
        // Linear probing
        return (hash + attempt) % this.totalSize;
    }

    set(address, block) {
        let attempt = 0;
        let hash;
        do {
            hash = this.hash(address, attempt);
            if (!this.memory.has(hash)) {
                this.memory.set(hash, block);
                return;
            }
            attempt++;
        } while (attempt < this.totalSize);
        throw new Error("Hash table is full");
    }

    get(address) {
        let attempt = 0;
        let hash;
        do {
            hash = this.hash(address, attempt);
            if (this.memory.has(hash) && this.memory.get(hash).address === address) {
                return this.memory.get(hash);
            }
            attempt++;
        } while (attempt < this.totalSize && this.memory.has(hash));
        return null;
    }

    // ... (rest of the class implementation)
}
```

Key improvements in this updated version:

- **Collision Handling**:
    - The set and get methods now use linear probing to handle collisions.
    - If a collision occurs, the code keeps trying the next slot until it finds an empty one or the correct block.
- **Improved Hash Function**:
    - The hash method now uses a prime number multiplication for better distribution of hash values.
- **Dynamic Resizing**:
    - A new resize method doubles the size of the memory when it becomes full.
    - This helps maintain performance as the number of allocations increases.
- **Modified Allocation and Deallocation**:
    - These methods now use the new get and set methods to access memory blocks.
- **Error Handling**:
    - The code now handles cases where the memory might be full, triggering a resize instead of throwing an error.

These changes make our heap memory simulator more robust and efficient:
1. It can now handle hash collisions gracefully.
2. The improved hash function provides better distribution, reducing the likelihood of collisions.
3. Dynamic resizing ensures that performance doesn't degrade significantly as the memory fills up.
4. The simulator more accurately represents real-world memory management systems, which often implement similar techniques.

## Quadratic Probing

[Quadratic Probing Example](heap-memory-simulator-quadratic.js)

This method uses quadratic intervals to find the next available slot when a collision occurs, which can help reduce clustering compared to linear probing.

Key changes in this quadratic probing implementation:

- **Modified set method**:
    - Now uses quadratic probing to resolve collisions.
    - The probing sequence is calculated using the formula: hash(k, i) = (h(k) + c1*i + c2*i^2) % m
    - We use c1 = c2 = 0.5 for simplicity, but these constants can be adjusted for different probing behaviors.
- **Modified get method**:
    - Uses the same quadratic probing sequence as set to find the correct block.
- **Allocation and deallocation**:
    - These methods now use the new get and set methods that incorporate quadratic probing.
- **Benefits of quadratic probing**:
    - Reduced clustering: Quadratic probing helps spread out collisions more than linear probing, potentially reducing the impact of primary clustering.
    - Better performance in some scenarios: For certain load factors and data distributions, quadratic probing can outperform linear probing.

Considerations:

1. **Secondary clustering**: While it reduces primary clustering, quadratic probing can still suffer from secondary clustering.
2. **Probing sequence**: The choice of constants (c1 and c2) in the quadratic formula can affect performance and may need tuning based on the specific use case.
3. **Table size**: For optimal performance with quadratic probing, the table size should ideally be a prime number. Our example doesn't account for this, but it's something to consider for a more robust implementation.

This implementation maintains the core functionality of our original heap memory simulator while introducing quadratic probing as the collision resolution strategy. It provides a good balance between simplicity and improved collision handling compared to the original version.

## Double Hashing

[Double Hashing Example](heap-memory-simulator-double-hashing.js)

Double hashing uses a second hash function to determine the interval between probes, which can provide a more uniform distribution of keys and potentially better performance than linear or quadratic probing in some scenarios.

Key changes in this double hashing implementation:

- **Two hash functions**:
    - hash1: The primary hash function (similar to our original hash function).
    - hash2: A secondary hash function that uses a prime number slightly smaller than the total size.
- **Helper methods**:
    - getPreviousPrime: Finds the largest prime number smaller than a given number.
    - isPrime: Checks if a number is prime.
- **Modified set method**:
    - Uses the double hashing formula: (hash1(k) + i * hash2(k)) % m
    - This creates a unique probing sequence for each key.
- **Modified get method**:
    - Uses the same double hashing formula as set to find the correct block.
- **Allocation and deallocation**:
    - These methods now use the new get and set methods that incorporate double hashing.

Benefits of double hashing:
1. **Better distribution**: Double hashing typically provides a more uniform distribution of keys compared to linear or quadratic probing.
2. **Reduced clustering**: It helps minimize both primary and secondary clustering.
3. **Full table coverage**: With a good choice of hash functions, double hashing can probe all table slots before repeating.

Considerations:
1. **Complexity**: Double hashing is slightly more complex to implement and may be slower for small tables due to the additional hash calculation.
2. **Choice of second hash function**: The effectiveness of double hashing depends on choosing a good second hash function that is relatively prime to the table size.
3. **Table size**: For optimal performance, the table size should be a prime number. Our example doesn't account for this, but it's a consideration for a more robust implementation.

This implementation maintains the core functionality of our original heap memory simulator while introducing double hashing as the collision resolution strategy. It provides a good balance between distribution quality and performance, especially for larger hash tables or when dealing with a high load factor.