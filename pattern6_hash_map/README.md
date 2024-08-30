# Hash Maps

Hash Maps (also known as Hash Tables or Dictionaries in some languages) are data structures that store key-value pairs. They provide fast access, insertion, and deletion operations, typically with an average time complexity of O(1). Hash Maps use a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

Hash Maps are incredibly useful because they allow for quick lookups and efficient data retrieval based on unique keys. This makes them ideal for scenarios where you need to store and access data quickly without relying on the order of elements.

[Practice Questions](QUESTIONS.md)

## **Examples**:
1. **[Lookup Table (Caching)](examples/cache.js)**: Shows how repeated expensive calculations can be avoided.
2. **[Key-Value Paird (Database)](examples/constant-time-inventory.js)**: Illustrates simple CRUD (Create, Read, Update, Delete) operations.
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

**[Heap Memory Simulator](examples/heap-memory-simulator.js)**: Demonstratesa more complex use of a Hash Map to simulate heap memory allocation.

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

This example showcases how Hash Maps can be used in more complex scenarios, such as memory management systems. It demonstrates efficient lookup and modification of memory blocks using hashing, which is crucial for performance in real-world memory allocators.

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

[Practice Questions](QUESTIONS.md) | [Examples](/)