class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reorderList(head) {
    if (!head || !head.next) return;
    
    // Find the middle of the list
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse the second half
    let second = reverseList(slow.next);
    slow.next = null;
    
    // Merge the two halves
    let first = head;
    while (second) {
        let temp1 = first.next;
        let temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
}

// Usage Example
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

console.log("Original list:");
let current = head;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}

reorderList(head);

console.log("Reordered list:");
current = head;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
