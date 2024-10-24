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
}