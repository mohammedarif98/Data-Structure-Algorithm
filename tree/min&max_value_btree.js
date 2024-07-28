
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
            this.root=newnode
        }else{
            this.insertnode(this.root,newnode)
        }
    }
    insertnode(node,newnode){
        if(newnode.value<node.value){
            if(node.left == null){
                node.left = newnode;
            }else{
                this.insertnode(node.left,newnode)
            }
        }else{
            if(node.right == null){
                node.right = newnode;
            }else{
                this.insertnode(node.right,newnode)
            }
        }
    }

    inOrder(node){    // [ left,root,right ]
        if(node){
            this.inOrder(node.left)
            console.log(node.value)
            this.inOrder(node.right)
        }
    }

    MinValue(node){
        while (node.left !== null){
            node = node.left;
        }
        return node.value;
    }

    MaxValue(node){
        while (node.right !== null){
            node = node.right;
        }
        return node.value;
    }
}

let bt = new binaryTree();

bt.insert(2)
bt.insert(3)
bt.insert(5)
bt.insert(4)
bt.insert(7)
bt.inOrder(bt.root)
console.log("min value : ",bt.MinValue(bt.root));
console.log("min value : ",bt.MaxValue(bt.root));
