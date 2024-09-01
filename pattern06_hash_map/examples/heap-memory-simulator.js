class MemoryBlock {
  constructor(size, address) {
    this.size = size;
    this.address = address;
    this.free = true;
  }
}

class HeapMemorySimulator {
  constructor(totalSize, blockSize) {
    this.totalSize = totalSize;
    this.blockSize = blockSize;
    this.memory = new Map();
    this.initializeMemory();
  }

  initializeMemory() {
    const blocksCount = Math.floor(this.totalSize / this.blockSize);
    for (let i = 0; i < blocksCount; i++) {
      const address = i * this.blockSize;
      this.memory.set(this.hash(address), new MemoryBlock(this.blockSize, address));
    }
  }

  hash(address) {
    // Simple hash function: address modulo total size
    return address % this.totalSize;
  }

  allocate(size) {
    const blocksNeeded = Math.ceil(size / this.blockSize);
    let startAddress = null;
    let consecutiveBlocks = 0;

    for (const [hash, block] of this.memory) {
      if (block.free) {
        if (startAddress === null) startAddress = block.address;
        consecutiveBlocks++;

        if (consecutiveBlocks === blocksNeeded) {
          // Allocate the blocks
          for (let i = 0; i < blocksNeeded; i++) {
            const address = startAddress + i * this.blockSize;
            const allocatedBlock = this.memory.get(this.hash(address));
            allocatedBlock.free = false;
          }
          return startAddress;
        }
      } else {
        startAddress = null;
        consecutiveBlocks = 0;
      }
    }

    return null; // Unable to allocate
  }

  deallocate(address, size) {
    const blocksToFree = Math.ceil(size / this.blockSize);
    for (let i = 0; i < blocksToFree; i++) {
      const blockAddress = address + i * this.blockSize;
      const block = this.memory.get(this.hash(blockAddress));
      if (block && !block.free) {
        block.free = true;
      } else {
        console.warn(`Invalid deallocation at address ${blockAddress}`);
        return false;
      }
    }
    return true;
  }

  getMemoryMap() {
    const memoryMap = [];
    for (const [hash, block] of this.memory) {
      memoryMap.push({
        address: block.address,
        size: block.size,
        free: block.free
      });
    }
    return memoryMap.sort((a, b) => a.address - b.address);
  }
}

// Usage example
const heapSimulator = new HeapMemorySimulator(1024, 64); // 1024 bytes total, 64-byte blocks

console.log("Initial memory map:");
console.log(heapSimulator.getMemoryMap());

const allocation1 = heapSimulator.allocate(128);
console.log("\nAllocated 128 bytes at address:", allocation1);
console.log(heapSimulator.getMemoryMap());

const allocation2 = heapSimulator.allocate(256);
console.log("\nAllocated 256 bytes at address:", allocation2);
console.log(heapSimulator.getMemoryMap());

console.log("\nDeallocating 128 bytes from address", allocation1);
heapSimulator.deallocate(allocation1, 128);
console.log(heapSimulator.getMemoryMap());

const allocation3 = heapSimulator.allocate(64);
console.log("\nAllocated 64 bytes at address:", allocation3);
console.log(heapSimulator.getMemoryMap());
