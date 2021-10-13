//  Everything to the left is smaller
// Everything to the right is larger

class BinarySearchTree {
    constructor(){
         this.root = null;
    }
}

class Node(val) {
    constructor(){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}



let tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.left = new Node(5)
tree.root.right = new Node(15)
