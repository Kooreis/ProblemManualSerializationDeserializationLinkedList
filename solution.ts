Here is a TypeScript solution for manually serializing and deserializing a linked list into a string:

```typescript
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

class LinkedList {
    head: ListNode | null;
    constructor() {
        this.head = null;
    }

    addNode(val: number) {
        if (this.head === null) {
            this.head = new ListNode(val);
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = new ListNode(val);
        }
    }

    serialize(): string {
        let str = '';
        let temp = this.head;
        while (temp !== null) {
            str += temp.val + ',';
            temp = temp.next;
        }
        return str.slice(0, -1);
    }

    deserialize(s: string) {
        let arr = s.split(',');
        this.head = null;
        for (let i = arr.length - 1; i >= 0; i--) {
            let node = new ListNode(parseInt(arr[i]), this.head);
            this.head = node;
        }
    }
}

let list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
let serialized = list.serialize();
console.log(serialized);
list.deserialize(serialized);
console.log(list);
```

In this solution, we first define a `ListNode` class to represent a node in the linked list. We then define a `LinkedList` class that contains methods for adding a node to the list, serializing the list into a string, and deserializing a string back into a list. The `serialize` method traverses the list and appends each node's value to a string, separated by commas. The `deserialize` method splits a string by commas into an array, then iterates over the array in reverse order to create a new linked list.