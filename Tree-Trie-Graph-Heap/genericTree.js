class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    addChild(childValue) {
        const childNode = new TreeNode(childValue);
        this.children.push(childNode);
    }
    printTree(indent = 0) {
        console.log("  ".repeat(indent) + this.value);
        for (const child of this.children) {
            child.printTree(indent + 1);
        }
    }
    deleteNode(targetValue) {
        const index = this.children.findIndex(child=>child.value===targetValue);
        if (index !== -1) {
            this.children.splice(index, 1);
            return true;
        }
        for (const child of this.children) {
            if (child.deleteNode(targetValue)) {
                return true;
            }
        }
        return false;
    }

    findNode(targetValue) {
        if (this.value === targetValue) {
            return this;
        }
        for (const child of this.children) {
            const foundNode = child.findNode(targetValue);
            if (foundNode) {
                return foundNode;
            }
        }
        return null;
    }
}

const root = new TreeNode(1);
root.addChild(2);
root.addChild(3);
root.addChild(4);
const node2 = root.children[0];
node2.addChild(5);
node2.addChild(6);
const node3 = root.children[1];
node3.addChild(7);
node3.addChild(8);
node3.addChild(9);
const node4 = root.children[2]
node4.addChild(10)
// Printing the tree structure
console.log("Tree Structure:");
root.printTree();

// console.log("\nDeleting node with value 3:");
// root.deleteNode(7);

// Finding a node by value
// const foundNode = root.findNode(5);
// if (foundNode) {
//     console.log("\nFound Node:", foundNode.value);
// } else {
//     console.log("\nNode not found.");
// }
