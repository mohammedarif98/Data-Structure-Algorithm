
// class CompleteBinaryTree {
//     constructor() {
//         this.nodes = [];
//     }
//     insert(value) {
//         const newNode = { value };
//         this.nodes.push(newNode);
//         const currentIndex = this.nodes.length - 1;
//         const parentIndex = Math.floor((currentIndex - 1) / 2);
//         if (currentIndex > 0) {
//             if (currentIndex % 2 === 0) {
//                 this.nodes[parentIndex].right = newNode;
//             } else {
//                 this.nodes[parentIndex].left = newNode;
//             }
//         }
//     }
//     levelOrderTraversal() {
//         for (const node of this.nodes) {
//             console.log(node.value);
//         }
//     }
// }
// // Example usage
// const completeBinaryTree = new CompleteBinaryTree();
// completeBinaryTree.insert(1);
// completeBinaryTree.insert(2);
// completeBinaryTree.insert(3);
// completeBinaryTree.insert(4);
// completeBinaryTree.insert(5);
// completeBinaryTree.insert(6);

// console.log("Before Deletion:");
// completeBinaryTree.levelOrderTraversal();

// completeBinaryTree.delete(3);

// console.log("After Deletion:");
// completeBinaryTree.levelOrderTraversal();

// delete(value) {
//     const nodeIndex = this.nodes.findIndex(node => node.value === value);
//     if (nodeIndex === -1) {
//         return;
//     }
//     const lastNode = this.nodes.pop();
//     if (nodeIndex !== this.nodes.length) {
//         this.nodes[nodeIndex] = lastNode;
//     }
//     const parentIndex = Math.floor((nodeIndex - 1) / 2);
//     if (nodeIndex === 0 || lastNode.value > this.nodes[parentIndex].value) {
//         if (lastNode.value > this.nodes[parentIndex].value) {
//             this.nodes[parentIndex].right = null;
//         } else {
//             this.nodes[parentIndex].left = null;
//         }
//     }
// }

//!============================

class CompleteBinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class CompleteBinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new CompleteBinaryTreeNode(value);
        } else {
            this.insertNode(this.root, value);
        }
    }

    insertNode(node, value) {
        const queue = [];
        queue.push(node);
        while (queue.length > 0) {
            const current = queue.shift();
            if (current.left === null) {
                current.left = new CompleteBinaryTreeNode(value);
                break;
            } else {
                queue.push(current.left);
            }
            if (current.right === null) {
                current.right = new CompleteBinaryTreeNode(value);
                break;
            } else {
                queue.push(current.right);
            }
        }
    }

    levelOrderTraversal() {
        if (this.root === null) {
            return;
        }
        const queue = [];
        queue.push(this.root);
        while (queue.length > 0) {
            const current = queue.shift();
            console.log(current.value);
            if (current.left !== null) {
                queue.push(current.left);
            }
            if (current.right !== null) {
                queue.push(current.right);
            }
        }
    }

}

// Example usage
const cbt = new CompleteBinaryTree();
cbt.insert(1);
cbt.insert(2);
cbt.insert(3);
cbt.insert(4);
cbt.insert(5);
cbt.insert(6);

console.log("Level Order Traversal:");
cbt.levelOrderTraversal();
