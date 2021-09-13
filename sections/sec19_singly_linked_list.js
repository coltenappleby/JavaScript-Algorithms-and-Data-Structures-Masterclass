class Node {
    constructor(val){
        this.val = val;
        this.next = null
    }   
}
// let first = new Node(1)
// first.next = new Node(3)

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    first(){
        return this.head;
    }
    // push
    push(val){ 
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // pop
    pop() {
        if(!this.head) return undefined;

        let currentNode = this.head;
        let newTail = currentNode;
        while(currentNode.next){
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        this.length--;
        this.tail = newTail;
        this.tail.next = null;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    //shift - remove a node from the beginning and return it
    shift() {
        if(!this.head) return undefined;
        let oldHead = this.head;
        let newHead = oldHead.next;
        oldHead.next = null; // Colt steele leaves this off - will it cause memory leakage?
        this.head = newHead;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return oldHead;
    }
    //unshifting - adding a new node to the beginning of the Linked List.
    unshift(val) {
        let oldHead = this.head;
        let newHead = new Node(val)
        newHead.next = oldHead;
        this.head = newHead;
        this.length++;
        if(this.length === 1){this.tail = this.head}
        return this;
    }
}

var list = new SinglyLinkedList()
list.push("new value")
list.push("new new value")
list.push("new new new value")