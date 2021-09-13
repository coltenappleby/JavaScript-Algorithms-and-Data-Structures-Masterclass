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
    pop(val) {
        if(!this.head) return undefined;

        let currentNode = this.head;
        while(currentNode !== this.tail){
            if(currentNode.next !== this.tail){
                this.tail = currentNode
                this.tail.next = null
                //delete this.tail
            }



            currentNode = currentNode.next
        }
    }
}

var list = new SinglyLinkedList()
list.push("new value")
list.push("new new value")
list.push("new new new value")