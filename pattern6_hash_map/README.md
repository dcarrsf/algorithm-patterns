# Hash Maps

Hash Maps (also known as Hash Tables or Dictionaries in some languages) are data structures that store key-value pairs. They provide fast access, insertion, and deletion operations, typically with an average time complexity of O(1). Hash Maps use a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

Hash Maps are incredibly useful because they allow for quick lookups and efficient data retrieval based on unique keys. This makes them ideal for scenarios where you need to store and access data quickly without relying on the order of elements.

[Practice Questions](QUESTIONS.md)

## **Examples**:
1. **[Lookup Table (Caching)](examples/cache.js)**: Shows how repeated expensive calculations can be avoided.
2. **[Key-Value Pair (Database)](examples/constant-time-inventory.js)**: Illustrates simple CRUD (Create, Read, Update, Delete) operations.
3. **[Inventory Counter](examples/key-value-database.js)**: Demonstrates real-time tracking of item quantities.
3. **[Word Frequency Counter](examples/word-frequency-counter.js)**: Shows how to analyze text data efficiently.

### **Key observations**:

Consistencies:

- All examples use the Map object in JavaScript to implement a Hash Map.
- They all involve storing and retrieving data based on unique keys.
- Each example demonstrates efficient lookup or update operations.
- All examples use the set() and get() methods of the Map object.

Differences:

- **Purpose**: Each example solves a different problem (caching, user management, inventory tracking, word counting).
- **Key types**: The keys vary from numeric IDs to strings (words).
- **Value types**: The stored values differ (calculation results, user objects, quantities, frequencies).
- **Operations**: Some focus on retrieval (caching), others on both storage and retrieval (user database, inventory), and one on aggregation (word frequency).

## Heap Memory Example

**[Heap Memory Simulator](examples/heap-memory-simulator.js)**: Demonstratesa a more complex use of a Hash Map to simulate heap memory allocation. 

As a dynamic high-level language, JavaScript does not have direct memory management, but simulating heap memory management with a hash map can be an effective tool for learning the general concepts.

Here's a breakdown of the key components:

1. **MemoryBlock class**: Represents a block of memory with its size, address, and allocation status.
2. **HeapMemorySimulator class**: The main class that manages the simulated heap memory.
3. **hash method**: A simple hashing function that maps memory addresses to slots in our Hash Map.
4. **allocate method**: Finds consecutive free blocks to allocate memory.
5. **deallocate method**: Frees previously allocated memory blocks.
6. **getMemoryMap method:** Returns the current state of the memory for visualization.

Key points about this implementation:

1. It uses a Hash Map (this.memory) to store memory blocks, with the hash of the address as the key.
2. The hashing function helps to quickly locate memory blocks based on their address.
3. It simulates memory fragmentation and coalescing, common issues in real heap memory management.
4. The allocator tries to find contiguous free blocks to satisfy allocation requests.

**Hash Collisions**:

Hash collisions are a critical consideration in hash table implementations, including our simulated heap memory allocator. Let's discuss how collisions are handled in the current implementation and how we could improve it.

In our current hash method:

```javascript
hash(address) {
    // Simple hash function: address modulo total size
    return address % this.totalSize;
}
```

This hash function does not explicitly handle collisions. It simply maps each address to a slot in the hash table by taking the modulus of the address with the total size of the memory.

Potential Issues:

1. **Collisions**: If two different addresses produce the same hash value, we have a collision. Our current implementation doesn't handle this scenario.
2. **Inefficient space usage**: The current method might not distribute keys uniformly across all available slots, potentially leading to clustering.

Handling Collisions:

To improve our hash method and handle collisions, we could implement one of these common techniques:

1. **Chaining (Open Hashing)**: In this approach, each slot of the hash table is a linked list. When a collision occurs, the new item is appended to the list at that slot.
2. **Open Addressing (Closed Hashing)**: This method finds the next open slot in the hash table when a collision occurs. Common techniques include:
  - Linear Probing: Check the next slot sequentially.
  - Quadratic Probing: Check slots at quadratic intervals.
  - Double Hashing: Use a second hash function to determine the interval.

Here's how we could modify our **HeapMemorySimulator class** to implement open addressing with linear probing:

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

Key changes:

1. The hash method now takes an optional attempt parameter for linear probing.
2. We've added set and get methods to handle insertion and retrieval with collision resolution.
3. The set method keeps trying new hash values until it finds an empty slot or determines the table is full.
4. The get method searches for the correct block by checking addresses, not just hash values.

These modifications would need to be integrated into the rest of the **HeapMemorySimulator class**, particularly in the **allocate** and **deallocate** methods.

Benefits of this approach:

1. Handles collisions gracefully
2. Maintains O(1) average-case time complexity for insertions and lookups
3. Efficient use of memory space

Drawbacks:

1. Performance degrades as the hash table becomes more full
2. Can suffer from primary clustering (grouping of occupied slots)

Alternative Improvements:

1. Use a more sophisticated hash function to reduce collisions in the first place.
2. Implement dynamic resizing of the hash table to maintain a low load factor.
3. Use [quadratic probing](examples/heap-memory-simulator-quadratic.js) or double hashing instead of linear probing to reduce clustering.

By implementing these changes, we would create a more robust and realistic simulation of heap memory allocation, better handling the complexities that arise in real-world memory management systems.

## Real-World Applications:

1. **Caching systems**: Companies like Netflix use Hash Maps to implement caching mechanisms, storing frequently accessed data for quick retrieval.
2. **Database indexing**: Many database systems, including MongoDB, use Hash Maps to create indexes for faster query execution.
3. **Symbol tables in compilers**: Programming language compilers use Hash Maps to store and quickly lookup variable names and their associated information.
4. **Spell checkers**: Applications like Microsoft Word use Hash Maps to efficiently store and check against a large dictionary of words.
5. **URL shorteners**: Services like Bitly use Hash Maps to store the mapping between shortened URLs and their original long versions.

## Keywords:

- "Lookup table"
- "Key-value pairs"
- "Constant time access"
- "Efficient search"
- "Unique identifiers"
- "Fast retrieval"
- "Associative array"

## Ways to Identify:

1. The problem involves storing and retrieving data based on unique keys.
2. You need to perform frequent lookups, insertions, or deletions with optimal time complexity.
3. The question mentions the need for "constant time" operations.
4. You're asked to implement a cache or memoization.
5. The problem involves counting or grouping elements (e.g., frequency counting).
6. You need to check for duplicates in a large dataset efficiently.
7. The question involves mapping one set of values to another.

[Practice Questions](QUESTIONS.md) | [Examples](examples/)