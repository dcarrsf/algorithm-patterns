class MemoryBlock {
  constructor(size, address) {
    this.size = size;
    this.address = address;
    this.free = true;
    this.next = null; // For linked list implementation
  }
}

class HeapMemorySimulator {
  constructor(totalSize, blockSize) {
    this.totalSize = totalSize;
    this.blockSize = blockSize;
    this.memory = new Array(Math.floor(totalSize / blockSize)).fill(null);
    this.initializeMemory();
  }

  initializeMemory() {
    const blocksCount = Math.floor(this.totalSize / this.blockSize);
    for (let i = 0; i < blocksCount; i++) {
      const address = i * this.blockSize;
      this.set(address, new MemoryBlock(this.blockSize, address));
    }
  }

  hash(address) {
    return Math.floor(address / this.blockSize) % this.memory.length;
  }

  set(address, block) {
    const index = this.hash(address);
    if (!this.memory[index]) {
      this.memory[index] = block;
    } else {
      let current = this.memory[index];
      while (current.next) {
        if (current.address === address) {
          current.size = block.size;
          current.free = block.free;
          return;
        }
        current = current.next;
      }
      if (current.address === address) {
        current.size = block.size;
        current.free = block.free;
      } else {
        current.next = block;
      }
    }
  }

  get(address) {
    const index = this.hash(address);
    let current = this.memory[index];
    while (current) {
      if (current.address === address) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  allocate(size) {
    const blocksNeeded = Math.ceil(size / this.blockSize);
    let startAddress = null;
    let consecutiveBlocks = 0;

    for (let i = 0; i < this.memory.length; i++) {
      let current = this.memory[i];
      while (current) {
        if (current.free) {
          if (startAddress === null) startAddress = current.address;
          consecutiveBlocks++;

          if (consecutiveBlocks === blocksNeeded) {
            // Allocate the blocks
            for (let j = 0; j < blocksNeeded; j++) {
              const allocatedBlock = this.get(startAddress + j * this.blockSize);
              allocatedBlock.free = false;
            }
            return startAddress;
          }
        } else {
          startAddress = null;
          consecutiveBlocks = 0;
        }
        current = current.next;
      }
    }

    return null; // Unable to allocate
  }

  deallocate(address, size) {
    const blocksToFree = Math.ceil(size / this.blockSize);
    for (let i = 0; i < blocksToFree; i++) {
      const blockAddress = address + i * this.blockSize;
      const block = this.get(blockAddress);
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
    for (let i = 0; i < this.memory.length; i++) {
      let current = this.memory[i];
      while (current) {
        memoryMap.push({
          address: current.address,
          size: current.size,
          free: current.free
        });
        current = current.next;
      }
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
