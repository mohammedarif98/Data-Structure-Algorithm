

//validate whether a given tree is BST or not
class Node {
    constructor(value){
        this.value = value;
        this.left = null; 
        this.right = null;
    }
}
class BST {
    constructor(){
        this.root = null;
    }
    inOrder(root = this.root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    validate(root = this.root, min = -Infinity, max = Infinity){
        if(!root)
            return true;
        if(root.value < min || root.value > max)
            return false;
        let lt, rt = false; 
        lt = this.validate(root.left, min, root.value);
        if(lt){
            rt = this.validate(root.right, root.value, max);
            return rt;
        }
        return false;
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (!root) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // Node with only one child or no child
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            // Node with two children, get the inorder successor
            root.value = this.minValueNode(root.right).value;
            // Delete the inorder successor
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }

    minValueNode(node) {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    }
    
}
// const ar1 = [10, 5, 2, 0, 7, 15, 12, 18, 16];
const bst1 = new BST();
bst1.root = new Node(20);
bst1.root.left = new Node(10);
bst1.root.right = new Node(30);
bst1.root.left.left = new Node(5);
bst1.root.left.right = new Node(15);
bst1.root.left.left.left = new Node(0);
bst1.root.left.left.right = new Node(8);
bst1.root.right.left = new Node(25);
bst1.root.right.right = new Node(35);
bst1.root.right.right.left = new Node(32);
bst1.delete(10)
bst1.inOrder();
// console.log("\n");
console.log(`Is a BST? : ${bst1.validate()}`);

