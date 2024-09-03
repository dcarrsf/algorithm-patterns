class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return prev;
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

head = reverseList(head);

console.log("Reversed list:");
current = head;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
