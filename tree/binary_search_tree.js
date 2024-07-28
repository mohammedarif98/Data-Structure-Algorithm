// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }
//     insert(value){
//         let newnode = new Node(value);
//         if(this.root==null){
//             this.root = newnode;
//         }else{
//             this.insertnode(this.root,newnode);
//         }
//     }
//     insertnode(root,newnode){
//         if(newnode.value<root.value){
//             if(root.left===null){
//                 root.left = newnode;
//             }else{
//                 this.insertnode(root.left,newnode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right = newnode;
//             }else{
//                 this.insertnode(root.right,newnode)
//             } 
//         }
//     }
//     // height(node) {
//     //     if (!node) {
//     //       return 0;
//     //     } else {
//     //       const leftHeight = this.height(node.left);
//     //       const rightHeight = this.height(node.right);
//     //       return Math.max(leftHeight, rightHeight)+1;
//     //     }
//     //   }
//     // min(root = this.root) {
//     //     if (!root) {
//     //       return null; // Handle case where tree is empty
//     //     } else if (!root.left) {
//     //       return root.value;
//     //     } else {
//     //       return this.min(root.left);
//     //     }
//     //   }
//     // max(root = this.root) {
//     //   if (!root) {
//     //     return null; // Handle case where tree is empty
//     //   } else if (!root.right) {
//     //     return root.value;
//     //   } else {
//     //     return this.max(root.right);
//     //   }
//     // }
// //! isbst
//      isbst(root,min,max){
//         if(!root){
//             return true;
//         }
//         if(root.value<min || root.value>max){
//             return false;
//         }
//         return(
//           this.isbst(root.left,min,root.value-1)&&
//           this.isbst(root.right,root.value+1,max)
//           );
//         }
//     //  levelOrder() {
//     //     const queue = [];
//     //     queue.push(this.root);
//     //     while (queue.length) {
//     //       let curr = queue.shift();
//     //       console.log(curr.value);
//     //       if (curr.left) {
//     //         queue.push(curr.left);
//     //       }
//     //       if (curr.right) {
//     //         queue.push(curr.right);
//     //       }
//     //     }
//     //   }
//     //   inOrder(root) {
//     //     if (root) {
//     //       this.inOrder(root.left);
//     //       console.log(root.value);
//     //       this.inOrder(root.right);
//     //     }
//     //   }
//     //   preOrder(root) {
//     //     if (root) {
//     //       console.log(root.value);
//     //       this.preOrder(root.left);
//     //       this.preOrder(root.right);
//     //     }
//     //   }
//     //   postOrder(root) {
//     //     if (root) {
//     //       this.postOrder(root.left);
//     //       this.postOrder(root.right);
//     //       console.log(root.value);
//     //     }
//     //   }

// }

// let bst = new BinarySearchTree();
// bst.insert(12)
// bst.insert(9)
// bst.insert(7)
// bst.insert(101)
// bst.insert(18)
// bst.insert(15)
// bst.insert(20)
// console.log('---levelorder--');
// console.log("is bst : ",bst.isbst());


// // bst.levelOrder(bst.root);
// // console.log("min value : ",bst.min());
// // console.log("max value : ",bst.max());
// // console.log("height of tree : ",bst.height(bst.root));

// // console.log('---preorder--');
// // bst.preOrder(bst.root);
// // console.log('---inorder--');
// // bst.inOrder(bst.root);
// // console.log('--postorder--');
// // bst.postOrder(bst.root);




class Node{
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null
  }
}
class BinarySearchTree{
  constructor(){
      this.root = null;
  }
  insert(value){
      let newnode = new Node(value);
      if(this.root==null){
          this.root = newnode;
      }else{
          this.insertnode(this.root,newnode);
      }
  }
  insertnode(root,newnode){
      if(newnode.value<root.value){
          if(root.left===null){
              root.left = newnode;
          }else{
              this.insertnode(root.left,newnode)
          }
      }else{
          if(root.right===null){
              root.right = newnode;
          }else{
              this.insertnode(root.right,newnode)
          } 
      }
  }
//! isbst
   isbst(root,min,max){
      if(!root){
          return true;
      }
      if(root.value<min || root.value>max){
          return false;
      }
      return(
        this.isbst(root.left,min,root.value-1)&&
        this.isbst(root.right,root.value+1,max)
        );
      }
}
let bst = new BinarySearchTree();
bst.insert(12)
bst.insert(9)
bst.insert(7)
bst.insert(101)
bst.insert(18)
bst.insert(151)
bst.insert(20)
console.log("is bst : ",bst.isbst());

