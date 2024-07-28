
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  
    find(value) {
      if (!this.root) return false;
  
      let current = this.root;
      while (current) {
        if (value === current.value) return true;
        if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return false;
    }
  
    remove(value) {
      this.root = this._removeNode(this.root, value);
    }
  
    _removeNode(node, value) {
      if (!node) {
        return null;
      }
      if (value < node.value) {
        node.left = this._removeNode(node.left, value);
      } else if (value > node.value) {
        node.right = this._removeNode(node.right, value);
      } else {
        // Node to be deleted found
        // Case 1: Node with only one child or no child
        if (!node.left) return node.right;
        if (!node.right) return node.left;
        // Case 2: Node with two children
        const minValue = this._findMinValue(node.right);
        node.value = minValue;
        node.right = this._removeNode(node.right, minValue);
      }
      return node;
    }
  
    _findMinValue(node) {
      while (node.left) {
        node = node.left;
      }
      return node.value;
    }

    _findMaxValue(node) {
        while (node.right) {
          node = node.right;
        }
        return node.value;
      }

    inOrder(root){
      if(root){
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right)
      }
    }

  }
  
  // Example usage
  const bst = new BinarySearchTree();
  bst.insert(20);
  bst.insert(10);
  bst.insert(30);
  bst.insert(5);
  bst.insert(15);
  bst.insert(25);
  bst.insert(35);
  bst.insert(3)
  bst.insert(8)

  bst.remove(5);
  
  console.log(bst.find(5)); // Output: false
  console.log(bst._findMinValue(bst.root));
  console.log(bst._findMaxValue(bst.root));
  console.log('---inorder---');
  bst.inOrder(bst.root)