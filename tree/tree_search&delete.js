
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class binaryTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        let newnode = new Node(value);
        if(this.root==null){
            this.root = newnode;
        }else{
            this.insertNode(this.root,newnode)
        }
    }
    insertNode(node,newnode){
        if(newnode.value<node.value){
            if(node.left === null){
                node.left = newnode;
            }else{
                this.insertNode(node.left,newnode)
            }
        }else{
            if(node.right === null){
                node.right = newnode;
            }else{
                this.insertNode(node.right,newnode)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value==value){
                return true;
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    delete(value){
        this.root = this.deletenode(this.root,value)
    }
    deletenode(root,value){
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deletenode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deletenode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
        }
        return root;
    }

}

let bt = new binaryTree();
bt.insert(2)
bt.insert(7)
bt.insert(3)
bt.insert(23)
bt.insert(11)
bt.delete(11)
console.log("searching :",bt.search(bt.root,11));
bt.preOrder(bt.root)