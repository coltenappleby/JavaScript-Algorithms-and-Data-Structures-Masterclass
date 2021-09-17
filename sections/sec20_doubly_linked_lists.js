// Doubly Linked List
// Singly Listed List but with a pointer that points to the previous node as well as the next node
// No indexing
// Comparisions with Singly Linked List
// -- More Memory = More Flexibility

//To Do
// 1. push - add to end
// 2. Pop  - remove from end
// 3. shift - remove from beginning?
// 4. Unshift - add to the beginning
// 5. Get - return a value at and index
// 6. Set - set a value at an index ie replace the value
// 7. Insert - insert a node at a index
// 8. Remove - delete a node at and index

class Node{
    constructor(value){
        this.val = value
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print(){ // print out values in an array
        let arr = []
        let current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }

    push(value){
        let node = new Node(value)
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        } else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){ // return value - sever the popped node from the rest of the list
        if(this.length === 0) return null;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        };
        let poppedNode = this.tail;
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null
        this.length--;

        return poppedNode;
    }

    shift(){ // remove from beginning
        if(!this.head) return null;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }
        let shiftedNode = this.head;
        this.head = shiftedNode.next;
        this.head.prev = null;
        shiftedNode.next = null;
        this.length--;
        return shiftedNode
    }

    unshift(value){ // add to beginning
        if(!this.head) return this.push(value);
        let newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        
        return this;
    }

    get(index){
        let node = this.head;
        for(let i = 0; i < this.length; i++){
            node = node.next
        }
        return node;

    };
}



// Tests
let list = new DoublyLinkedList()
list.push("first")
list.push("second")
list.push("third")


list.print()