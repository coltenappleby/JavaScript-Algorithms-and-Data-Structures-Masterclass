//  Everything to the left is smaller
// Everything to the right is larger

class Node {
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
         this.root = null;
    }

    insert(val) {
        let newNode = new Node(val)
        if(this.root === null){
            this.root = newNode;
            return newNode;
        }
        let curr = this.root;
        while(true) {
            if(val > curr.value){
                if(curr.right === null){
                    curr.right = newNode
                    return this
                } else {
                    curr.right = curr
                    continue
                }
                
            } else if(val < curr.value) {
                if(curr.left === null){
                    curr.left = newNode
                    return this
                } else {
                    curr.left = curr
                    continue
                }
            } else {
                return this
            }
        }
    }
}



let tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.left = new Node(5)
tree.root.right = new Node(15)
