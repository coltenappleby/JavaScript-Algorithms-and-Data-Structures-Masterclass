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
        let newHead = new Node(val)
        if(!this.head){
            this.head = newHead;
            this.tail = newHead;
        } else{
            let oldHead = this.head;
            newHead.next = oldHead;
            this.head = newHead;
        }
        this.length++;
        return this;
    }
    // Both ways work
    // unshift(val) {
    //     let oldHead = this.head;
    //     let newHead = new Node(val)
    //     newHead.next = oldHead;
    //     this.head = newHead;
    //     this.length++;
    //     if(this.length === 1){this.tail = this.head}
    //     return this;
    // }

    // get - indexing - takes in a number and return the number at that index
    get(ind) {
        if(ind >= this.length || ind < 0) return null;
        let currentNode = this.head;
        for(let i = 0; i < ind; i++){
            currentNode = currentNode.next
            i++;
        }
        return currentNode;
    }
    // set -- accept an index and a new value -- will replace value at the given index
    set(index, value){
        let node = get(index);
        if(!node) return false;
        node.value = value;
        return true;
    }

    // insert - add a node to the Linked List at a specific position

    insert(index, value){
        if(index > this.length || index < 0) return null;
        let newNode = new Node(value)
        if(index === 0){
            this.unshift(value)
        } else if(index === this.length) {
            this.push(value)
        } else {
            let node = this.get(index-1)
            newNode.next = node.next;
            node.next = newNode;
        }
       

        this.length++;
        return this;
    }
    // remove an item at the given index
    remove(index) {
        if(index < 0 || index > this.length) return null;
        if(index === this.length-1) this.pop()
        if(index === 0) this.shift()

        let nodeBeforeRemoved = this.get(index-1)
        nodeBeforeRemoved.next = nodeBeforeRemoved.next.next

        return this
    }

    printAsArray(){
        let arr = []
        let node = this.head
        for(let i=0;i<this.length;i++){
            arr.push(node.val)
            node = node.next
        }
        return(arr)
    }
}

var list = new SinglyLinkedList()
list.push("new value")
list.push("new new value")
list.push("new new new value")