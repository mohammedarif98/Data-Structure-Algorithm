class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(value){
        let newnode = new Node(value);
        if(this.root === null){
            this.root = newnode;
        }else{
            this.insertNode(this.root,newnode) 
        }
    }
    insertNode(root,newnode){
        if(newnode.value<root.value){
            if(root.left === null){
                root.left = newnode;
            }else{
                this.insertNode(root.left,newnode)
            }
        }else{
            if(root.right === null){
                root.right === newnode;
            }else{
                this.insertNode(root.right.newnode)
            }
        }
    }
    isbst(root,min,max){
        if(!node){
            return true
        }
        if(root.value<min || root.value>max){
            return false;
        }
        return(
            this.isbst(root.left,min,root.value)&&
            this.isbst(root.right,max,root.value)
        );
    }
    isidetical(root1,root2){
        if(!root1 && !root2){
            return true;
        }
        if(!root1 || !root2){
            return false;
        }
        if(root1.value !== root2.value){
            return false;
        }
        return(
            this.isidetical(root1.left,root2.left)&&
            this.isidetical(root2.right,root2.right)
        )
    }
}

let b1 = new BST();
b1.insert(10)
b1.insert(12)
b1.insert(54)
b1.insert(76)
b1.insert(72)
b1.insert(30)
b1.insert(5)
let b2 = new BST();
b2.insert(10)
b2.insert(12)
b2.insert(54)
b2.insert(76)
b2.insert(72)
b2.insert(30)
b2.insert(5)

console.log(b1.isidetical(b1.root,b2.root));