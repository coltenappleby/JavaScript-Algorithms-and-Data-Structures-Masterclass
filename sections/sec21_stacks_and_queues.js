// Stacks are LIFO
// Queues are FIFO

class Node{
    constructor(value){
        this.val = value;
        this.prev = null;
    }
}

class Stack{
    constructor(){
        this.start = null;
        this.end = null;
        this.length = 0;
    }

    push(){ // add to beginning
        let node = new Node(value)
        if(!this.start){
            this.start = node 
        }
        node.prev = this.end;
        this.end = node ;
        this.length++;
    }

    pop(){ // remove from beginning
        if(this.length === 0) return null;
        let node = this.end;
        this.end = node.prev;
        node.prev = null;
        return node;
    }
}