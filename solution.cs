Here is a JavaScript solution for manually serializing and deserializing a linked list into a string:

```javascript
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        if (!this.head) {
            this.head = new Node(val);
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(val);
    }

    serialize() {
        let current = this.head;
        let str = '';
        while (current) {
            str += current.val + ' ';
            current = current.next;
        }
        return str.trim();
    }

    deserialize(str) {
        let vals = str.split(' ');
        this.head = null;
        for (let val of vals) {
            this.append(val);
        }
    }
}

let list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');

let str = list.serialize();
console.log(str);

list.deserialize(str);
console.log(list);
```

In this solution, we define a `Node` class to represent each node in the linked list, and a `LinkedList` class to represent the linked list itself. The `LinkedList` class has methods to append a new node to the end of the list (`append`), serialize the list into a string (`serialize`), and deserialize a string back into a list (`deserialize`). The `serialize` method works by traversing the list and concatenating the value of each node into a string. The `deserialize` method works by splitting the string into an array of values, and appending each value to the list.