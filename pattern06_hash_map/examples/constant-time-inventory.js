const inventory = new Map();

function updateStock(itemId, quantity) {
    inventory.set(itemId, (inventory.get(itemId) || 0) + quantity);
}

function checkStock(itemId) {
    return inventory.get(itemId) || 0;
}

// Usage Example
updateStock("apple", 50);
updateStock("banana", 30);
updateStock("apple", -10);

console.log(checkStock("apple")); // 40
console.log(checkStock("banana")); // 30
console.log(checkStock("orange")); // 0
