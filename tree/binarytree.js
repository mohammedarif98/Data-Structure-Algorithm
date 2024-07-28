class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newnode = new Node(value);
        if(this.root === null){
            this.root = newnode;
        }else{
            this.insertnode(this.root,newnode)
        }
    }

    insertnode(node,newnode){
        if(newnode.value<node.value){
            if(node.left===null){
                node.left = newnode;
            }else{
                this.insertnode(node.left,newnode);
            }
        }else{
            if(node.right===null){
                node.right = newnode;
            }else{
                this.insertnode(node.right,newnode);
            }
        }
    }


//! in-order traversal
    inOrder(root){
        if(root){
          this.inOrder(root.left)
          console.log(root.value);
          this.inOrder(root.right)
        }
    }
//! pre-order traversal
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
//! post-order traverasal
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
//! level-order traversal
    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } 
        else {
            // Node with only one child or no child
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }
        }
        return node;
    }

}

const bst = new BinaryTree();

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(4)
bst.insert(8)
bst.insert(30)
bst.insert(35)
// bst.levelOrder();
console.log('---before delete--');
bst.preOrder(bst.root)
//todo delete specific node in binary tree
console.log('---after delete--');
bst.delete(4)
//todo type of traversal in binary tree
// bst.inOrder(bst.root)
bst.preOrder(bst.root)
// bst.postOrder(bst.root)
// bst.levelOrder();
//todo min-value
// console.log("min value : ",bst.findMinValue());