class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    const minHeap = new MinHeap();
    
    // Push the head of each list
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] !== null) {
            minHeap.push([lists[i].val, i]);
            lists[i] = lists[i].next;
        }
    }
    
    const dummy = new ListNode();
    let tail = dummy;
    
    while (minHeap.heap.length > 0) {
        const [val, listIndex] = minHeap.pop();
        tail.next = new ListNode(val);
        tail = tail.next;
        
        if (lists[listIndex] !== null) {
            minHeap.push([lists[listIndex].val, listIndex]);
            lists[listIndex] = lists[listIndex].next;
        }
    }
    
    return dummy.next;
}

// Usage Example
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));
const result = mergeKLists([list1, list2, list3]);
let current = result;
while (current) {
    console.log(current.val);
    current = current.next;
}
// Output: 1 1 2 3 4 4 5 6
