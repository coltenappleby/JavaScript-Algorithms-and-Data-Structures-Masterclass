class Node {
    constructor(val){
        this.val = val;
        this.next = null
    }   
}


let first = new Node(1)
first.next = new Node(3)

console.log(first.next.val)