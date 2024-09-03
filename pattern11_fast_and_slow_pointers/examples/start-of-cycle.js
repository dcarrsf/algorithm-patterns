function detectCycle(head) {
    if (!head || !head.next) return null;
    
    let slow = head;
    let fast = head;
    let hasCycle = false;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            hasCycle = true;
            break;
        }
    }
    
    if (!hasCycle) return null;
    
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
}

// Usage Example
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next; // Create cycle

let cycleStart = detectCycle(head);
console.log(cycleStart.val); // Output: 2
