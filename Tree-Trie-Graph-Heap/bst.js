
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class binarysearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        let newnode = new Node(value);
        if(this.root === null){
            this.root = newnode;
        }else{
            this.insertNode(this.root,newnode);
        }
    }

    insertNode(root,newnode){
        if(newnode.value < root.value){
            if(root.left === null){
                root.left = newnode;
            }else{
                this.insertNode(root.left,newnode)
            }
        }else{
            if(root.right === null){
                root.right = newnode;
            }else{
                this.insertNode(root.right,newnode)
            }
        }
    }

    minValue(root) {
        if (!root.left) {
            return root.value;
        }
        return this.minValue(root.left);
    }

    maxValue(root) {
        if (!root.right) {
            return root.value;
        }
        return this.maxValue(root.right);
    }
      
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true;
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

//* dfs traversal

  

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
//* bfs traversal
    levelOrder(){
        let queue = [];
        queue.push(this.root)
        while(queue.length){
            let current = queue.shift()
            console.log(current.value);
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
        }
    }

    height(root) {
        if (!root) {
            return -1; // Height of an empty subtree is -1
        } else {
            const leftHeight = this.height(root.left);
            const rightHeight = this.height(root.right);
            return Math.max(leftHeight, rightHeight) + 1;
        }
    }
    depthOfNode(root, value) {
        if (!root) {
            return -1; // Node not found
        }
        if (root.value === value) {
            return 0; // Found the target node
        }
        const leftDepth = this.depthOfNode(root.left, value);
        const rightDepth = this.depthOfNode(root.right, value);
        if (leftDepth === -1 && rightDepth === -1) {
            return -1; // Node not found in both subtrees
        }
        return Math.max(leftDepth, rightDepth) + 1;
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (!root) {
            return null;
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
            root.value = this.minValue(root.right).value;
            // Delete the inorder successor
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
    
    isBST(node,min,max) {
        if (!node){
          return true;
        }
        if(node.value < min || node.value > max){
          return false;
        }
        return(
          this.isBST(node.left, min, node.value)&&
          this.isBST(node.right, node.value, max)
        );
    }

    isIdentical(node1, node2) {
        if (!node1 && !node2) {
            return true; // Both nodes are null, so they match
        }
        if (!node1 || !node2) {
            return false; // One of the nodes is null, they don't match
        }
        if (node1.value !== node2.value) {
            return false; // Values are different, trees don't match
        }
        return (
            this.isIdentical(node1.left, node2.left) &&
            this.isIdentical(node1.right, node2.right)
        );
    }

    inorder(root){
        if(root){
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right)
        }
    }

    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right)
        }
    }

    postorder(root){
        if(root){
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(root.value);
        }
    }

}

let bst = new binarysearchTree();

bst.insert(20)
bst.insert(10)
bst.insert(30)
bst.insert(5)
bst.insert(15)
bst.insert(25)
bst.insert(35)

let bst2 = new binarysearchTree();

bst2.insert(20)
bst2.insert(10)
bst2.insert(30)
bst2.insert(5)
bst2.insert(15)
bst2.insert(25)
bst2.insert(35)

console.log("compare 2 bts equal");
console.log(bst.isIdentical(bst.root,bst2.root));

// console.log('-----levelorder-----');
// bst.levelOrder()

// bst.delete(5)

// console.log('-----after delete-----');
// bst.levelOrder()

// console.log("----inorder----")
// bst.inOrder(bst.root);

// console.log("----preorder----")
// bst.preOrder(bst.root);

// console.log("----postorder----")
// bst.postOrder(bst.root);

// console.log(bst.search(bst.root,20));
// console.log(bst.search(bst.root,22));

// console.log('min : ',bst.minValue(bst.root));
// console.log('max : ',bst.maxValue(bst.root));
// console.log(`min value : ${bst.minValue(bst.root)}`);
// console.log(`max value : ${bst.maxValue(bst.root)}`);

// console.log('height of tree : ',bst.height(bst.root));


// console.log("depth of node : ",bst.depthOfNode(bst.root, 9));
// const targetValue = 9;
// const depth = bst.depthOfNode(bst.root, 9);
// if (depth !== -1) {
//     console.log(`Depth of node with value ${targetValue}:`, depth);
// } else {
//     console.log(`Node with value ${targetValue} not found.`);
// }

console.log("is bst : ",bst.isBST());
console.log("is bst : ",bst2.isBST());

