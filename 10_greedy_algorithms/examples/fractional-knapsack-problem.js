function fractionalKnapsack(items, capacity) {
    items.sort((a, b) => b.value / b.weight - a.value / a.weight);
    let totalValue = 0;
    let remainingCapacity = capacity;

    for (let item of items) {
        if (remainingCapacity >= item.weight) {
            totalValue += item.value;
            remainingCapacity -= item.weight;
        } else {
            totalValue += (item.value / item.weight) * remainingCapacity;
            break;
        }
    }

    return totalValue;
}

const items = [
    {weight: 10, value: 60},
    {weight: 20, value: 100},
    {weight: 30, value: 120}
];
console.log(fractionalKnapsack(items, 50)); // Output: 240
