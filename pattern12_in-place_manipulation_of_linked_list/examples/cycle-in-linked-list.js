class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function hasCycle(head) {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head.next;
    
    while (slow !== fast) {
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return true;
}

// Usage Example
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = head.next; // Create a cycle

console.log("Has cycle:", hasCycle(head));
